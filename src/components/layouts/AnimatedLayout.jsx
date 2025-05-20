// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      style={{ flex: 1 }}
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
