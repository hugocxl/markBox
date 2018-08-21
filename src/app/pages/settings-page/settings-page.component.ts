import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

  private user = {
    email: '',
    password: '',
    settings : {
      editView: false, 
      htmlView: false,
      autoSave: false,
      preview:  false
    }
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });
    this.user = this.authService.getUser();
    
  }

  saveChanges(){
    const data = {
      settings: { 
        editView: this.user.settings.editView,
        htmlView: this.user.settings.htmlView,
        autoSave: this.user.settings.autoSave,
        preview: this.user.settings.preview,
      }
    }
    return this.authService.updateData(data);
    
  };



}
