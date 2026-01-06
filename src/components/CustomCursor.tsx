import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
       const target = e.target as HTMLElement;
       if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
           setIsHovering(true);
       } else {
           setIsHovering(false);
       }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
      scale: 1,
    },
    hover: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        opacity: 0.8,
        scale: 1.5,
        backgroundColor: "rgba(100, 255, 218, 0.2)",
        borderColor: "rgba(100, 255, 218, 0.8)",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border-2 border-astra-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
      }}
      style={{
          boxShadow: "0 0 10px rgba(100, 255, 218, 0.5)"
      }}
    />
  );
};

export default CustomCursor;
