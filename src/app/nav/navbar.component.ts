import { Component, Inject } from '@angular/core';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav { font-size: 15px; }
    #searchForm { margin-right: 100px; }
    @media (max-width: 1200px) { #searchForm { display: none; } }
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  constructor(@Inject(AuthService) private auth: AuthService) {}
}
