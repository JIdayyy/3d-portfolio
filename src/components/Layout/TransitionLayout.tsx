import { gsap } from "gsap";
import { useState, useContext, useRef } from "react";
import {
  TransitionContext,
  useTransitionContext,
} from "../../context/Transition";
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";

interface IProps {
  children: React.ReactNode;
}

export default function TransitionLayout({ children }: IProps) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { timeline, background } = useTransitionContext();

  const el = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) {
      if (timeline.duration() === 0) {
        // there are no outro animations, so immediately transition
        setDisplayChildren(children);
      } else {
        timeline.play().then(() => {
          // outro complete so reset to an empty paused timeline
          timeline.seek(0).pause().clear();
          setDisplayChildren(children);
        });
      }
    }
  }, [children]);

  useIsomorphicLayoutEffect(() => {
    gsap.to(el.current, {
      background,
      duration: 1,
    });
  }, [background]);

  return <div ref={el}>{displayChildren}</div>;
}
