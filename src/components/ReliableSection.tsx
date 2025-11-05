import React from "react";

interface ReliableSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ReliableSection({
  children,
  className = "",
}: ReliableSectionProps) {
  return (
    <div
      className={className}
      style={{
        // Ensure minimum visibility
        minHeight: "200px",
      }}
    >
      {children}
    </div>
  );
}
