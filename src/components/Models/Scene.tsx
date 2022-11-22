import { Suspense } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function CustomScene() {
  const gltf = useLoader(
    GLTFLoader,
    "/scene.gltf",
    () => {},
    (item) => {
      console.log(item);
    }
  );

  return <primitive object={gltf.scene} />;
}

export default CustomScene;
