import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  emailFirst = "";
  emailSecond = "";
  passwordFirst = "";
  passwordSecond = "";

  user:any;
  constructor(
    private authService: AuthService
   ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  updateInfo(){
    if(this.emailFirst === this.emailSecond){
      const data = { 
        email: this.emailFirst 
      };
      return this.authService.updateData(data)
    }
    if(this.passwordFirst === this.passwordSecond){
      const data = { 
        password: this.passwordFirst 
      };
      return this.authService.updateData(data)
    }
  }

}
