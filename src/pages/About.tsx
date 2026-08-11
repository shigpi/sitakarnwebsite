/**
 * About Page
 */

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Container } from '@/components/Container/Container';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Divider } from '@/components/Divider/Divider';
import { fadeUp, staggerContainer, staggerItem } from '@/theme/animations';
import { images } from '@/assets/images';
import { partnersData } from '@/data/partners';
import { company } from '@/config/company';
import { aboutHero, aboutStory, aboutCertifications, coreValues } from '@/data/about';

export function About() {
  useSEO({
    title: 'About Us',
    description: 'Learn about our history, mission, and the values that drive our financial consulting practice.',
  });

  return (
    <>
      {/* ─── HEADER ───────────────────────────────────────────────────────────── */}
      <SectionWrapper padding="xl" background="navy" className="pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Divider theme="dark" />
                <span className="eyebrow text-white/70">{aboutHero.eyebrow}</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
                {aboutHero.headlinePrefix} {company.established}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-white/60 leading-relaxed">
                {aboutHero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── STORY & VALUES ───────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <SectionTitle title={aboutStory.title} showRule={false} />
              {aboutStory.paragraphs.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-slate-600 leading-relaxed">
                  {para}
                </motion.p>
              ))}
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((value) => (
                  <motion.div key={value.title} variants={fadeUp} className="flex gap-3">
                    <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy-700 mb-1">{value.title}</h4>
                      <p className="text-sm text-slate-500">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded overflow-hidden shadow-xl">
                <img src={images.about.office} alt="Our office" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 aspect-square rounded overflow-hidden shadow-lg border-4 border-white hidden md:block">
                <img src={images.about.meeting} alt="Team meeting" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── CERTIFICATIONS ───────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="offwhite">
        <Container>
          <SectionTitle
            eyebrow={aboutCertifications.eyebrow}
            title={aboutCertifications.title}
            description={aboutCertifications.description}
            align="center"
            className="mx-auto mb-16"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {partnersData.map((partner) => (
              <motion.div key={partner.id} variants={staggerItem} className="flex flex-col items-center gap-2 max-w-[150px] text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm p-4">
                  {/* Placeholder for real logos */}
                  <span className="font-mono text-xs font-bold text-slate-400">{partner.name.split(' ')[0]}</span>
                </div>
                <span className="text-xs font-medium text-slate-500">{partner.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>
    </>
  );
}
