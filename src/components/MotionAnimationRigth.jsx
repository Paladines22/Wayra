"use client";
import { motion } from "framer-motion";

function MotionAnimationRight({ content }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: +50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {content}
    </motion.div>
  );
}

export default MotionAnimationRight;
