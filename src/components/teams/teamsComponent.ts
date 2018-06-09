import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from "../../services/authentication";
import {Team} from "./team";
import {TeamService} from "../../services/teamService";

@Component({
  templateUrl: 'teams.html',
  styleUrls: ['./teams.css']
})

export class TeamsComponent implements OnInit {
  model: any = {};
  teams?: Array<Team>;
  selectedTeam?: Team;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(res => {
      this.teams = <Array<Team>>res;
    });
  }

  loadTeam(id: number) {
    this.teamService.getTeamById(id).subscribe(res => {
      this.selectedTeam = <Team>res;
    });
  }

  closeSelectedTeam() {
    this.selectedTeam = null;
  }
}
