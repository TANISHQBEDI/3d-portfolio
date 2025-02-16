import { useGLTF } from "@react-three/drei";

export function Character(props) {
  const { scene } = useGLTF("/models/character.glb"); // Load 3D model

  return <primitive object={scene} {...props} />;
}
