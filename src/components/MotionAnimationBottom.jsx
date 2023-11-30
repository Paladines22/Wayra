"use client";
import { motion } from "framer-motion";

function MotionAnimationBottom({ content }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.3 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {content}
    </motion.div>
  );
}

export default MotionAnimationBottom;
