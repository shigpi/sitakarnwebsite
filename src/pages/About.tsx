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

      {/* ─── REAL ESTATE BROKERAGE HIGHLIGHT ──────────────────────────────────── */}
      <SectionWrapper padding="lg" background="navy" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-brick-800 opacity-95" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Divider theme="dark" />
                <span className="eyebrow text-white/70">Real Estate Brokerage</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl md:text-4xl text-white leading-tight">
                Nepal's Professional Property Transaction Partner
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/70 leading-relaxed">
                Sitakarn Mortgage Pvt. Ltd. operates as a professional real estate intermediary connecting property owners with genuine buyers through transparent, ethically managed brokerage services. Our structured 20-step transaction process covers everything from seller registration and KYC to government title transfer and commission settlement.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/70 leading-relaxed">
                Every listed property receives a unique <strong className="text-white">Sitakarn Property Identification Number (SPIN)</strong> and is classified under our due diligence framework — <em>Category A (Verified)</em>, <em>Category B (Verification Pending)</em>, or <em>Category C (Restricted/Rejected)</em> — ensuring buyers are always protected by our "No Clear Title – No Transaction Recommendation" principle.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Verified Property Listings', icon: '🏠', desc: 'Every property reviewed before being promoted to buyers' },
                { label: 'AI Buyer–Property Matching', icon: '🔗', desc: 'Smart matching engine connects requirements to available properties' },
                { label: 'AML/CFT Compliant', icon: '🛡️', desc: 'Formal KYC, source-of-funds review, and Banking Channel First policy' },
                { label: '20-Step Transaction Process', icon: '📋', desc: 'From seller registration to title transfer — fully documented' },
                { label: 'SPIN Property Database', icon: '🗄️', desc: 'Centralized, technology-enabled verified property database' },
                { label: 'Professional Partner Network', icon: '🤝', desc: 'Lawyers, valuers, surveyors, banks, and government liaisons' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">{item.label}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
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
