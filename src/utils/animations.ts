import { type Variants } from "framer-motion";

// Standard viewport configuration for reliable triggering
export const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -20% 0px",
} as const;

// Immediate viewport config for critical sections
export const immediateViewportConfig = {
  once: true,
  amount: 0.05,
  margin: "0px 0px -10% 0px",
} as const;

// Professional motion variants with enhanced easing
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Enhanced stagger container variants
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Professional card hover animations
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

// Professional button animations
export const buttonHover: Variants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Page transition variants - faster and more reliable
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

// Fallback variants for immediate rendering
export const immediateFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
