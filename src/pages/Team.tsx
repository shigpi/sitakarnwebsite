/**
 * Team Page
 */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { TeamAPI } from '@/api/team';
import { Container } from '@/components/Container/Container';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { TeamCard } from '@/components/TeamCard/TeamCard';
import { Divider } from '@/components/Divider/Divider';
import { fadeUp, staggerContainer } from '@/theme/animations';

export function Team() {
  useSEO({
    title: 'Our Team',
    description: 'Meet our leadership and team of certified financial consultants, CPAs, and cooperative advisors.',
  });

  const { data: leadershipRes } = useQuery({ queryKey: ['team', 'leadership'], queryFn: () => TeamAPI.getByRole('leadership') });
  const { data: consultantsRes } = useQuery({ queryKey: ['team', 'consultant'], queryFn: () => TeamAPI.getByRole('consultant') });

  return (
    <>
      <SectionWrapper padding="xl" background="navy" className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center gap-6">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Divider theme="dark" />
                <span className="eyebrow text-white/70">Our People</span>
                <Divider theme="dark" />
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                Expertise You Can Trust
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/60 leading-relaxed">
                Our practice is led by Certified Public Accountants (CPAs), former revenue department officers, and registered cooperative advisors.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper padding="lg" background="white">
        <Container>
          <SectionTitle eyebrow="Partners" title="Leadership Team" className="mb-12" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {leadershipRes?.data.map((member) => (
              <TeamCard key={member.id} member={member} variant="leadership" />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* Consultants */}
      <SectionWrapper padding="lg" background="offwhite">
        <Container>
          <SectionTitle eyebrow="Professionals" title="Consultants & Specialists" className="mb-12" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {consultantsRes?.data.map((member) => (
              <TeamCard key={member.id} member={member} variant="consultant" />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>
    </>
  );
}
