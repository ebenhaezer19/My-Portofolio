import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import * as THREE from 'three';

interface Particle {
  time: number;
  factor: number;
  speed: number;
  x: number;
  y: number;
  z: number;
}

export const useSmokeAnimation = (
  meshRef: RefObject<THREE.Points>,
  particles: Particle[]
) => {
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array;

    particles.forEach((particle, i) => {
      const i3 = i * 3;
      const { factor, speed, x, y } = particle;

      positions[i3] = x + Math.cos((time + factor) * speed) * 2;
      positions[i3 + 1] = y + Math.sin((time + factor) * speed) * 2;
    });

    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });
};