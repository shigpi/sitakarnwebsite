/**
 * Testimonials API
 */

import type { APIResponse, Testimonial } from '@/types';
import { testimonialsData } from '@/data/testimonials';

export const TestimonialsAPI = {
  async getAll(): Promise<APIResponse<Testimonial[]>> {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return {
      data: testimonialsData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getFeatured(): Promise<APIResponse<Testimonial[]>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      data: testimonialsData.filter((t) => t.featured),
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
