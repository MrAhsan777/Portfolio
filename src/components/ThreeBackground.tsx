
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const AnimatedCube = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color="#FFD700" 
        transparent 
        opacity={0.6}
        emissive="#FFD700"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial 
        color="#FFD700" 
        transparent 
        opacity={0.4}
        emissive="#FFD700"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
      
      {/* Animated Cubes */}
      <AnimatedCube position={[-3, 2, -2]} />
      <AnimatedCube position={[3, -2, -3]} />
      <AnimatedCube position={[-2, -3, -1]} />
      <AnimatedCube position={[4, 1, -4]} />
      
      {/* Animated Spheres */}
      <AnimatedSphere position={[-4, 0, -2]} />
      <AnimatedSphere position={[2, 3, -3]} />
      <AnimatedSphere position={[0, -2, -2]} />
      <AnimatedSphere position={[3, 0, -1]} />
    </Canvas>
  );
};

export default ThreeBackground;
