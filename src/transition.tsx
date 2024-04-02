import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const transition = (Component: React.ComponentType) => {
  return (props: any) => (
    <AnimatePresence mode="wait">
      <motion.div
        key="slide-in"
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component {...props} />
      </motion.div>
      <motion.div
        key="slide-out"
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </AnimatePresence>
  );
};

export default transition;
