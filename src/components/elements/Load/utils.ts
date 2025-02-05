export const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const dotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

export const dotTransition = {
  duration: 0.6,
  repeat: Infinity,
  ease: "easeInOut",
};
