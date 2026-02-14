import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent hover:bg-accent-dark text-white shadow-[0_0_20px_rgba(238,112,35,0.3)] hover:shadow-[0_0_30px_rgba(238,112,35,0.5)] border border-white/10",
    secondary: "bg-secondary hover:bg-secondary-light text-text border border-white/5",
    glass: "glass hover:bg-white/10 text-white hover:border-white/30",
    ghost: "bg-transparent hover:bg-white/5 text-text hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
