import React, { useState, createContext, useCallback } from "react";
import gsap from "gsap";

interface IProps {
  children: React.ReactNode;
}

interface ITransitionContext {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  background: gsap.TweenValue;
}

const TransitionContext = createContext<ITransitionContext | null>(null);

const TransitionProvider = ({ children }: IProps) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  return (
    <TransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        background: "#fff",
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  const context = React.useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider"
    );
  }

  return context;
};

export { TransitionContext, TransitionProvider };
