import { Text, TextProps } from "@chakra-ui/react";
import {
  CustomDomComponent,
  motion,
  useAnimationControls,
} from "framer-motion";
import FadeInOut from "../animations/FadeInOut";

const MotionText = motion(Text);

interface Props {
  text: string;
}

export default function RotatingText({ text }: Props) {
  const controls = useAnimationControls();

  return (
    <MotionText
      animate={controls}
      fontSize={18}
      onHoverStart={() => controls.start({ rotateX: 360, scale: 1.1 })}
      onHoverEnd={() => controls.start({ rotateX: -360, scale: 1 })}
      my={2}
      py={2}
    >
      {text}
    </MotionText>
  );
}
