"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import rowingWorld from "../../public/rowing-world-v7.png";
import rowingBoat from "../../public/rowing-boat-base-v5.png";

const prototypeScenes = [
  { href: "/areas/care-access", title: "Designing for Care", connection: "Connection with people", left: "28%", top: "67%" },
  { href: "/areas/making-systems", title: "Making & Systems", connection: "Connection through making", left: "35%", top: "34%" },
  { href: "/areas/materials-time", title: "Materials & Time", connection: "Connection with consequence", left: "28%", top: "57%" },
  { href: "/areas/mind-body-behavior", title: "Mind, Body & Behavior", connection: "Connection with ourselves", left: "33%", top: "42%" },
  { href: "/areas/play-ai-interaction", title: "Play, AI & Interaction", connection: "Connection through interaction", left: "30%", top: "58%" },
] as const;

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

  float ellipseMask(vec2 uv, vec2 center, vec2 radius) {
    vec2 distanceFromCenter = (uv - center) / radius;
    return 1.0 - smoothstep(0.62, 1.0, dot(distanceFromCenter, distanceFromCenter));
  }

  float treeMask(vec2 uv) {
    float mask = 0.0;
    mask = max(mask, ellipseMask(uv, vec2(0.10, 0.94), vec2(0.12, 0.075)));
    mask = max(mask, ellipseMask(uv, vec2(0.29, 0.95), vec2(0.11, 0.07)));
    mask = max(mask, ellipseMask(uv, vec2(0.48, 0.91), vec2(0.075, 0.065)));
    mask = max(mask, ellipseMask(uv, vec2(0.08, 0.79), vec2(0.11, 0.09)));
    mask = max(mask, ellipseMask(uv, vec2(0.25, 0.80), vec2(0.075, 0.06)));
    mask = max(mask, ellipseMask(uv, vec2(0.49, 0.75), vec2(0.06, 0.055)));
    mask = max(mask, ellipseMask(uv, vec2(0.10, 0.61), vec2(0.12, 0.09)));
    mask = max(mask, ellipseMask(uv, vec2(0.23, 0.57), vec2(0.075, 0.06)));
    mask = max(mask, ellipseMask(uv, vec2(0.49, 0.53), vec2(0.065, 0.055)));
    mask = max(mask, ellipseMask(uv, vec2(0.09, 0.39), vec2(0.12, 0.10)));
    mask = max(mask, ellipseMask(uv, vec2(0.27, 0.43), vec2(0.075, 0.06)));
    mask = max(mask, ellipseMask(uv, vec2(0.50, 0.35), vec2(0.06, 0.055)));
    mask = max(mask, ellipseMask(uv, vec2(0.09, 0.14), vec2(0.13, 0.11)));
    mask = max(mask, ellipseMask(uv, vec2(0.28, 0.11), vec2(0.10, 0.07)));
    mask = max(mask, ellipseMask(uv, vec2(0.47, 0.08), vec2(0.075, 0.06)));
    return mask;
  }

  float peopleMask(vec2 uv) {
    float mask = 0.0;
    mask = max(mask, ellipseMask(uv, vec2(0.39, 0.815), vec2(0.052, 0.034)));
    mask = max(mask, ellipseMask(uv, vec2(0.45, 0.795), vec2(0.038, 0.034)));
    mask = max(mask, ellipseMask(uv, vec2(0.36, 0.645), vec2(0.075, 0.035)));
    mask = max(mask, ellipseMask(uv, vec2(0.30, 0.555), vec2(0.052, 0.035)));
    mask = max(mask, ellipseMask(uv, vec2(0.40, 0.425), vec2(0.065, 0.035)));
    mask = max(mask, ellipseMask(uv, vec2(0.36, 0.335), vec2(0.075, 0.045)));
    mask = max(mask, ellipseMask(uv, vec2(0.48, 0.315), vec2(0.043, 0.035)));
    mask = max(mask, ellipseMask(uv, vec2(0.41, 0.115), vec2(0.072, 0.04)));
    return mask;
  }

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

    float trees = treeMask(sampleUv);
    float people = peopleMask(sampleUv);
    float treeSway = sin(uTime * 0.82 + sampleUv.y * 31.0) * 0.0048;
    float branchFlutter = sin(uTime * 1.36 - sampleUv.y * 47.0) * 0.0017;
    sampleUv.x += trees * (treeSway + branchFlutter);
    sampleUv.y += trees * sin(uTime * 0.66 + sampleUv.x * 36.0) * 0.00135;

    float personPhase = uTime * 1.18 + sampleUv.y * 24.0;
    sampleUv.x += people * sin(personPhase) * 0.0028;
    sampleUv.y += people * sin(personPhase * 0.72 + 1.2) * 0.0018;

    sampleUv.x += lakeMask * sin(sampleUv.y * 82.0 + uTime * 0.72) * 0.0018;
    sampleUv.y += lakeMask * sin(sampleUv.x * 61.0 - uTime * 0.48) * 0.00125;
    sampleUv.x += landMask * (1.0 - trees) * sin(sampleUv.y * 33.0 + uTime * 0.34) * 0.00035;

    vec4 color = texture2D(uTexture, clamp(sampleUv, 0.001, 0.999));
    float light = lakeMask * sin(vUv.y * 110.0 + uTime) * 0.018;
    color.rgb += vec3(0.12, 0.25, 0.28) * light;
    color.rgb = pow(color.rgb, vec3(0.86));
    color.rgb *= vec3(1.10, 1.105, 1.06);
    color.rgb += vec3(1.0, 0.91, 0.62) * (0.035 + landMask * 0.025);
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
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      texture.dispose();
      plane.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const currentSceneIndex = Math.min(prototypeScenes.length - 1, Math.floor(Math.min(progress, 0.9999) * prototypeScenes.length));
  const currentScene = prototypeScenes[currentSceneIndex];

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

          <div className="prototype-copy" style={{ opacity: Math.max(0, 1 - progress * 9) }}>
            <p>Motion prototype · Scene 01</p>
            <h1>A painted world<br />that <em>breathes.</em></h1>
            <span>Scroll to row north ↑</span>
          </div>

          <Link
            key={currentScene.href}
            href={currentScene.href}
            className="prototype-hotspot"
            style={{ left: currentScene.left, top: currentScene.top }}
            aria-label={`Explore ${currentScene.title}`}
          >
            <i />
            <span><small>{currentScene.connection}</small><strong>{currentScene.title}</strong></span>
          </Link>

          <div
            className="prototype-stage"
            style={{ opacity: Math.min(1, Math.max(0, (progress - 0.08) * 8)) }}
            aria-live="polite"
          >
            <small>{String(currentSceneIndex + 1).padStart(2, "0")} · {currentScene.connection}</small>
            <strong>{currentScene.title}</strong>
          </div>

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
