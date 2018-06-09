import { Component, Input } from '@angular/core';
import { AuthenticationService } from "../../services/authentication";

@Component({
  selector: 'header',
  templateUrl: './header.html',
})

export class AppHeaderComponent {
  @Input() title: string;
  constructor(
    private authenticationService: AuthenticationService
  ) {}

  isSignedIn() {
    return localStorage.getItem("appUser");
  }

  logOut() {
    this.authenticationService.logout();
  }
}
