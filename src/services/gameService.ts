import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GameTeamDTO} from "../components/games/game";

@Injectable()
export class GameService {
  constructor(private http: HttpClient) { }

  getUnapprovedGames() {
    return this.http.get('/api/GameTeams');
  }

  acceptGame(gameTeamDTO: GameTeamDTO, gameTeamId: number) {
    return this.http.put('/api/GameTeams/' + gameTeamId, gameTeamDTO);
  }
}
