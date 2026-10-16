import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeTapeHeroProps {
  className?: string;
}

export const ThreeTapeHero: React.FC<ThreeTapeHeroProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeTapeColor, setActiveTapeColor] = useState<string>('all');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 450;
    let animationFrameId: number;
    let isVisible = true;
    let isVideoPlaying = false;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 2. High-Performance Crisp Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // 3. Lighting Rig (Warm key + cool rim fill for crisp 3D edge definition)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(5, 7, 8);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const goldFillLight = new THREE.PointLight(0xff8e35, 2.8, 18);
    goldFillLight.position.set(4, -3, 3);
    scene.add(goldFillLight);

    // 4. Ultra-Crisp 512x512 Procedural Kinesio Fabric Canvas Texture (No blur)
    const createFabricTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 512, 512);

        // Fine kinesio fabric weave threads
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 512; i += 8) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, 512);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(0, i);
          ctx.lineTo(512, i);
          ctx.stroke();
        }

        // Signature kinesiology sine wave adhesive ridges
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.lineWidth = 3;
        for (let y = 16; y < 512; y += 42) {
          ctx.beginPath();
          for (let x = 0; x <= 512; x += 8) {
            const waveY = y + Math.sin((x / 512) * Math.PI * 6) * 7;
            if (x === 0) ctx.moveTo(x, waveY);
            else ctx.lineTo(x, waveY);
          }
          ctx.stroke();
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 10);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      const maxAnisotropy = renderer.capabilities.getMaxAnisotropy?.() || 4;
      texture.anisotropy = Math.min(maxAnisotropy, 8);
      return texture;
    };

    const fabricTexture = createFabricTexture();

    // 5. Tape Ribbon Strips Definition
    interface TapeStripConfig {
      id: string;
      color: number;
      width: number;
      length: number;
      offsetPhase: number;
      baseY: number;
      baseZ: number;
      rotZ: number;
      amplitude: number;
      speed: number;
    }

    const tapeConfigs: TapeStripConfig[] = [
      {
        id: 'cyan',
        color: 0x0284c7, // Vibrant cyan
        width: 0.65,
        length: 8.5,
        offsetPhase: 0,
        baseY: 0.8,
        baseZ: 0.4,
        rotZ: -0.22,
        amplitude: 0.45,
        speed: 1.1
      },
      {
        id: 'pink',
        color: 0xdb2777, // Vibrant magenta/pink
        width: 0.62,
        length: 9.0,
        offsetPhase: 1.6,
        baseY: -0.3,
        baseZ: 0.8,
        rotZ: 0.18,
        amplitude: 0.5,
        speed: 1.25
      },
      {
        id: 'yellow',
        color: 0xff8e35, // Warm golden amber oklch(0.76 0.17 53.39)
        width: 0.58,
        length: 7.8,
        offsetPhase: 3.2,
        baseY: 1.4,
        baseZ: -0.5,
        rotZ: 0.35,
        amplitude: 0.38,
        speed: 0.95
      },
      {
        id: 'black',
        color: 0x1e293b, // Tactical matte black
        width: 0.68,
        length: 8.8,
        offsetPhase: 4.8,
        baseY: -1.2,
        baseZ: -0.2,
        rotZ: -0.3,
        amplitude: 0.4,
        speed: 1.05
      },
      {
        id: 'red',
        color: 0xdc2626, // Performance red
        width: 0.6,
        length: 7.5,
        offsetPhase: 2.4,
        baseY: -0.6,
        baseZ: 1.2,
        rotZ: -0.1,
        amplitude: 0.42,
        speed: 1.3
      }
    ];

    const tapeMeshes: {
      mesh: THREE.Mesh;
      geom: THREE.PlaneGeometry;
      config: TapeStripConfig;
      initialPositions: Float32Array;
    }[] = [];

    tapeConfigs.forEach((config) => {
      const segmentsX = 64;
      const segmentsY = 6;
      const geom = new THREE.PlaneGeometry(config.length, config.width, segmentsX, segmentsY);
      const initialPositions = new Float32Array(geom.attributes.position.array);

      const mat = new THREE.MeshStandardMaterial({
        color: config.color,
        roughness: 0.32,
        metalness: 0.04,
        map: fabricTexture,
        side: THREE.DoubleSide,
        bumpMap: fabricTexture,
        bumpScale: 0.003
      });

      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(0, config.baseY, config.baseZ);
      mesh.rotation.z = config.rotZ;
      scene.add(mesh);

      tapeMeshes.push({ mesh, geom, config, initialPositions });
    });

    // 6. Interactive Mouse Movement
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.3;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    // Video playback & document visibility coordination to guarantee 100% video smoothness
    const handlePauseWebgl = () => {
      isVideoPlaying = true;
    };

    const handleResumeWebgl = () => {
      isVideoPlaying = false;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVideoPlaying = true;
      } else {
        isVideoPlaying = false;
      }
    };

    window.addEventListener('physio:pause-webgl', handlePauseWebgl);
    window.addEventListener('physio:resume-webgl', handleResumeWebgl);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 7. Intersection Observer to halt rendering when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. Animation Loop with framerate capping and zero garbage-collection stutter
    const clock = new THREE.Clock();
    let lastRenderTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Immediately return if offscreen, tab hidden, or video is playing
      if (!isVisible || isVideoPlaying) return;

      const elapsedTime = clock.getElapsedTime();

      // Cap WebGL rendering to max ~45fps to eliminate GPU/CPU resource contention with video decoders
      if (elapsedTime - lastRenderTime < 0.022) return;
      lastRenderTime = elapsedTime;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      scene.rotation.y = mouseX * 0.5;
      scene.rotation.x = -mouseY * 0.4;

      // Deform ribbon meshes like undulating kinetic fabric (lightweight sinusoidal math without expensive normal re-computation)
      tapeMeshes.forEach(({ mesh, geom, config, initialPositions }) => {
        const posAttr = geom.attributes.position;
        const count = posAttr.count;

        const time = prefersReducedMotion ? 0 : elapsedTime * config.speed;

        for (let i = 0; i < count; i++) {
          const initX = initialPositions[i * 3];
          const initY = initialPositions[i * 3 + 1];

          // Sinusoidal wave along ribbon length
          const wave1 = Math.sin(initX * 0.85 + time + config.offsetPhase) * config.amplitude;
          const wave2 = Math.cos(initX * 1.5 - time * 0.8) * 0.15;
          const twist = Math.sin(initX * 0.5 + time * 0.5) * initY * 0.6;

          posAttr.setZ(i, wave1 + wave2);
          posAttr.setY(i, initY + twist);
        }

        posAttr.needsUpdate = true;

        // Subtle floating movement
        mesh.position.y = config.baseY + Math.sin(time * 0.7 + config.offsetPhase) * 0.12;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Sharp Resize Handling with ResizeObserver
    const handleResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newWidth = Math.round(rect.width) || container.clientWidth || 500;
      const newHeight = Math.round(rect.height) || container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('physio:pause-webgl', handlePauseWebgl);
      window.removeEventListener('physio:resume-webgl', handleResumeWebgl);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      resizeObserver.disconnect();

      // Clean up geometries and materials
      tapeMeshes.forEach(({ mesh, geom }) => {
        geom.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
        scene.remove(mesh);
      });
      fabricTexture.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-[400px] md:h-[460px] rounded-2xl overflow-hidden border-2 border-amber-300/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-xl ${className}`}>
      {/* 3D WebGL Canvas Mounting Point */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* Crisp subtle perimeter vignette (No blur filter or noise layer) */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(2,6,23,0.5)] z-10" />

      {/* Header Tag within 3D Space */}
      <div className="absolute top-4 left-5 z-20 flex items-center gap-2 pointer-events-none">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff8e35] shadow-[0_0_8px_rgba(255,142,53,0.9)]" />
        <span className="text-xs font-mono uppercase tracking-wider text-amber-200 font-bold">
          3D Multi-System Kinetic Tape Simulator
        </span>
      </div>

      {/* Tape Color Indicator Strip */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 text-xs bg-slate-950/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-amber-300/40 text-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-amber-300 font-bold">Signature Tapes:</span>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-sm bg-sky-500 shadow-xs" title="Kinesio Cyan" />
            <span className="inline-block w-3 h-3 rounded-sm bg-pink-500 shadow-xs" title="Kinesio Magenta" />
            <span className="inline-block w-3 h-3 rounded-sm bg-[#ff8e35] shadow-xs" title="Golden Amber" />
            <span className="inline-block w-3 h-3 rounded-sm bg-red-500 shadow-xs" title="Sports Red" />
            <span className="inline-block w-3 h-3 rounded-sm bg-slate-800 border border-slate-600 shadow-xs" title="Matte Black" />
          </div>
        </div>
        <div className="text-[11px] font-mono text-slate-300">
          Tilt with cursor · Multi-plane elastic tension
        </div>
      </div>
    </div>
  );
};
