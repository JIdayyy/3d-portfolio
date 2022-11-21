import React, { useRef, useContext } from "react";
import { gsap } from "gsap";
import {
  TransitionContext,
  useTransitionContext,
} from "../../context/Transition";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { Box, SystemStyleObject } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
  as?: any;
  from?: SystemStyleObject | gsap.TweenValue;
  to?: any;
  durationIn?: number;
  durationOut?: number;
  delay?: number;
  delayOut?: number;
  set?: gsap.TweenVars;
  skipOutro?: boolean;
}

const AnimateInOut = ({
  children,
  as,
  from,
  to,
  durationIn,
  durationOut,
  delay,
  delayOut,
  set,
  skipOutro,
}: IProps) => {
  const { timeline } = useTransitionContext();
  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!el.current) return;

    // intro animation
    if (set) {
      gsap.set(el.current, { ...set });
    }
    gsap.to(el.current, {
      ...to,
      delay: delay || 0,
      duration: durationIn,
    });

    // outro animation
    if (!skipOutro) {
      timeline.add(
        gsap.to(el.current, {
          ...(from as gsap.TweenVars),
          delay: delayOut || 0,
          duration: durationOut,
        }),
        0
      );
    }
  }, []);

  return (
    <Box
      zIndex={0}
      pointerEvents="none"
      as={as}
      sx={from as SystemStyleObject}
      ref={el}
    >
      {children}
    </Box>
  );
};

export default React.memo(AnimateInOut);
