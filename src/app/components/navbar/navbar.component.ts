import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
0

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    
    constructor(
      private authService: AuthService,
      private router: Router,
    ) {}
    
    user: any;

    ngOnInit() {
      this.user = this.authService.getUser();
    }

    logout() {
      //DELETE FROM VIEW NAVBARS:
      document.getElementById('md-books-nav').classList.remove('active');
      document.getElementById('app-document').classList.remove('active');

      //LOGOUT:
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }

    toggleBooksNav(){
      document.getElementById('md-books-nav').classList.toggle('active');
      document.getElementById('app-document').classList.toggle('active');
    }

  }
  
