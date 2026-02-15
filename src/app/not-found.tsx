import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-white/5 select-none">404</h1>
      <div className="absolute">
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-sub-text/70 mb-8 max-w-md">
          This page has moved or doesn&apos;t exist. Head back to explore science-backed pelvic floor training guides for men.
        </p>
        <Link href="/">
          <Button>Back to ChopK Home</Button>
        </Link>
      </div>
    </div>
  );
}
