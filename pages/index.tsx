import { Center, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import FadeInOut from "../src/components/animations/FadeInOut";
import CustomScene from "../src/components/Models/Scene";

export default function Home() {
  return (
    <FadeInOut>
      <Center
        bg="transparent"
        justifyContent="flex-end"
        alignItems="flex-end"
        w="full"
        h="full"
      >
        <Text w="300px">
          Born in 1991 in Biarritz, France. <br />I believe web development can
          be more diverse and inspiring. I am building web applications and
          websites with passion and I am allways trying to express myself with
          my code.
        </Text>
      </Center>
    </FadeInOut>
  );
}
