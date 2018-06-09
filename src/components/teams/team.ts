import {Standing} from "../standings/standing";

export interface Team {
  id?: number;
  city?: string;
  logo?: string;
  manager?: string;
  teamDisplayName: string;
  teamId?: number;
  teamName?: string;
  standings?: Standing;
  gameResults?: GameResult;
}

export interface GameResult {
  homeTeamName?: string;
}
