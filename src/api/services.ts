/**
 * Services API
 * Simulates an async backend call for services data.
 */

import type { APIResponse, ServiceCategory, Service } from '@/types';
import { servicesData } from '@/data/services';

export const ServicesAPI = {
  async getAll(): Promise<APIResponse<ServiceCategory[]>> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      data: servicesData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getByCategory(categoryId: string): Promise<APIResponse<ServiceCategory | null>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const category = servicesData.find((c) => c.id === categoryId) ?? null;
    return {
      data: category,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getBySlug(slug: string): Promise<APIResponse<Service | null>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    let found: Service | null = null;
    for (const category of servicesData) {
      const service = category.services.find((s) => s.slug === slug);
      if (service) {
        found = service;
        break;
      }
    }
    return {
      data: found,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getFeatured(limit = 3): Promise<APIResponse<Service[]>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const featured = servicesData.flatMap((c) => c.services).slice(0, limit);
    return {
      data: featured,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
