import React, { useEffect, useState } from "react";

interface VisibilityGuardProps {
  children: React.ReactNode;
  fallbackDelay?: number;
  className?: string;
}

export function VisibilityGuard({
  children,
  fallbackDelay = 500,
  className = "",
}: VisibilityGuardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Force visibility after a short delay to prevent invisible content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, fallbackDelay);

    return () => clearTimeout(timer);
  }, [fallbackDelay]);

  return (
    <div
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease-out",
        minHeight: "200px", // Ensure space is reserved
      }}
    >
      {children}
    </div>
  );
}
