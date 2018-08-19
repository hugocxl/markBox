import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  public settings = {
    editView: false,
    htmlView: true
  };

  private settingsChange: Subject<any> = new Subject(); 
  settingsChange$: Observable<any> = this.settingsChange.asObservable();
  
  constructor() { }

  private setCurrentEditMode(updatedSettings: any) {
    this.settings = updatedSettings;
    this.settingsChange.next(updatedSettings);
    return updatedSettings;
  };

  updateStatus(status){
    this.setCurrentEditMode(status);
  };

}
