import { Suspense } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function CustomScene() {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default CustomScene;
