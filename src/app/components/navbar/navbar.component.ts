import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    loggedInUser: any;

    ngOnInit() {
      this.loggedInUser = this.authService.getUser();
      console.log(this.loggedInUser);
    }

    navigateHome(){
      this.router.navigate(['home']);
    }
  
    logout() {
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }
  }
