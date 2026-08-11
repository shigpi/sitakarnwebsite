/**
 * ContactForm Component
 * Fully functional contact form with Zod validation, React Hook Form, and loading states.
 * Simulates submission via ContactAPI.
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Input } from '@/components/Input/Input';
import { TextArea } from '@/components/TextArea/TextArea';
import { Button } from '@/components/Button/Button';
import { ContactAPI } from '@/api/contact';

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name is required (min 2 characters)'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  organization: z.string().min(2, 'Organization name is required'),
  organizationType: z.enum(['cooperative', 'sme', 'ngo', 'government', 'other'] as const, {
    message: 'Please select an organization type',
  }),
  service: z.enum(['financial-consulting', 'accounting', 'audit', 'tax', 'cooperative', 'training', 'general'] as const, {
    message: 'Please select a service area',
  }),
  message: z.string().min(10, 'Please provide a brief message (min 10 characters)'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      organizationType: 'cooperative',
      service: 'general',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus('idle');
    try {
      const response = await ContactAPI.submit(data);
      setReferenceId(response.data.referenceId);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-gold-50 border border-gold-200 rounded p-8 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center">
          <CheckCircle size={32} />
        </div>
        <div>
          <h3 className="font-display font-semibold text-2xl text-navy-700">Thank you for reaching out</h3>
          <p className="text-slate-600 mt-2">
            Your inquiry has been successfully submitted. One of our consultants will contact you within 1 business day.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded text-sm text-slate-500 font-mono border border-slate-200 mt-2">
          Reference: {referenceId}
        </div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setSubmitStatus('idle')}
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
      {/* Error Banner */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">
            We encountered a network error while submitting your form. Please try again or contact us directly by phone.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="firstName"
          label="First Name"
          required
          placeholder="e.g. Somchai"
          error={errors.firstName?.message}
          {...register('firstName')}
        />
        <Input
          id="lastName"
          label="Last Name"
          required
          placeholder="e.g. Raksa"
          error={errors.lastName?.message}
          {...register('lastName')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="email"
          type="email"
          label="Email Address"
          required
          placeholder="email@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="e.g. 02 123 4567"
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="organization"
          label="Organization Name"
          required
          placeholder="e.g. Pathum Thani Cooperative"
          error={errors.organization?.message}
          {...register('organization')}
        />
        
        <div className="flex flex-col gap-1.5">
          <label htmlFor="organizationType" className="text-sm font-medium text-slate-700">
            Organization Type <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          </label>
          <select
            id="organizationType"
            className={cn(
              'w-full px-4 py-2.5 text-sm',
              'border rounded',
              'bg-white text-slate-700',
              'transition-colors duration-150',
              'focus:outline-none focus:ring-2 focus:ring-brick-600 focus:border-brick-600',
              errors.organizationType ? 'border-red-400' : 'border-slate-300 hover:border-slate-400'
            )}
            {...register('organizationType')}
          >
            <option value="cooperative">Cooperative</option>
            <option value="sme">Small/Medium Enterprise (SME)</option>
            <option value="ngo">NGO / Foundation</option>
            <option value="government">Government Agency</option>
            <option value="other">Other</option>
          </select>
          {errors.organizationType && (
            <p className="text-xs text-red-600">{errors.organizationType.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-slate-700">
          Area of Interest <span className="text-red-500 ml-1" aria-hidden="true">*</span>
        </label>
        <select
          id="service"
          className={cn(
            'w-full px-4 py-2.5 text-sm',
            'border rounded',
            'bg-white text-slate-700',
            'transition-colors duration-150',
            'focus:outline-none focus:ring-2 focus:ring-brick-600 focus:border-brick-600',
            errors.service ? 'border-red-400' : 'border-slate-300 hover:border-slate-400'
          )}
          {...register('service')}
        >
          <option value="financial-consulting">Financial Consulting & Planning</option>
          <option value="accounting">Accounting & Bookkeeping Services</option>
          <option value="audit">Audit Preparation & Internal Audit</option>
          <option value="tax">Tax Consulting & Compliance</option>
          <option value="cooperative">Cooperative Formation & Advisory</option>
          <option value="training">Training Programs</option>
          <option value="general">General Inquiry</option>
        </select>
        {errors.service && (
          <p className="text-xs text-red-600">{errors.service.message}</p>
        )}
      </div>

      <TextArea
        id="message"
        label="How can we help you?"
        required
        rows={4}
        placeholder="Please briefly describe your current situation or requirements..."
        error={errors.message?.message}
        {...register('message')}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          fullWidth
          className="sm:w-auto"
        >
          Submit Inquiry
        </Button>
      </div>
      
      <p className="text-xs text-slate-400 mt-2">
        Your information is treated with strict confidentiality in accordance with our privacy policy.
      </p>
    </form>
  );
}
