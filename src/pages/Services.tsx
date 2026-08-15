/**
 * Services Page
 */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import { ServicesAPI } from '@/api/services';
import { Container } from '@/components/Container/Container';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ServiceCard } from '@/components/ServiceCard/ServiceCard';
import { Divider } from '@/components/Divider/Divider';
import { fadeUp, staggerContainer } from '@/theme/animations';

export function Services() {
  useSEO({
    title: 'Our Services',
    description: 'Professional real estate brokerage, property due diligence, and financial advisory services for cooperatives, buyers, sellers, and institutions across Nepal.',
  });

  const { data: servicesRes } = useQuery({ queryKey: ['services'], queryFn: ServicesAPI.getAll });

  return (
    <>
      <SectionWrapper padding="xl" background="offwhite" className="pt-32 pb-20 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <Divider />
                <span className="eyebrow">Our Capabilities</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-display font-bold text-4xl md:text-5xl text-navy-700 leading-tight">
                Property & Financial Services
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
                Sitakarn Mortgage Pvt. Ltd. offers two integrated pillars of professional service: structured <strong>Real Estate Brokerage & Realtor Services</strong> for property buyers, sellers, and investors across Nepal; and specialized <strong>Professional Advisory Services</strong> for financial intermediaries and cooperatives. Both delivered with transparency, compliance, and technology-enabled precision.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </SectionWrapper>

      {/* Services List */}
      <div className="bg-white">
        {servicesRes?.data.map((category, index) => (
          <SectionWrapper
            key={category.id}
            id={category.id}
            padding="lg"
            background={index % 2 === 0 ? 'white' : 'offwhite'}
            className="border-b border-slate-100 last:border-b-0 scroll-mt-24"
          >
            <Container>
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Category Info */}
                <div className="lg:w-1/3 flex-shrink-0 lg:sticky lg:top-32 self-start">
                  <SectionTitle
                    title={category.title}
                    description={category.description}
                    showRule={false}
                  />
                </div>
                
                {/* Services Grid */}
                <div className="lg:w-2/3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {category.services.map((service) => (
                      <ServiceCard key={service.id} service={service} variant="default" />
                    ))}
                  </motion.div>
                </div>
              </div>
            </Container>
          </SectionWrapper>
        ))}
      </div>
    </>
  );
}
