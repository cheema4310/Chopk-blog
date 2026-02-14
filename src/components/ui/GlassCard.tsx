import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  borderGlow?: boolean;
}

export function GlassCard({ children, className, borderGlow = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden",
        borderGlow && "border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      {/* Optional: Add a subtle gradient orb or noise texture here if desired */}
      <div className="absolute -inset-[100px] opacity-20 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] hover:animate-shine pointer-events-none" />
    </div>
  );
}
