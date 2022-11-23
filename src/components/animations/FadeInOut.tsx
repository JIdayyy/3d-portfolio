import { useRef, useContext } from "react";
import { gsap } from "gsap";
import {
  TransitionContext,
  useTransitionContext,
} from "../../context/Transition";
import { Box } from "@chakra-ui/react";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

interface IProps {
  children: React.ReactNode;
}

const FadeInOut = ({ children }: IProps) => {
  const { timeline } = useTransitionContext();
  const el = useRef(null);

  // useIsomorphicLayoutEffect to avoid console warnings
  useIsomorphicLayoutEffect(() => {
    // intro animation will play immediately
    gsap.to(el.current, {
      opacity: 1,
      duration: 1.5,
      x: 0,
    });

    // add outro animation to top-level outro animation timeline
    timeline.add(
      gsap.to(el.current, {
        opacity: 0,
        duration: 1.5,
        x: 1000,
      }),
      0
    );
  }, []);

  // set initial opacity to 0 to avoid FOUC for SSR
  return (
    <Box pointerEvents="none" w="full" h="full" ref={el} sx={{ opacity: 0 }}>
      {children}
    </Box>
  );
};

export default FadeInOut;
