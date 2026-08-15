/**
 * Home Page
 */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { HomepageAPI } from '@/api/homepage';
import { ServicesAPI } from '@/api/services';
import { TestimonialsAPI } from '@/api/testimonials';
import { Container } from '@/components/Container/Container';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Button } from '@/components/Button/Button';
import { FeatureCard } from '@/components/FeatureCard/FeatureCard';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { StatisticCard } from '@/components/StatisticCard/StatisticCard';
import { Timeline } from '@/components/Timeline/Timeline';
import { TestimonialCard } from '@/components/TestimonialCard/TestimonialCard';
import { InsightCard } from '@/components/InsightCard/InsightCard';
import { Divider } from '@/components/Divider/Divider';
import { fadeUp, staggerContainer, staggerItem } from '@/theme/animations';
import { images } from '@/assets/images';
import { blogData } from '@/data/blog';

export function Home() {
  useSEO({
    title: 'Home',
    description: 'Nepal\'s pioneering professional real estate brokerage and financial advisory firm — transparent, technology-enabled, and legally compliant services.',
  });

  const { data: heroRes } = useQuery({ queryKey: ['hero'], queryFn: HomepageAPI.getHero });
  const { data: whoWeHelpRes } = useQuery({ queryKey: ['whoWeHelp'], queryFn: HomepageAPI.getWhoWeHelp });
  const { data: servicesRes } = useQuery({ queryKey: ['servicesFeatured'], queryFn: () => ServicesAPI.getFeatured(3) });
  const { data: whyChooseUsRes } = useQuery({ queryKey: ['whyChooseUs'], queryFn: HomepageAPI.getWhyChooseUs });
  const { data: statsRes } = useQuery({ queryKey: ['statistics'], queryFn: HomepageAPI.getStatistics });
  const { data: processRes } = useQuery({ queryKey: ['process'], queryFn: HomepageAPI.getProcessSteps });
  const { data: testimonialsRes } = useQuery({ queryKey: ['testimonialsFeatured'], queryFn: TestimonialsAPI.getFeatured });

  const hero = heroRes?.data;

  return (
    <>
      {/* ─── HERO SECTION ──────────────────────────────────────────────────────── */}
      <SectionWrapper padding="xl" background="offwhite" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-brick-50 via-white to-[#F0EEF5] opacity-70" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-700/8 to-transparent" />
        </div>
        <Container size="2xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              {hero && (
                <>
                  <motion.div variants={fadeUp} className="flex items-center gap-3">
                    <Divider />
                    <span className="eyebrow">{hero.eyebrow}</span>
                  </motion.div>
                  <motion.h1 variants={fadeUp} className="font-display font-bold text-navy-700 leading-tight">
                    {hero.headline}
                  </motion.h1>
                  <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-xl">
                    {hero.subheadline}
                  </motion.p>
                  <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                    <Button as="a" href={hero.primaryCTA.href} size="lg">
                      {hero.primaryCTA.label}
                    </Button>
                    <Button as="a" href={hero.secondaryCTA.href} variant="outline" size="lg">
                      {hero.secondaryCTA.label}
                    </Button>
                  </motion.div>
                </>
              )}
            </motion.div>

            {/* Graphic/Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brick-900/20 via-transparent to-navy-900/20 mix-blend-multiply z-10" />
              <img
                src={images.hero.main}
                alt="Financial consulting professionals in a meeting"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
              {/* Gold accent bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 z-20" />
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── WHO WE HELP ──────────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="white">
        <Container>
          <SectionTitle
            eyebrow="Target Audience"
            title="Who We Serve"
            description="From property buyers and sellers to cooperatives, banks, and SMEs — Sitakarn delivers tailored real estate brokerage and financial advisory solutions across Nepal."
            align="center"
            className="mx-auto mb-16"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {whoWeHelpRes?.data.map((item) => (
              <FeatureCard
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── FEATURED SERVICES ────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="offwhite">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Our Expertise"
              title="Comprehensive Property & Financial Services"
              description="From verified property listings and buyer matching to financial advisory for cooperatives — Sitakarn covers the complete lifecycle."
            />
            <Button as="a" href="/services" variant="outline" rightIcon={<ArrowRight size={16} />} className="flex-shrink-0">
              View All Services
            </Button>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {servicesRes?.data.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── WHY CHOOSE US & STATS ────────────────────────────────────────────── */}
      <SectionWrapper padding="xl" background="navy">
        {/* Brick accent stripe at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brick-500 via-brick-400 to-brick-500" aria-hidden="true" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Why Choose Us */}
            <div>
              <SectionTitle
                theme="dark"
                eyebrow="Why Sitakarn"
                title="Nepal's Professional Property & Financial Partner"
                description="Established in 2003, Sitakarn combines pioneering real estate brokerage with expert financial advisory — built on transparency, compliance, and technology-enabled service delivery."
                className="mb-12"
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="flex flex-col gap-8"
              >
                {whyChooseUsRes?.data.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1 w-10 h-10 rounded bg-white/10 text-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brick-300" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white mb-2">{item.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Stats Grid */}
            <div className="lg:mt-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded overflow-hidden"
              >
                {statsRes?.data.map((stat) => (
                  <div key={stat.id} className="bg-navy-800">
                    <StatisticCard stat={stat} theme="dark" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── PROCESS ──────────────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <SectionTitle
                eyebrow="How We Work"
                title="Our Structured Process"
                description="From initial assessment and property verification to title transfer and compliance — our 20-step transaction and advisory methodology delivers measurable, legally compliant results."
              />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              {processRes?.data && <Timeline steps={processRes.data} />}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="offwhite">
        <Container>
          <SectionTitle
            eyebrow="Client Success"
            title="Trusted by Leaders"
            align="center"
            className="mx-auto mb-16"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonialsRes?.data.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── INSIGHTS (Placeholder) ───────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <SectionTitle
              eyebrow="Resources & Insights"
              title="Latest Perspectives"
              description="Stay informed with our analysis of regulatory changes, tax updates, and cooperative finance best practices."
            />
            <Button variant="outline" rightIcon={<ArrowRight size={16} />} className="flex-shrink-0" disabled>
              View All Articles
            </Button>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {blogData.slice(0, 3).map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </motion.div>
        </Container>
      </SectionWrapper>

      {/* ─── CTA ──────────────────────────────────────────────────────────────── */}
      <SectionWrapper padding="lg" background="navy" className="relative overflow-hidden">
        {/* Deep brick-to-navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brick-700 via-brick-600 to-navy-700 opacity-95" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_rgba(212,117,117,0.3)_0%,_transparent_60%)]" aria-hidden="true" />
        <Container className="relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to buy, sell, or strengthen your financial foundation?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Contact us for a complimentary initial consultation. Whether you are buying or selling property, or strengthening a financial institution, we are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="a" href="/contact" size="lg" className="bg-white text-brick-700 hover:bg-brick-50 border border-white/30">
              Book a Consultation
            </Button>
            <Button as="a" href="/services" className="bg-white/15 text-white hover:bg-white/25 border border-white/30 backdrop-blur-sm" size="lg">
              Explore Services
            </Button>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
