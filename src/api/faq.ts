/**
 * FAQ API
 */

import type { APIResponse, FAQItem } from '@/types';
import { faqData } from '@/data/faq';

export const FAQAPI = {
  async getAll(): Promise<APIResponse<FAQItem[]>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      data: faqData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getByCategory(category: string): Promise<APIResponse<FAQItem[]>> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return {
      data: faqData.filter((f) => f.category === category),
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
