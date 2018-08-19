import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Renderer2 } from '@angular/core';
import { fadeAnimation } from '../../animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [fadeAnimation]
})

export class NavbarComponent implements OnInit {
    
    constructor(
      private authService: AuthService,
      private router: Router,
      private renderer: Renderer2
    ) {}
    
    user: any;

    ngOnInit() {
      this.user = this.authService.getUser();
    }

    logout() {
      //DELETE FROM VIEW NAVBARS:
      document.getElementById('md-books-nav').classList.remove('active');
      document.getElementById('app-document').classList.remove('active');
      document.getElementById('search-field').classList.remove('active');
      this.renderer.removeClass(document.body, 'logged-in');

      //LOGOUT:
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }

    toggleBooksNav(){
      document.getElementById('md-books-nav').classList.toggle('active');
      document.getElementById('app-document').classList.toggle('active');
      if(document.getElementsByTagName('body')[0].classList.contains('active')){
        this.renderer.removeClass(document.body, 'active');
      } else {
        this.renderer.addClass(document.body, 'active');
      }
    }

    toggleSearchField(){
      document.getElementById('search-field').classList.toggle('active');
      document.getElementById('toggle-search').classList.toggle('active');
    }

  }
  
