import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ImageScene from "../../scenes/ImageScene";

type Project = {
  date: string;
  title: string;
  picture: string;
};

type Props = {
  project: Project;
};

const MotionFlex = motion(Flex);

export default function ProjectCard({ project }: Props) {
  const [isHover, setIsHover] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const PortalImage = ({ picture }: { picture: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {}, []);

    return createPortal(
      <ImageScene x={mousePosition.x} y={mousePosition.y} picture={picture} />,
      document.body
    );
  };

  return (
    <MotionFlex
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      whileHover={{ scale: 1.05, opacity: 0.5 }}
      textAlign="right"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      {isHover && <PortalImage picture={project.picture} />}
      <Text
        whiteSpace="nowrap"
        textAlign="right"
        w="full"
        fontSize={43}
        fontWeight="bold"
      >
        {project.date}
      </Text>
      <Text fontSize={50}>-</Text>
      <Text
        whiteSpace="nowrap"
        textAlign="right"
        w="full"
        fontWeight="bold"
        fontSize={34}
      >
        {project.title}
      </Text>
    </MotionFlex>
  );
}
