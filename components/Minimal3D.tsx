// components/Minimal3D.tsx
import { Canvas } from "@react-three/fiber";

const Minimal3D = () => {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Minimal3D;