import { Box, Center, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Environment, OrbitControls } from "@react-three/drei";
import Link from "next/link";
import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import RotatingText from "../atoms/RotatingText";
import CustomScene from "../Models/Scene";

interface IProps {
  children: React.ReactNode;
}

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "Infos", url: "/infos" },
  { name: "Contact", url: "/contact" },
];

export default function Layout({ children }: IProps) {
  const { colorMode } = useColorMode();

  return (
    <Center
      position="relative"
      p={10}
      bg="#0C0C0C"
      w="100vw"
      maxH="100vh"
      overflowY="hidden"
      h="100vh"
    >
      <Flex
        zIndex={100}
        justifyContent="space-between"
        p={10}
        border="1px solid #8D8D8D"
        w="full"
        h="full"
      >
        <Box
          top={0}
          left={0}
          zIndex={0}
          pointerEvents="none"
          opacity={0.2}
          // filter="invert(1)"
          w="100vw"
          h="100vh"
          position="absolute"
        >
          <Canvas
            style={{ pointerEvents: "none" }}
            dpr={[1, 2]}
            camera={{ position: [2, 7, 2], fov: 60 }}
          >
            <Suspense fallback={null}>
              <CustomScene />
              <Environment preset="studio" />
              <OrbitControls autoRotate />
            </Suspense>
          </Canvas>
        </Box>

        <Flex direction="column">
          <Flex direction="column">
            <Text fontSize={60}>
              JULIEN <br />
              Abbadie
            </Text>
            <Text fontSize={14} fontWeight="light">
              Full Stack Developer
            </Text>
          </Flex>

          <Flex zIndex={200} my={10} direction="column">
            <Box my={5} rounded="full" bg="white" w={2} h={2} />
            {navLinks.map((link) => (
              <Link style={{ cursor: "none" }} href={link.url} key={link.name}>
                <RotatingText text={link.name} />
              </Link>
            ))}
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Center>
  );
}
