import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    user: any;

    ngOnInit() {
      this.user = this.authService.getUser();
    }
  
    logout() {
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }
  }
