"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  as?: ElementType;
  /** seconds */
  delay?: number;
  /** seconds, default 0.6 */
  duration?: number;
  /** px vertical offset the element rises from, default 24 */
  y?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  [key: string]: any;
};

/**
 * Lightweight scroll-reveal. Drop-in replacement for framer-motion's
 * `whileInView` fade-up pattern using IntersectionObserver + CSS transitions —
 * no runtime animation library, so it costs ~0 main-thread time.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  duration = 0.6,
  y = 24,
  className,
  style,
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Respect reduced-motion: show immediately, no transition.
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
