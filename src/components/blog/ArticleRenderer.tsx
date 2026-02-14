import React from "react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";

interface ArticleRendererProps {
  content: string;
}

export function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <article className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-sub-text/90 prose-p:leading-8 prose-li:text-sub-text/90 prose-strong:text-white prose-strong:font-bold prose-headings:text-white">
      <ReactMarkdown
        components={{
          h1: ({ className, ...props }) => (
            <h1
              className={cn("text-4xl md:text-6xl mb-10 text-white leading-tight tracking-tighter", className)}
              {...props}
            />
          ),
          h2: ({ className, ...props }) => (
            <h2
              className={cn("text-3xl md:text-4xl mt-16 mb-8 text-white border-b border-white/10 pb-6 font-semibold tracking-tight", className)}
              {...props}
            />
          ),
          h3: ({ className, ...props }) => (
            <h3
              className={cn("text-2xl md:text-3xl mt-12 mb-6 text-white font-medium", className)}
              {...props}
            />
          ),
          p: ({ className, ...props }) => (
            <p className={cn("mb-8 text-lg md:text-xl font-light leading-relaxed text-sub-text/90", className)} {...props} />
          ),
          ul: ({ className, ...props }) => (
            <ul className={cn("list-disc pl-8 mb-10 space-y-4 marker:text-accent", className)} {...props} />
          ),
          ol: ({ className, ...props }) => (
            <ol className={cn("list-decimal pl-8 mb-10 space-y-4 marker:text-accent font-light", className)} {...props} />
          ),
          li: ({ className, ...props }) => (
            <li className={cn("pl-2 text-lg md:text-xl leading-relaxed", className)} {...props} />
          ),
          blockquote: ({ className, ...props }) => (
            <blockquote
              className={cn(
                "border-l-4 border-accent pl-8 italic text-xl md:text-2xl text-white/90 my-12 bg-gradient-to-r from-white/5 to-transparent py-6 pr-6 rounded-r-xl",
                className
              )}
              {...props}
            />
          ),
          hr: ({ className, ...props }) => (
            <hr className={cn("border-white/10 my-16", className)} {...props} />
          ),
          strong: ({ className, ...props }) => (
             <strong className={cn("text-white font-bold", className)} {...props} />
          ),
          a: ({ className, ...props }) => (
             <a className={cn("text-accent underline underline-offset-4 hover:text-accent-light transition-colors", className)} {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
