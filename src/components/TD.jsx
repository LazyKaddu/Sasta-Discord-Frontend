import React, { useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ url, scale, rotate, color }) => {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.Color = new THREE.Color(color);
      }
    });
  }, [scene, color]);

  return (
    <primitive object={scene} scale={[scale, scale, scale]} rotation={rotate} />
  );
};

const TD = ({ url, scale, rotate, movable, color }) => {
  return (
    <Canvas
      style={{ width: "100%", height: "70vh", margin: "auto", cursor: "grab" }}
    >
      <ambientLight intensity={10} />
      <directionalLight position={[Math.PI, Math.PI/2, Math.PI]} />
      <Model url={url} scale={scale} rotate={rotate} color={color} />
      {movable && <OrbitControls />}
    </Canvas>
  );
};

export default TD;
