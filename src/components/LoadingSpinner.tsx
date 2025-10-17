import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-slate-600 border-t-sky-400 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="glass-card p-8 rounded-3xl text-center"
      >
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-white font-medium">Loading...</p>
      </motion.div>
    </motion.div>
  );
}

export function CardSkeleton() {
  return (
    <div className="glass-card p-8 rounded-3xl animate-pulse">
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 bg-slate-700 rounded-2xl"></div>
        <div className="w-20 h-6 bg-slate-700 rounded-full"></div>
      </div>
      <div className="w-3/4 h-6 bg-slate-700 rounded-lg mb-3"></div>
      <div className="w-full h-4 bg-slate-700 rounded-lg mb-2"></div>
      <div className="w-2/3 h-4 bg-slate-700 rounded-lg"></div>
    </div>
  );
}
