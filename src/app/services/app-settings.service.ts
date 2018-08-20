import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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

  // private settingsChange: Subject<any> = new Subject(); 
  // settingsChange$: Observable<any> = this.settingsChange.asObservable();
  
  constructor() { }

  // private setCurrentEditMode(updatedSettings: any) {
  //   this.settings = updatedSettings;
  //   this.settingsChange.next(updatedSettings);
  //   return updatedSettings;
  // };

  // updateStatus(status){
  //   this.setCurrentEditMode(status);
  // };

  getSettings() {
    return this.settings;
  }
}
