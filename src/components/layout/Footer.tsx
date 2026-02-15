"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 mt-24 border-t border-white/[0.06] bg-gradient-to-t from-black/30 to-transparent"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-sub-text/50">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} ChopK. Science-backed pelvic floor training for men. All rights reserved.</p>
        
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-accent transition-colors duration-300 tracking-wide">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors duration-300 tracking-wide">Terms of Service</Link>
        </div>
      </div>
    </motion.footer>
  );
}
