import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const HumanModel = () => {
  const { scene } = useGLTF('/models/scene.gltf');
  return (
    <Canvas style={{ height: '400px', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, -2, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default HumanModel;
