/**
 * TeamCard Component
 * Displays a team member with photo, name, title, bio, and LinkedIn.
 */

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { staggerItem } from '@/theme/animations';
import { getInitials } from '@/utils/format';
import type { TeamMember } from '@/types';

const SvgLinkedin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

interface TeamCardProps {
  member: TeamMember;
  variant?: 'leadership' | 'consultant';
  /** Used by leadership variant to alternate layout direction & colour */
  index?: number;
  className?: string;
}

export function TeamCard({ member, variant = 'consultant', index = 0, className }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);

  /* ── Leadership: full-bleed cinematic row ───────────────────────────── */
  if (variant === 'leadership') {
    const isEven = index % 2 === 0;
    // Even rows: navy bg, image right. Odd rows: brick bg, image left.
    const bgClass   = isEven ? 'bg-navy-700'  : 'bg-brick-600';
    const textColor = 'text-white';
    const subColor  = isEven ? 'text-white/60' : 'text-white/60';
    const accentColor = isEven ? 'text-[#C9A84C]' : 'text-white/80';
    const badgeBg   = isEven ? 'bg-white/10 text-white/80' : 'bg-white/15 text-white/80';
    const tagBg     = isEven ? 'bg-white/10 text-white/70 border border-white/15' : 'bg-white/15 text-white/70 border border-white/20';
    const iconHover = isEven ? 'hover:bg-white/15 hover:text-white' : 'hover:bg-white/20 hover:text-white';

    return (
      <motion.article
        variants={staggerItem}
        className={cn(bgClass, 'relative overflow-hidden', className)}
      >
        <div className={cn(
          'flex min-h-[420px] md:min-h-[480px]',
          isEven ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse',
        )}>

          {/* Photo — bleeds to edge */}
          <div className="relative w-full md:w-[45%] shrink-0 min-h-[320px] md:min-h-0 overflow-hidden">
            {!imgError ? (
              <img
                src={member.imageUrl}
                alt={`Portrait of ${member.name}`}
                className="absolute inset-0 w-full h-full object-cover object-top"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-white/10">
                <span className="font-display text-5xl font-bold text-white/40">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
            {/* Gradient bleed toward content side */}
            <div className={cn(
              'absolute inset-0',
              isEven
                ? 'bg-gradient-to-r from-transparent via-transparent to-navy-700/60 md:to-navy-700/80'
                : 'bg-gradient-to-l from-transparent via-transparent to-brick-600/60 md:to-brick-600/80',
            )} />
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center gap-5 px-8 py-12 md:px-14 md:py-16 flex-1">
            {/* Decorative large initial */}
            <span className="absolute top-6 right-8 font-display text-[8rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none">
              {member.name.charAt(0)}
            </span>

            {/* Eyebrow */}
            <p className={cn('text-xs font-mono uppercase tracking-widest', subColor)}>
              {member.department}
            </p>

            {/* Name + title */}
            <div>
              <h2 className={cn('font-display font-bold text-3xl md:text-4xl leading-tight', textColor)}>
                {member.name}
              </h2>
              <p className={cn('text-lg font-medium mt-1', accentColor)}>{member.title}</p>
            </div>

            {/* Bio */}
            {member.bio && (
              <p className={cn('text-sm md:text-base leading-relaxed max-w-prose', subColor)}>
                {member.bio}
              </p>
            )}

            {/* Qualifications */}
            <div className="flex flex-wrap gap-2">
              {member.qualifications.slice(0, 3).map((q) => (
                <span key={q} className={cn('text-xs px-3 py-1 rounded-full font-mono', tagBg)}>
                  {q.split('(')[1]?.replace(')', '') || q.split(' ')[0]}
                </span>
              ))}
            </div>

            {/* Years badge + links */}
            <div className="flex items-center gap-4 mt-1">
              <span className={cn('text-xs font-mono px-3 py-1.5 rounded-full', badgeBg)}>
                {member.yearsOfExperience} yrs experience
              </span>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className={cn('w-9 h-9 flex items-center justify-center rounded-full text-white/50 transition-colors', iconHover)}
                >
                  <SvgLinkedin size={17} />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className={cn('w-9 h-9 flex items-center justify-center rounded-full text-white/50 transition-colors', iconHover)}
                >
                  <Mail size={17} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  /* ── Consultant: original compact card ──────────────────────────────── */
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group flex flex-col bg-white border border-slate-200 rounded overflow-hidden',
        'hover:shadow-lg hover:border-slate-300',
        'transition-all duration-300 ease-out',
        className
      )}
    >
      {/* Photo */}
      <div className="relative overflow-hidden bg-brick-50 aspect-square">
        {!imgError ? (
          <img
            src={member.imageUrl}
            alt={`Portrait of ${member.name}`}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brick-100">
            <span className="font-display text-3xl font-bold text-brick-400">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* Years badge */}
        <div className="absolute top-3 right-3 bg-navy-700/90 text-white text-xs font-mono px-2 py-1 rounded">
          {member.yearsOfExperience}yr exp.
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display font-semibold text-navy-700 text-base leading-snug">
            {member.name}
          </h3>
          <p className="text-gold-600 text-sm font-medium mt-0.5">{member.title}</p>
          <p className="text-slate-400 text-xs mt-0.5 font-mono">{member.department}</p>
        </div>

        {/* Qualifications */}
        <div className="flex flex-wrap gap-1.5">
          {member.qualifications.slice(0, 2).map((q) => (
            <span key={q} className="text-xs bg-navy-50 text-navy-600 px-2 py-0.5 rounded font-mono">
              {q.split('(')[1]?.replace(')', '') || q.split(' ')[0]}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 pt-1 mt-auto">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="w-8 h-8 flex items-center justify-center rounded text-slate-400 hover:text-navy-700 hover:bg-navy-50 transition-colors"
            >
              <SvgLinkedin size={16} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="w-8 h-8 flex items-center justify-center rounded text-slate-400 hover:text-brick-600 hover:bg-brick-50 transition-colors"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
