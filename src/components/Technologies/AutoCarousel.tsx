"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface AutoCarouselProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
}

export default function AutoCarousel({
  items,
  direction = "right",
  speed = 15,
}: AutoCarouselProps) {
  const controls = useAnimation();
  const duplicated = [...items, ...items];

  useEffect(() => {
    const animationSettings =
      direction === "right"
        ? {
            x: ["0%", "-50%"],
          }
        : {
            x: ["-50%", "0%"],
          };

    controls.start({
      ...animationSettings,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: speed,
        ease: "linear",
      },
    });
  }, [controls, direction, speed]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        style={{ width: `${duplicated.length * 20}%` }}
        animate={controls}
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="w-1/5 p-2">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
