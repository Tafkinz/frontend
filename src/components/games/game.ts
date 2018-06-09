export interface GameTeam {
  homeTeamId: number,
  awayTeamId: number,
  homeTeamPoints: number,
  awayTeamPoints: number,
  court: string,
  referee: string,
  gameTeamId: number
}

export interface GameTeamDTO {
  accepted: boolean
}
