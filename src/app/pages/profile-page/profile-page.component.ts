import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  private emailFirst: any;
  private emailSecond: any;
  private passwordFirst: any;
  private passwordSecond: any;

  private user = {
    email: '',
    password: '',
    settings: ''
  };
  
  constructor(
    private authService: AuthService,
   ) { }


  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });
    const currentUser = this.authService.getUser();
    this.authService.updateData(currentUser);
  }

  updateInfo(){
    if(this.emailFirst === this.emailSecond){
      const data = { 
        email: this.emailFirst 
      };
      return this.authService.updateData(data);
    }
    if(this.passwordFirst === this.passwordSecond){
      const data = {
        password: this.passwordFirst 
      };
      return this.authService.updateData(data);
    }
  };

}
