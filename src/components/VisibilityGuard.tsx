import React, { useEffect, useState } from "react";
import { scrollRestoration } from "../utils/scrollRestoration";

interface VisibilityGuardProps {
  children: React.ReactNode;
  fallbackDelay?: number;
  className?: string;
}

export function VisibilityGuard({
  children,
  fallbackDelay = 300, // Reduced delay for faster responsiveness
  className = "",
}: VisibilityGuardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Force visibility after a short delay to prevent invisible content
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Use scroll restoration utility
      scrollRestoration.preventScrollBlocking();
    }, fallbackDelay);

    return () => clearTimeout(timer);
  }, [fallbackDelay]);

  return (
    <div
      className={`${className} motion-safe`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.1s ease-out",
        minHeight: "200px", // Ensure space is reserved
        pointerEvents: "auto",
        touchAction: "pan-y",
        overscrollBehavior: "none",
      }}
    >
      {children}
    </div>
  );
}
