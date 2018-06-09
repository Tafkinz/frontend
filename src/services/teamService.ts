import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Team} from "../components/teams/team";

@Injectable()
export class TeamService {
  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get('/api/Teams');
  }

  getTeamById(id: number) {
    return this.http.get('/api/Teams/' + id);
  }
}
