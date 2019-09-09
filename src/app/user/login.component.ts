import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {
  userName;
  password;
  mouseOverLogin;

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
