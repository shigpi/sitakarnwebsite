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
  className?: string;
}

export function TeamCard({ member, variant = 'consultant', className }: TeamCardProps) {
  const [imgError, setImgError] = useState(false);

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
      <div
        className={cn(
          'relative overflow-hidden bg-brick-50',
          variant === 'leadership' ? 'aspect-[4/3]' : 'aspect-square'
        )}
      >
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

        {variant === 'leadership' && (
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        )}

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
