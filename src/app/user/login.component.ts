import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    @Inject(AuthService) private authService: AuthService, @Inject(Router) private router: Router) {}

  login(formValues) {
    this.authService.loginUser(
      formValues.userName,
      formValues.password
    );

    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
