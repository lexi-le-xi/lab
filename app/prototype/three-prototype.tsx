"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import rowingWorld from "../../public/rowing-world-v7.png";
import rowingBoat from "../../public/rowing-boat-base-v5.png";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uProgress;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    const float imageAspect = 0.6283186;
    float visibleY = clamp(imageAspect / uAspect, 0.34, 0.46);
    float visibleX = 1.0;

    if (uAspect < imageAspect) {
      visibleX = clamp(uAspect / imageAspect, 0.72, 1.0);
      visibleY = 0.46;
    }

    vec2 sampleUv = vec2(
      0.5 + (vUv.x - 0.5) * visibleX,
      mix(visibleY * 0.5, 1.0 - visibleY * 0.5, uProgress) + (vUv.y - 0.5) * visibleY
    );

    float lakeMask = smoothstep(0.48, 0.64, vUv.x);
    float landMask = 1.0 - smoothstep(0.36, 0.55, vUv.x);

    sampleUv.x += lakeMask * sin(sampleUv.y * 82.0 + uTime * 0.72) * 0.0018;
    sampleUv.y += lakeMask * sin(sampleUv.x * 61.0 - uTime * 0.48) * 0.00125;
    sampleUv.x += landMask * sin(sampleUv.y * 33.0 + uTime * 0.34) * 0.0008;

    vec4 color = texture2D(uTexture, clamp(sampleUv, 0.001, 0.999));
    float light = lakeMask * sin(vUv.y * 110.0 + uTime) * 0.018;
    color.rgb += vec3(0.12, 0.25, 0.28) * light;
    gl_FragColor = color;
  }
`;

export function ThreePrototype() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const rowingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progress, setProgress] = useState(0);
  const [rowing, setRowing] = useState(false);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;

    const update = () => {
      const distance = journey.offsetHeight - window.innerHeight;
      const next = Math.min(1, Math.max(0, -journey.getBoundingClientRect().top / distance));
      progressRef.current = next;
      setProgress(next);
      setRowing(true);
      if (rowingTimer.current) clearTimeout(rowingTimer.current);
      rowingTimer.current = setTimeout(() => setRowing(false), 190);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (rowingTimer.current) clearTimeout(rowingTimer.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uAspect: { value: 1 },
    };

    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(plane);

    const texture = new THREE.TextureLoader().load(rowingWorld.src);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    uniforms.uTexture.value = texture;

    const particleCount = 46;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = -0.98 + Math.random() * 0.95;
      positions[index * 3 + 1] = -1 + Math.random() * 2;
      positions[index * 3 + 2] = 0.25;
    }
    const leafGeometry = new THREE.BufferGeometry();
    leafGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const leafMaterial = new THREE.PointsMaterial({ color: 0xe2bd3a, size: 0.012, transparent: true, opacity: 0.42 });
    const leaves = new THREE.Points(leafGeometry, leafMaterial);
    scene.add(leaves);

    const resize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.uAspect.value = width / Math.max(1, height);
    };
    resize();
    window.addEventListener("resize", resize);

    const startedAt = window.performance.now();
    let frame = 0;
    const animate = () => {
      const elapsed = (window.performance.now() - startedAt) / 1000;
      uniforms.uTime.value = elapsed;
      uniforms.uProgress.value += (progressRef.current - uniforms.uProgress.value) * 0.055;
      leaves.position.y = Math.sin(elapsed * 0.34) * 0.025;
      leaves.rotation.z = Math.sin(elapsed * 0.22) * 0.012;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      texture.dispose();
      leafGeometry.dispose();
      leafMaterial.dispose();
      plane.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <main className="three-prototype">
      <header className="prototype-nav">
        <Link href="/">XI LIU <span>/</span> LAB</Link>
        <p>Three.js shoreline study</p>
        <Link href="/">Return to current site ↗</Link>
      </header>

      <section ref={journeyRef} className="prototype-journey">
        <div className="prototype-viewport">
          <canvas ref={canvasRef} className="prototype-canvas" aria-hidden="true" />
          <div className="prototype-wash" aria-hidden="true" />

          <div className="prototype-copy">
            <p>Motion prototype · Scene 01</p>
            <h1>A painted world<br />that <em>breathes.</em></h1>
            <span>Scroll to row north ↑</span>
          </div>

          <Link href="/areas/care-access" className="prototype-hotspot" aria-label="Explore Designing for Care">
            <i />
            <span><small>Connection with people</small><strong>Designing for Care</strong></span>
          </Link>

          <Link href="/about" className={`prototype-boat ${rowing ? "is-rowing" : ""}`} aria-label="Meet Xi Liu">
            <img src={rowingBoat.src} alt="" />
            <b className="prototype-oar prototype-oar-left" />
            <b className="prototype-oar prototype-oar-right" />
            <i /><i />
          </Link>

          <div className="prototype-meter" aria-hidden="true">
            <span>01</span><i><b style={{ height: `${Math.max(4, progress * 100)}%` }} /></i><span>05</span>
          </div>
        </div>
      </section>

      <section className="prototype-note">
        <p>Prototype boundary</p>
        <h2>This test keeps the current painting, then adds real-time water distortion, drifting particles, scroll depth, and responsive rowing.</h2>
        <Link href="/">Return to the current homepage <span>→</span></Link>
      </section>
    </main>
  );
}
