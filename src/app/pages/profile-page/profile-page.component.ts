import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FilesaverService } from '../../services/filesaver.service';

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
    private authService: AuthService,
    private filesaverService: FilesaverService
   ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  saveFile(){
    this.filesaverService.onTestSaveFile()
  }

  updateInfo(){
    if(this.emailFirst === this.emailSecond && this.emailFirst){
      const data = { 
        email: this.emailFirst 
      };
      return this.authService.updateData(data)
    }
    if(this.passwordFirst === this.passwordSecond && this.passwordFirst){
      const data = { 
        password: this.passwordFirst 
      };
      return this.authService.updateData(data)
    }
    this.user = this.authService.getUser();
  }

}
