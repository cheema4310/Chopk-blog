"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1], delay: 0.1 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50"
    >
      <div className={cn(
        "glass rounded-full px-6 py-3 flex items-center justify-between",
        "border border-white/[0.08] hover:border-white/15",
        "transition-all duration-500"
      )}>
        {/* Logo */}
        <Link href="/" className="relative group p-1">
          <div className="absolute inset-0 bg-accent/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
          <Image 
            src="https://res.cloudinary.com/dcr0te1k4/image/upload/v1771111380/chopk-logo-kegel-app-upload_opqcda.png"
            alt="ChopK — Men's Pelvic Floor Kegel Training App"
            width={120}
            height={42}
            className="h-[42px] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(238,112,35,0.2)]"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-sub-text/80 hover:text-white transition-all duration-300 tracking-wide group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link href="https://play.google.com/store/apps/details?id=com.chopk.app" target="_blank">
             <Button variant="primary" size="sm" className="hidden sm:flex">
               Start Free Training
             </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
