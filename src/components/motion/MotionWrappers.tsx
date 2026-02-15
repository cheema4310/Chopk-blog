"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

// Fade-in wrapper
export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.8, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for children
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item (child of StaggerContainer)
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// Scale on hover wrapper
export function HoverScale({
  children,
  className = "",
  scale = 1.02,
  lift = 6,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}) {
  return (
    <motion.div
      whileHover={{
        scale,
        y: -lift,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Parallax float element for backgrounds
export function FloatingElement({
  children,
  className = "",
  duration = 6,
  yRange = 15,
  delay = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  yRange?: number;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-yRange, yRange, -yRange],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section wrapper with fade-in
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.8, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
