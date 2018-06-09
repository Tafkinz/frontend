import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppHeaderComponent} from "../components/header/header";
import {JwtInterceptor} from "../common";
import {AlertComponent} from "../components/alert";
import {RegisterComponent} from "../components/register";
import {routing} from "../routing";
import {LoginComponent} from "../components/login";
import {AlertService, AuthenticationService, UserService} from "../services/authentication";
import {FormsModule} from "@angular/forms";
import {AppFooterComponent} from "../components/footer/footer";
import {StandingsComponent} from "../components/standings/standingsComponent";
import {StandingsService} from "../services/standingsService";
import {Ng2OrderModule} from "ng2-order-pipe";
import {TeamsComponent} from "../components/teams/teamsComponent";
import {TeamService} from "../services/teamService";
import {HomeComponent} from "../components/home/homeComponent";
import {ContactsComponent} from "../components/contacts/contactsComponent";
import {ContactsService} from "../services/contactsService";
import {GamesComponent} from "../components/games/gamesComponent";
import {GameService} from "../services/gameService";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    AppFooterComponent,
    StandingsComponent,
    TeamsComponent,
    HomeComponent,
    ContactsComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    Ng2OrderModule,
    routing
  ],
  providers: [
    AlertService,
    AuthenticationService,
    StandingsService,
    TeamService,
    ContactsService,
    UserService,
    GameService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
