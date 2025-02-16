import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Character } from "./Character";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1.2} />
      <Environment preset="city" />
      
      <Character position={[0, -1, 0]} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
