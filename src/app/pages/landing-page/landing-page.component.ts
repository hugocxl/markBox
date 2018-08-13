import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ThrowStmt } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  toggleText = 'Not registered yet? Sign up';
  on = false;

  user: any;
    constructor(
      private authService: AuthService,
      private router: Router
    ) {}
  
    ngOnInit() {
      this.user = this.authService.getUser(); 
     
    }

    toggle(){
      this.on = !this.on;
      if(this.on){
        this.toggleText = 'Already have an account? Log in';
      }
      else{
        this.toggleText = 'Not registered yet? Sign up';
      }
    }

}
