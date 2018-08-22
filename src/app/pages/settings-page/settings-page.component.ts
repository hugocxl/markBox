import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {

   user = {
    email: '',
    password: '',
    settings : {
      editView: true, 
      htmlView: true,
      autoSave: true,
      preview:  true
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
    this.drawFunction();
  
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
    this.authService.updateData(data);
  };



  switchViewMode(){
    this.user.settings.editView = !this.user.settings.editView;
    this.user.settings.htmlView = !this.user.settings.htmlView;

    if(this.user.settings.htmlView) { this.user.settings.preview = false; }
    this.drawFunction();
  }

  switchAutoSaveMode(){
    this.user.settings.autoSave = !this.user.settings.autoSave;
    this.drawFunction()
  }


  switchPreviewMode(){
    if(this.user.settings.htmlView){
      this.user.settings.editView = true;
      this.user.settings.htmlView = false;
      this.user.settings.preview = !this.user.settings.preview;
    } else {
      this.user.settings.preview = !this.user.settings.preview;
    }
    this.drawFunction()
    
  }


  drawFunction(){
    console.log('DRAW')
    let viewModeSetContainer = document.getElementById('toggle-buttons-viewMode');
    let autoSaveSetContainer = document.getElementById('toggle-buttons-autoSaveMode');
    let previewSetContainer = document.getElementById('toggle-buttons-previewMode');


    if (this.user.settings.editView) {
      viewModeSetContainer.style.clipPath = 'inset(0 0 0 50%)';
      viewModeSetContainer.style.backgroundColor = '#D74046';
    }

    if (this.user.settings.htmlView) {      
      viewModeSetContainer.style.clipPath = 'inset(0 50% 0 0)';
      viewModeSetContainer.style.backgroundColor = 'dodgerblue';
    }

    if (this.user.settings.autoSave) {
      autoSaveSetContainer.style.clipPath = 'inset(0 0 0 50%)';
      autoSaveSetContainer.style.backgroundColor = '#D74046';
    } 
    if (!this.user.settings.autoSave) {   
      autoSaveSetContainer.style.clipPath = 'inset(0 50% 0 0)';
      autoSaveSetContainer.style.backgroundColor = 'dodgerblue';
    }

    if (this.user.settings.preview) {
      previewSetContainer.style.clipPath = 'inset(0 0 0 50%)';
      previewSetContainer.style.backgroundColor = '#D74046';
    } 
    if (!this.user.settings.preview) { 
      previewSetContainer.style.clipPath = 'inset(0 50% 0 0)';
      previewSetContainer.style.backgroundColor = 'dodgerblue';
    }
  }


}



