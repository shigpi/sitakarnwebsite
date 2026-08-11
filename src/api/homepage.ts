/**
 * Homepage API
 * Simulates an async backend call for homepage data.
 * Replace the implementation with a real fetch() call when the backend is ready.
 */

import type { APIResponse } from '@/types';
import type { HeroContent, ProcessStep, WhoWeHelp, WhyChooseUs } from '@/types';
import { heroData, whoWeHelpData, whyChooseUsData, processStepsData } from '@/data/homepage';
import { statisticsData } from '@/data/statistics';
import type { Statistic } from '@/types';

export const HomepageAPI = {
  async getHero(): Promise<APIResponse<HeroContent>> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return {
      data: heroData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getWhoWeHelp(): Promise<APIResponse<WhoWeHelp[]>> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return {
      data: whoWeHelpData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getWhyChooseUs(): Promise<APIResponse<WhyChooseUs[]>> {
    await new Promise((resolve) => setTimeout(resolve, 250));
    return {
      data: whyChooseUsData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getProcessSteps(): Promise<APIResponse<ProcessStep[]>> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return {
      data: processStepsData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getStatistics(): Promise<APIResponse<Statistic[]>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      data: statisticsData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
