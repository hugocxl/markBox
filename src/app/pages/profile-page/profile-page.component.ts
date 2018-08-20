import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, Subject } from 'rxjs';

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


  public user: any;
  private userChange: Subject<any> = new Subject(); 
  userChange$: Observable<any> = this.userChange.asObservable();

  
  constructor(
    private authService: AuthService,
   ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    console.log(this.user)
  }
  

  updateInfo(){
    console.log("das", this.emailFirst, this.emailSecond)
    if(this.emailFirst === this.emailSecond){
      const data = { 
        email: this.emailFirst 
      };
      return this.authService.updateData(data)

    if(this.passwordFirst === this.passwordSecond){
      const data = {
        password: this.passwordFirst 
      };
      return this.authService.updateData(data)
    }

  };

}
