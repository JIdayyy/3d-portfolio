import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Center } from "@chakra-ui/react";

export default function Scene() {
  return (
    <Center w="full" h="full">
      <Canvas dpr={[1, 2]} camera={{ position: [50, 50, 100], fov: 100 }}>
        <Suspense fallback={null}>
          {/* To add environment effect to the model */}
          <Environment preset="city" />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </Center>
  );
}
