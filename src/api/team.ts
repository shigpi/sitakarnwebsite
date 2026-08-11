/**
 * Team API
 */

import type { APIResponse, TeamMember, TeamRole } from '@/types';
import { teamData } from '@/data/team';

export const TeamAPI = {
  async getAll(): Promise<APIResponse<TeamMember[]>> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      data: teamData,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getByRole(role: TeamRole): Promise<APIResponse<TeamMember[]>> {
    await new Promise((resolve) => setTimeout(resolve, 350));
    return {
      data: teamData.filter((m) => m.role === role),
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getById(id: string): Promise<APIResponse<TeamMember | null>> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const member = teamData.find((m) => m.id === id) ?? null;
    return {
      data: member,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
