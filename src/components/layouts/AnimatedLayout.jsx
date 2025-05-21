// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      style={{ flex: 1, overflow: "hidden" }}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
};
