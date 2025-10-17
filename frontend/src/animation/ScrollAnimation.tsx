import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right"; 
  delay?: number;
}

const scrollVariants: Variants = {
  hidden: (custom: { direction: string }) => {
    switch (custom.direction) {
      case "up":
        return { opacity: 0, y: 100 };
      case "down":
        return { opacity: 0, y: -100 };
      case "left":
        return { opacity: 0, x: -200 }; // use pixels instead of % for better reliability
      case "right":
        return { opacity: 0, x: 200 };
      default:
        return { opacity: 0, y: 100 };
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className,
  direction = "up",
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scrollVariants}
      custom={{ direction }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
