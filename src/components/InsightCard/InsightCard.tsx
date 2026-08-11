/**
 * InsightCard Component
 * Blog/Insights preview card.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/theme/animations';
import { formatDateShort, formatReadingTime } from '@/utils/format';
import { Badge } from '@/components/Badge/Badge';
import type { BlogPost } from '@/types';

interface InsightCardProps {
  post: BlogPost;
  className?: string;
}

export function InsightCard({ post, className }: InsightCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group flex flex-col border border-slate-200 bg-white rounded overflow-hidden',
        'hover:shadow-lg hover:border-slate-300',
        'transition-all duration-300 ease-out',
        className
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9] bg-slate-100">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="teal">{post.categoryLabel}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span>{formatDateShort(post.publishedAt)}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock size={10} aria-hidden="true" />
            {formatReadingTime(post.readingTime)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-navy-700 text-base leading-snug group-hover:text-brick-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Author + CTA */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-slate-100">
          <span className="text-xs text-slate-400">{post.author}</span>
          <Link
            to={`/insights/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-brick-600 hover:text-brick-700 transition-colors group/link"
            aria-label={`Read ${post.title}`}
          >
            Read
            <ArrowRight
              size={12}
              className="group-hover/link:translate-x-0.5 transition-transform duration-150"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
