import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-white/5 bg-black/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-sub-text/60">
        <p>&copy; {new Date().getFullYear()} ChopK. All rights reserved.</p>
        
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
