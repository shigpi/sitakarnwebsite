/**
 * Team API
 * Data is loaded at runtime from /data/team.txt via fetchAndParseTeam().
 */

import type { APIResponse, TeamMember, TeamRole } from '@/types';
import { fetchAndParseTeam } from '@/utils/parseTeamTxt';

export const TeamAPI = {
  async getAll(): Promise<APIResponse<TeamMember[]>> {
    const data = await fetchAndParseTeam();
    return {
      data,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getByRole(role: TeamRole): Promise<APIResponse<TeamMember[]>> {
    const data = await fetchAndParseTeam();
    return {
      data: data.filter((m) => m.role === role),
      success: true,
      timestamp: new Date().toISOString(),
    };
  },

  async getById(id: string): Promise<APIResponse<TeamMember | null>> {
    const data = await fetchAndParseTeam();
    const member = data.find((m) => m.id === id) ?? null;
    return {
      data: member,
      success: true,
      timestamp: new Date().toISOString(),
    };
  },
};
