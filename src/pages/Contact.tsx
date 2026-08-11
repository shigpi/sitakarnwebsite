/**
 * Contact Page
 */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { FAQAPI } from '@/api/faq';
import { company } from '@/config/company';
import { Container } from '@/components/Container/Container';
import { SectionWrapper } from '@/components/SectionWrapper/SectionWrapper';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { FAQAccordion } from '@/components/FAQAccordion/FAQAccordion';
import { fadeUp, staggerContainer } from '@/theme/animations';

export function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Sitakarn Financial Consulting for a complimentary initial assessment.',
  });

  const { data: faqRes } = useQuery({ queryKey: ['faq'], queryFn: FAQAPI.getAll });

  return (
    <>
      <SectionWrapper padding="lg" background="offwhite" className="pt-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
                <SectionTitle
                  eyebrow="Get in Touch"
                  title="Let's Discuss Your Needs"
                  description="Contact us to schedule a complimentary initial assessment. We'll review your current financial situation and outline how we can support your organization."
                  showRule={false}
                />
              </motion.div>

              <div className="flex flex-col gap-8">
                {/* Contact Methods */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm border border-slate-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700">Phone</h4>
                    <a href={`tel:${company.phone}`} className="block text-slate-600 hover:text-brick-600 transition-colors mt-1">{company.phone}</a>
                    <a href={`tel:${company.phoneAlt}`} className="block text-slate-600 hover:text-brick-600 transition-colors">{company.phoneAlt}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm border border-slate-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700">Email</h4>
                    <a href={`mailto:${company.email}`} className="block text-slate-600 hover:text-brick-600 transition-colors mt-1">{company.email}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm border border-slate-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700">Office</h4>
                    <p className="text-slate-600 mt-1">{company.address.street}<br/>{company.address.city} {company.address.postalCode}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded shadow-sm border border-slate-100 flex items-center justify-center text-gold-600 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-700">Business Hours</h4>
                    {company.officeHours.map((hours) => (
                      <p key={hours.days} className="text-slate-600 mt-1">
                        <span className="font-medium">{hours.days}:</span> {hours.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded shadow-sm border border-slate-200">
                <h3 className="font-display font-semibold text-2xl text-navy-700 mb-6">Send an Inquiry</h3>
                <ContactForm />
              </div>
            </div>

          </div>
        </Container>
      </SectionWrapper>

      {/* Map Placeholder */}
      <div className="h-96 w-full bg-slate-200 relative overflow-hidden">
        <iframe
          src={company.maps.embedUrl}
          title="Office Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80"
        />
        <div className="absolute inset-0 pointer-events-none border-t border-b border-slate-200" />
      </div>

      {/* FAQ */}
      <SectionWrapper id="faq" padding="xl" background="white">
        <Container size="md">
          <SectionTitle
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            align="center"
            className="mx-auto mb-12"
          />
          {faqRes?.data && <FAQAccordion items={faqRes.data} />}
        </Container>
      </SectionWrapper>
    </>
  );
}
