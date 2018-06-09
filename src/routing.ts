import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import {StandingsComponent} from "./components/standings/standingsComponent";
import {TeamsComponent} from "./components/teams/teamsComponent";
import {HomeComponent} from "./components/home/homeComponent";
import {ContactsComponent} from "./components/contacts/contactsComponent";
import {GamesComponent} from "./components/games/gamesComponent";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'games', component: GamesComponent },

  // otherwise redirect to home
  { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
