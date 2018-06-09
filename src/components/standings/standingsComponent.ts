import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from "../../services/authentication";
import {StandingsService} from "../../services/standingsService";
import {Standing} from "./standing";
import { Ng2OrderModule } from 'ng2-order-pipe';

@Component({
  templateUrl: 'standings.html',
  styleUrls: ['./standings.css']
})

export class StandingsComponent implements OnInit {
  model: any = {};
  standings: Array<Standing>;
  team: Standing;
  pts:string = 'points';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private standingsService: StandingsService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.standingsService.getAllStandings().subscribe(res => {
      this.standings = <Array<Standing>>res;
    });
  }

  getById(id: number) {
    this.standingsService.getStandingByTeam(id).subscribe(res => {
      this.team = <Standing>res;
    });
  }
}
