// Global scroll restoration utility
export const scrollRestoration = {
  // Ensure scroll is always responsive
  ensureScrollResponsiveness: () => {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
    document.body.style.touchAction = "pan-y";
    document.body.style.overscrollBehavior = "none";
  },

  // Reset scroll position smoothly
  resetScrollPosition: () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  },

  // Prevent scroll blocking during animations
  preventScrollBlocking: () => {
    // Remove any scroll blocking styles
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    // Ensure touch events work properly
    document.body.style.touchAction = "pan-y";
    document.documentElement.style.touchAction = "pan-y";

    // Prevent overscroll behavior issues
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";
  },

  // Initialize scroll restoration
  init: () => {
    scrollRestoration.ensureScrollResponsiveness();

    // Listen for scroll events to maintain responsiveness
    const handleScroll = () => {
      scrollRestoration.preventScrollBlocking();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },
};

// Auto-initialize on module load
if (typeof window !== "undefined") {
  scrollRestoration.init();
}
