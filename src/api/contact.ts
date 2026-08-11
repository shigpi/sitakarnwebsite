/**
 * Contact API
 * Simulates form submission. Replace with real endpoint when backend is ready.
 */

import type { APIResponse, ContactFormData } from '@/types';

export const ContactAPI = {
  async submit(data: ContactFormData): Promise<APIResponse<{ referenceId: string }>> {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Simulate 5% failure rate for realistic UX testing
    if (Math.random() < 0.05) {
      throw new Error('Network error. Please try again.');
    }

    // Generate a mock reference number
    const referenceId = `SKN-${Date.now().toString(36).toUpperCase()}`;

    console.info('[ContactAPI] Form submitted:', { ...data, referenceId });

    return {
      data: { referenceId },
      success: true,
      message: `Your inquiry has been received. Reference: ${referenceId}`,
      timestamp: new Date().toISOString(),
    };
  },

  async subscribeNewsletter(email: string): Promise<APIResponse<null>> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.info('[ContactAPI] Newsletter subscription:', email);
    return {
      data: null,
      success: true,
      message: 'You have been successfully subscribed to our newsletter.',
      timestamp: new Date().toISOString(),
    };
  },
};
