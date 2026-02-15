import { ArticleRenderer } from "@/components/blog/ArticleRenderer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/blog";
import { format } from "date-fns";
import { ArrowLeft, Calendar, User, Share2, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found - ChopK",
    };
  }

  return {
    title: `${post.title} | ChopK Pelvic Floor Training Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "ChopK",
      url: "https://chopk.com",
    },
    description: post.excerpt,
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl relative">
       {/* Ambient Glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/blog" className="inline-flex items-center text-sub-text/60 hover:text-white mb-12 transition-colors group text-sm font-medium tracking-wide uppercase">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Pelvic Floor Training Log
      </Link>

      <GlassCard className="p-8 md:p-16 relative overflow-visible" borderGlow>
        {/* Header */}
        <header className="mb-16 border-b border-white/5 pb-10">
            <div className="flex flex-wrap items-center gap-6 text-sm text-sub-text/50 mb-8 uppercase tracking-widest font-semibold">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </div>
                <div className="w-1 h-1 rounded-full bg-accent/50" />
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author.name}
                </div>
                 <div className="w-1 h-1 rounded-full bg-accent/50" />
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    5 min read
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                {post.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-sub-text/80 leading-relaxed font-light max-w-3xl border-l-2 border-accent/50 pl-6 py-2">
                {post.excerpt}
            </p>
        </header>

        {/* Content */}
        <div className="mb-16">
            <ArticleRenderer content={post.content} />
        </div>

        {/* Footer/CTA */}
        <div className="mt-16 pt-16 border-t border-white/5 bg-gradient-to-b from-transparent to-white/5 -mx-8 -mb-16 px-8 pb-16 rounded-b-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Science-Backed Pelvic Floor Training?</h3>
                    <p className="text-sub-text/70 text-lg">The ChopK app guides you through Locate, Engage, Train — step by step.</p>
                </div>
                 <Link href="https://play.google.com/store/apps/details?id=com.chopk.app" target="_blank">
                  <Button size="lg" className="neon-glow px-10 py-4 text-lg">
                    Start Your Pelvic Floor Journey
                  </Button>
                </Link>
            </div>
        </div>
      </GlassCard>
    </div>
  );
}
