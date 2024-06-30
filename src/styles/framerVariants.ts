export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggeredItem = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};
