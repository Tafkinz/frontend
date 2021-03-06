import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService, AuthenticationService, UserService} from "../../services/authentication";

@Component({
  templateUrl: 'loginComponent.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.userService.getUser().subscribe(
            user => {
              localStorage.setItem('appUser', JSON.stringify(user));
            }
          );
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
