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
      editView: '', 
      htmlView: '',
      autoSave: '',
      preview:  ''
    }
  };

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });
    const currentUser = this.authService.getUser();
    this.authService.updateData(currentUser);
  }

  updateSettings(){
    const settings = { 
      editView: this.user.settings.editView,
      htmlView: this.user.settings.htmlView,
      autoSave: this.user.settings.editView,
      preview: this.user.settings.preview,
    };
    return this.authService.updateData(settings);
    
  };



}
