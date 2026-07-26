"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import rowingWorld from "../../public/rowing-world-tennis-tree-v1.png";
import rowingBoat from "../../public/rowing-boat-base-v5.png";
import tennisPlayer from "../../public/prototype-characters/tennis-player-v1.png";
import paintedTree from "../../public/prototype-characters/tree-v1.png";
import walkingPerson from "../../public/prototype-characters/walker-v1.png";

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

    const characterLoader = new THREE.TextureLoader();
    const walkerTexture = characterLoader.load(walkingPerson.src);
    const playerTexture = characterLoader.load(tennisPlayer.src);
    const treeTexture = characterLoader.load(paintedTree.src);
    walkerTexture.colorSpace = THREE.SRGBColorSpace;
    playerTexture.colorSpace = THREE.SRGBColorSpace;
    treeTexture.colorSpace = THREE.SRGBColorSpace;
    const walkerMaterial = new THREE.SpriteMaterial({ map: walkerTexture, transparent: true, alphaTest: 0.04, depthTest: false });
    const playerMaterial = new THREE.SpriteMaterial({ map: playerTexture, transparent: true, alphaTest: 0.04, depthTest: false });
    const treeMaterial = new THREE.SpriteMaterial({ map: treeTexture, transparent: true, alphaTest: 0.04, depthTest: false });
    const walker = new THREE.Sprite(walkerMaterial);
    const player = new THREE.Sprite(playerMaterial);
    const tree = new THREE.Sprite(treeMaterial);
    const treePivot = new THREE.Group();
    walker.renderOrder = 3;
    player.renderOrder = 3;
    tree.renderOrder = 2;
    tree.position.y = 0.09;
    treePivot.add(tree);
    scene.add(treePivot, walker, player);

    const particleCount = 76;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = -0.98 + Math.random() * 0.95;
      positions[index * 3 + 1] = -1 + Math.random() * 2;
      positions[index * 3 + 2] = 0.25;
    }
    const basePositions = positions.slice();
    const leafGeometry = new THREE.BufferGeometry();
    leafGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const leafMaterial = new THREE.PointsMaterial({ color: 0xf2ce52, size: 0.014, transparent: true, opacity: 0.58 });
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
      for (let index = 0; index < particleCount; index += 1) {
        positions[index * 3] = basePositions[index * 3] + Math.sin(elapsed * (0.22 + (index % 5) * 0.035) + index) * 0.018;
        positions[index * 3 + 1] = basePositions[index * 3 + 1] + Math.cos(elapsed * (0.18 + (index % 7) * 0.028) + index * 0.7) * 0.026;
      }
      leafGeometry.attributes.position.needsUpdate = true;

      const imageAspect = 0.6283186;
      const aspect = uniforms.uAspect.value;
      let visibleY = Math.min(0.46, Math.max(0.34, imageAspect / aspect));
      let visibleX = 1;
      if (aspect < imageAspect) {
        visibleX = Math.min(1, Math.max(0.72, aspect / imageAspect));
        visibleY = 0.46;
      }
      const centerY = THREE.MathUtils.lerp(visibleY * 0.5, 1 - visibleY * 0.5, uniforms.uProgress.value);
      const placeWorldObject = (object: THREE.Object3D, worldX: number, worldY: number) => {
        const screenX = ((worldX - 0.5) / visibleX + 0.5) * 2 - 1;
        const screenY = ((worldY - centerY) / visibleY + 0.5) * 2 - 1;
        object.position.set(screenX, screenY, 0.45);
        object.visible = screenX > -1.15 && screenX < 1.15 && screenY > -1.15 && screenY < 1.15;
      };

      const walkCycle = (Math.sin(elapsed * 0.21) + 1) * 0.5;
      const walkDirection = Math.cos(elapsed * 0.21) >= 0 ? 1 : -1;
      placeWorldObject(walker, THREE.MathUtils.lerp(0.29, 0.47, walkCycle), 0.765 + Math.sin(elapsed * 0.42) * 0.003);
      walker.scale.set(0.042 * walkDirection, 0.082 + Math.sin(elapsed * 2.0) * 0.0018, 1);
      walkerMaterial.rotation = Math.sin(elapsed * 2.0) * 0.022;

      placeWorldObject(player, 0.375 + Math.sin(elapsed * 0.32) * 0.004, 0.815);
      player.scale.set(0.061, 0.061, 1);
      playerMaterial.rotation = -0.13 + Math.sin(elapsed * 0.62) * 0.16;

      placeWorldObject(treePivot, 0.245, 0.755);
      tree.scale.set(0.14, 0.18, 1);
      treePivot.rotation.z = Math.sin(elapsed * 0.34) * 0.018 + Math.sin(elapsed * 0.73) * 0.006;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      texture.dispose();
      walkerTexture.dispose();
      playerTexture.dispose();
      treeTexture.dispose();
      walkerMaterial.dispose();
      playerMaterial.dispose();
      treeMaterial.dispose();
      leafGeometry.dispose();
      leafMaterial.dispose();
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
        <h2>This test keeps the painted world, then separates selected characters into independent layers with their own paths and gestures.</h2>
        <Link href="/">Return to the current homepage <span>→</span></Link>
      </section>
    </main>
  );
}
