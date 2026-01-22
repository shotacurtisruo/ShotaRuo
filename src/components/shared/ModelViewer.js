/* ============================================
   MODEL VIEWER COMPONENT
   ============================================
   Displays 3D GLB models with interactive controls
   Based on ReactBits model-viewer component
   ============================================ */

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import './ModelViewer.css';

function Model({ url, scale = 1 }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={scale} />;
}

export const ModelViewer = ({ 
  modelPath, 
  className = '',
  autoRotate = true,
  enableZoom = true,
  enablePan = false,
  cameraPosition = [0, 0, 5],
  modelScale = 0.5
}) => {
  return (
    <div className={`model-viewer-container ${className}`}>
      <Canvas
        className="model-viewer-canvas"
        camera={{ position: cameraPosition, fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Model url={modelPath} scale={modelScale} />
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            enableZoom={enableZoom}
            enablePan={enablePan}
            minDistance={3}
            maxDistance={10}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};
