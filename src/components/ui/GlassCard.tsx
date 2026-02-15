"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderGlow?: boolean;
  hover?: boolean;
}

export function GlassCard({ children, className, borderGlow = false, hover = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? {
        y: -6,
        scale: 1.015,
        transition: { duration: 0.35, ease: [0.25, 0.8, 0.25, 1] },
      } : undefined}
      className={cn(
        "glass-card relative overflow-hidden",
        borderGlow && "border-glow",
        className
      )}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      <div className="relative z-10">{children}</div>
      {/* Shimmer overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-12 animate-shimmer" />
      </div>
    </motion.div>
  );
}
