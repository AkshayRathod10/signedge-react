"use client";

import {
  createElement,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Zero-dependency drop-in replacement for the small slice of `framer-motion`
 * this project actually uses: `motion.<tag>` elements with a
 * `variants` / `initial="hidden"` / `whileInView="visible"` fade-in.
 *
 * It reproduces that behaviour with an IntersectionObserver + CSS transitions,
 * so it costs ~0 main-thread time (no animation runtime, no hydration cost of
 * framer-motion). To migrate a file, change only its import:
 *
 *   - import { motion } from "@/components/Common/motion";
 *   + import { motion } from "@/components/Common/motion";
 *
 * Unsupported framer props are accepted and ignored.
 */

type Variant = { opacity?: number; x?: number; y?: number };
type Variants = { hidden?: Variant; visible?: Variant };

function MotionFactory(tag: string) {
  return function MotionEl({
    variants,
    initial,
    whileInView,
    animate,
    exit,
    transition,
    viewport,
    style,
    children,
    ...rest
  }: {
    variants?: Variants;
    initial?: unknown;
    whileInView?: unknown;
    animate?: unknown;
    exit?: unknown;
    transition?: { duration?: number; delay?: number; ease?: string };
    viewport?: unknown;
    style?: CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }) {
    const ref = useRef<HTMLElement | null>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
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

    const hidden: Variant = variants?.hidden ?? { opacity: 0 };
    const visible: Variant = variants?.visible ?? { opacity: 1, x: 0, y: 0 };
    const cur = shown ? visible : hidden;
    const dur = transition?.duration ?? 0.6;
    const delay = transition?.delay ?? 0;

    const motionStyle: CSSProperties = {
      opacity: cur.opacity ?? 1,
      transform: `translate(${cur.x ?? 0}px, ${cur.y ?? 0}px)`,
      transition: `opacity ${dur}s ease ${delay}s, transform ${dur}s ease ${delay}s`,
      willChange: "opacity, transform",
      ...style,
    };

    return createElement(tag, { ref, style: motionStyle, ...rest }, children);
  };
}

// Cache one component per tag so element identity is stable across renders.
const cache = new Map<string, ReturnType<typeof MotionFactory>>();

export const motion: Record<string, ReturnType<typeof MotionFactory>> =
  new Proxy({} as Record<string, ReturnType<typeof MotionFactory>>, {
    get(_target, tag: string) {
      let comp = cache.get(tag);
      if (!comp) {
        comp = MotionFactory(tag);
        cache.set(tag, comp);
      }
      return comp;
    },
  });
