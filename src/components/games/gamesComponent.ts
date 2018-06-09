import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from "../../services/authentication";
import {GameTeam, GameTeamDTO} from "./game";
import {GameService} from "../../services/gameService";

@Component({
  templateUrl: 'games.html',
  styleUrls: ['./games.css']
})

export class GamesComponent implements OnInit {
  model: any = {};
  gamesToAccept: Array<GameTeam> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadStandings();
  }

  loadStandings() {
    this.gameService.getUnapprovedGames().subscribe(res => {
      this.gamesToAccept = <Array<GameTeam>>res;
    });
  }

  acceptGame(id: number, accept: boolean) {
    const gameAccept: GameTeamDTO = <GameTeamDTO>{
      accepted: accept
    };

    this.gameService.acceptGame(gameAccept, id).subscribe(res => {
      this.loadStandings();
      const acceptedGameIndex = this.gamesToAccept.findIndex(p => p.gameTeamId === id);
      this.gamesToAccept.splice(acceptedGameIndex, 1);
    });
  }
}
