import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StandingsService {
  constructor(private http: HttpClient) { }

  getAllStandings() {
    return this.http.get('/api/Game');
  }

  getStandingByTeam(id: number) {
    return this.http.get('/api/Game/' + id);
  }
}
