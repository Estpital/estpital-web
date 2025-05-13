import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const HumanModel = () => {
  const { scene } = useGLTF('/models/scene.gltf');
  const modelRef = useRef();

  // Modeli yavaşça döndürmek için animasyon
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Y ekseninde yavaşça döndür
    }
  });

  return (
    <Canvas style={{ height: '400px', width: '100%' }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <primitive
          ref={modelRef}
          object={scene}
          scale={[0.1, 0.1, 0.1]} // Modeli küçülttük
          position={[0, -2, 0]} // Modeli aşağı kaydırdık
        />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
};

export default HumanModel;
