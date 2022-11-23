import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <PerspectiveCamera
      name="Camera"
      makeDefault={true}
      far={100000}
      near={5}
      fov={45}
      up={[0, 1, 0]}
      position={[82.45, 102.98, -100.37]}
      rotation={[-2.36, 0.48, 2.71]}
      scale={1}
    />
  );
}
