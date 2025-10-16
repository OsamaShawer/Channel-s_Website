import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

interface ReliableSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  viewport?: any;
  fallbackDelay?: number;
}

export function ReliableSection({
  children,
  className = "",
  variants,
  viewport,
  fallbackDelay = 1000,
}: ReliableSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback: ensure content is visible after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, fallbackDelay);

    return () => clearTimeout(timer);
  }, [fallbackDelay]);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      animate={isVisible ? "visible" : "hidden"}
      style={{
        // Ensure minimum visibility
        minHeight: "200px",
      }}
    >
      {children}
    </motion.div>
  );
}
