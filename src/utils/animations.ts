import { type Variants } from "framer-motion";

// Mobile detection utility
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768 || "ontouchstart" in window;
};

// Mobile-optimized viewport configuration - prevent scroll blocking
export const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -20% 0px",
  // Prevent scroll blocking
  rootMargin: "0px 0px -20% 0px",
} as const;

// Immediate viewport config for critical sections - mobile optimized
export const immediateViewportConfig = {
  once: true,
  amount: 0.05,
  margin: "0px 0px -10% 0px",
  // Prevent scroll blocking
  rootMargin: "0px 0px -10% 0px",
} as const;

// Mobile-specific viewport config with reduced margins
export const mobileViewportConfig = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -5% 0px",
  // Prevent scroll blocking
  rootMargin: "0px 0px -5% 0px",
} as const;

// Ultra-simple mobile animations
export const mobileFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Mobile-optimized motion variants with reduced complexity
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
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
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

// Mobile-optimized stagger container variants
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.03,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Mobile-specific stagger (faster)
export const mobileStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.01,
      ease: "easeOut",
    },
  },
};

// Mobile-optimized card animations (reduced box-shadow for performance)
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.01,
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.99,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

// Mobile-optimized button animations (no box-shadow for performance)
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.01,
    transition: {
      duration: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Mobile-optimized page transition variants - prevent scroll blocking
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2, // Reduced duration for faster transitions
      ease: "easeOut",
      delay: 0.01, // Reduced delay
    },
  },
  exit: {
    opacity: 0,
    y: -2, // Reduced movement
    transition: {
      duration: 0.1, // Faster exit
      ease: "easeIn",
    },
  },
};

// Mobile-optimized fallback variants
export const immediateFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Mobile-specific animation variants
export const mobileCardHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.005,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.995,
    transition: {
      duration: 0.1,
    },
  },
};

// Touch-friendly button animations
export const touchButton: Variants = {
  rest: {
    scale: 1,
  },
  tap: {
    scale: 0.96,
    transition: {
      duration: 0.1,
    },
  },
};

// Ultra-simple mobile card animations (no hover effects)
export const mobileCardSimple: Variants = {
  rest: {
    scale: 1,
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Mobile blob animations (reduced complexity)
export const mobileBlobAnimation = {
  y: [0, -5, 0],
  x: [0, 3, 0],
  transition: {
    repeat: Infinity,
    duration: 15,
    ease: [0.4, 0, 0.6, 1] as const,
  },
};

// Desktop blob animations
export const desktopBlobAnimation = {
  y: [0, -10, 0],
  x: [0, 5, 0],
  transition: {
    repeat: Infinity,
    duration: 20,
    ease: [0.4, 0, 0.6, 1] as const,
  },
};
