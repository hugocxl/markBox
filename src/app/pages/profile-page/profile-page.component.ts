import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public emailFirst: any;
  public emailSecond: any;
  public passwordFirst: any;
  public passwordSecond: any;

  public user = {
    email: '',
    password: '',
    settings: ''
  };
  
  constructor(
    private authService: AuthService,
    private renderer: Renderer2,
    private el: ElementRef
   ) { }


  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });
      this.user = this.authService.getUser();
  }

  resetFormInfo(){
    this.emailFirst= '';
    this.emailSecond= '';
    this.passwordFirst= '';
    this.passwordSecond= '';
  }

  updateInfo(){
    if(this.emailFirst === this.emailSecond && this.emailFirst){
      const data = { 
        email: this.emailFirst 
      };
      this.setActiveMessage('Email succesfully changed!');
      this.resetFormInfo();
      console.log(this.user);
      return this.authService.updateData(data);
    }
    if(this.passwordFirst === this.passwordSecond && this.passwordFirst){
      const data = {
        password: this.passwordFirst 
      };
      this.resetFormInfo();
      this.setActiveMessage('Password succesfully changed!');
      return this.authService.updateData(data);
    }
    this.setActiveMessage('Wrong info, please try again');
    this.resetFormInfo();
  };



  setActiveMessage(message){
    const activeMessage = this.renderer.createElement('span');
    activeMessage.classList.add('active-message');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(activeMessage,text);
    this.renderer.appendChild(this.el.nativeElement, activeMessage);
    setTimeout( () => {
      this.renderer.removeChild(this.el.nativeElement, activeMessage);
    }, 1000);
  }

}
