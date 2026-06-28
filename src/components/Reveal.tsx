"use client";

import { Component, useEffect, type ErrorInfo, type ReactNode } from "react";
import { useAnimate, useInView, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RevealBoundaryState = {
  failed: boolean;
};

class RevealBoundary extends Component<RevealProps, RevealBoundaryState> {
  state: RevealBoundaryState = { failed: false };

  static getDerivedStateFromError(): RevealBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("Reveal animation failed; rendering static content.", error, errorInfo);
    }
  }

  render() {
    const { children, className = "", delay = 0 } = this.props;

    if (this.state.failed) {
      return (
        <div className={className} style={{ opacity: 1, visibility: "visible" }}>
          {children}
        </div>
      );
    }

    return (
      <AnimatedReveal className={className} delay={delay}>
        {children}
      </AnimatedReveal>
    );
  }
}

function AnimatedReveal({ children, className = "", delay = 0 }: RevealProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const isInView = useInView(scope, { once: true, amount: 0.14 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reducedMotion) return;

    try {
      const controls = animate(
        scope.current,
        { y: [18, 0] },
        { duration: 0.7, delay, ease: [0.21, 0.8, 0.35, 1] },
      );

      return () => controls.stop();
    } catch {
      // Animation is optional. The server-rendered content remains visible.
      return;
    }
  }, [animate, delay, isInView, reducedMotion, scope]);

  return (
    <div ref={scope} className={className} style={{ opacity: 1, visibility: "visible" }}>
      {children}
    </div>
  );
}

export function Reveal(props: RevealProps) {
  return <RevealBoundary {...props} />;
}
