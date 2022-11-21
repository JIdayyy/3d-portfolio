import { Center, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <Center
      bg="transparent"
      justifyContent="flex-end"
      alignItems="flex-end"
      w="full"
      h="full"
      position="relative"
    >
      <Box
        top={0}
        zIndex={0}
        pointerEvents="none"
        opacity={0.2}
        left={-500}
        w="full"
        h="full"
        position="absolute"
      ></Box>
    </Center>
  );
}
