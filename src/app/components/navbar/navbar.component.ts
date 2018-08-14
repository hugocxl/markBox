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
  
    user: any;
    currentView: String;
    homePage : Boolean;
    mdBooksPage : Boolean;
    profilePage : Boolean;
    helpPage : Boolean;
    showMdBooks = false;

    resetUrl(){
      this.homePage = false;
      this.mdBooksPage = false;
      this.profilePage = false;
      this.helpPage = false;
    }

    setCurrentView(){
      this.resetUrl();
      this.currentView = this.router.url;

      switch (this.currentView){
        case '/home':
          this.homePage = true;
          break;

        case '/profile':
          this.profilePage = true;
          break;
        
        case '/help':
          this.helpPage = true;
          break;
      }
    }

    ngOnInit() {
      this.setCurrentView();
      this.user = this.authService.getUser();
      console.log(this.router.url)
    }

    //NAVIGATION FUNCTIONS: 
    navigateHome(){
      this.router.navigate(['/home']);
      this.setCurrentView()
    }

    navigateMdBooks(){
      this.showMdBooks = !this.showMdBooks;
      this.setCurrentView()
    }

    navigateProfile(){
      this.router.navigate(['/profile']);
      this.setCurrentView()
    }

    navigateHelp(){
      this.router.navigate(['/help']);
      this.setCurrentView()
    }

    logout() {
      this.authService.logout()
        .then(() => this.router.navigate(['/login']));
    }
  }
  
