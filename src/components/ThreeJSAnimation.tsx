"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { Pencil } from "lucide-react";
function getContentMaskCSS() {
  if (typeof window === "undefined") return {};
  const vw = window.innerWidth;
  let contentWidth = vw;
  if (vw >= 1024) {
    contentWidth = vw * 0.5;
  }

  const maskWidth = contentWidth - 64;
  const maskPercent = (maskWidth / vw) * 100;

  return {
    maskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent ${
      maskPercent / 2
    }vw, black ${maskPercent / 2 + 1}vw, black 100%)`,
    WebkitMaskImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent ${
      maskPercent / 2
    }vw, black ${maskPercent / 2 + 1}vw, black 100%)`,
  };
}

const ThreeJSAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const requestRef = useRef<number | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const leftWavesRef = useRef<THREE.Line[]>([]);
  const rightWavesRef = useRef<THREE.Line[]>([]);
  const [maskStyle, setMaskStyle] = useState({});

  // Draw smooth waves (modern look)
  function createWaves(
    side: "left" | "right",
    color: THREE.ColorRepresentation,
    scene: THREE.Scene
  ) {
    const waves: THREE.Line[] = [];
    const waveCount = 4;
    for (let i = 0; i < waveCount; i++) {
      const points = [];
      const amplitude = 1.2 + i * 0.3;
      const freq = 1.2 + i * 0.2;
      for (let y = -4; y <= 4; y += 0.05) {
        const x = Math.sin(y * freq + i) * amplitude;
        points.push(new THREE.Vector3(side === "left" ? -4 + x : 4 - x, y, 0));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        linewidth: 2,
        transparent: true,
        opacity: 0.5 + 0.2 * Math.sin(i),
      });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      waves.push(line);
    }
    return waves;
  }

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      25,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      setMaskStyle(getContentMaskCSS());
    };
    window.addEventListener("resize", handleResize);
    setMaskStyle(getContentMaskCSS());

    // Create waves
    const color = theme === "dark" ? 0xffffff : 0x222222;
    leftWavesRef.current = createWaves("left", color, scene);
    rightWavesRef.current = createWaves("right", color, scene);

    const animate = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

      leftWavesRef.current.forEach((line, idx) => {
        line.position.y = Math.sin(scrollPercent * Math.PI * 2 + idx) * 0.5;
        (line.material as THREE.LineBasicMaterial).opacity =
          0.5 + 0.2 * Math.sin(scrollPercent * Math.PI * 2 + idx);
      });
      rightWavesRef.current.forEach((line, idx) => {
        line.position.y = Math.cos(scrollPercent * Math.PI * 2 + idx) * 0.5;
        (line.material as THREE.LineBasicMaterial).opacity =
          0.5 + 0.2 * Math.cos(scrollPercent * Math.PI * 2 + idx);
      });
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer) {
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      }
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;
    const color = theme === "dark" ? 0xffffff : 0x222222;
    [...leftWavesRef.current, ...rightWavesRef.current].forEach((line) => {
      (line.material as THREE.LineBasicMaterial).color.set(color);
    });
  }, [theme]);

  useEffect(() => {
    setMaskStyle(getContentMaskCSS());
    const handleResize = () => setMaskStyle(getContentMaskCSS());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        ...maskStyle,
      }}
    />
  );
};

export default ThreeJSAnimation;
