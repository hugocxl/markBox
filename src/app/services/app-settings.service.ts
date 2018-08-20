import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  public settings = {
    editView: true,
    htmlView: false,
    autoSave: true,
    preview: false
  };

  private API_URL = environment.API_URL;
  
  
  constructor(
    private httpClient: HttpClient, 
    private authService: AuthService
  ) { }

  getSettings() {
    this.settings = this.authService.user.settings
    return this.settings;
  }

  updateSettings(settings){
    this.authService.updateData(settings);
    this.getSettings();
  }
}
