import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  user: any;
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.user = this.authService.getUser(); 
      console.log("landing", this.user)
    }

}
