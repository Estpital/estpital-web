import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';

const HumanModel = () => {
  const [error, setError] = useState(null);
  const modelRef = useRef();

  let scene;
  try {
    const { scene: loadedScene } = useGLTF('/models/scene.gltf');
    scene = loadedScene;
  } catch (err) {
    setError('3D model yüklenemedi: ' + err.message);
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Modeli yavaşça döndürmek için animasyon
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Y ekseninde yavaşça döndür
    }
  });

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <Canvas style={{ height: '400px', width: '100%' }}>
      <Suspense fallback={<div className="text-center">Model yükleniyor...</div>}>
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
