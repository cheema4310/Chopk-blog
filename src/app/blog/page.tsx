import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/blog";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Blog - ChopK",
  description: "Insights on men's pelvic floor health, performance, and control.",
};

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">The Training Log</h1>
        <p className="text-sub-text/70 max-w-xl text-lg">
          No fluff. Just practical guides on reclaiming control and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group h-full">
            <GlassCard className="h-full flex flex-col p-0 overflow-hidden hover:border-accent/30 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-secondary to-primary-dark relative">
                 <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex items-center gap-4 text-xs text-sub-text/50 font-medium uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(post.publishedAt), "MMM d, yyyy")}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author.name}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-sub-text/70 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-accent text-sm font-medium mt-auto pt-4 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
