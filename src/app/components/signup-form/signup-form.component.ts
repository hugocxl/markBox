import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  emailFirst = '';
  emailSecond = '';
  password = '';
 

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    if(this.emailFirst === this.emailSecond){
      const newUser = {
        email: this.emailFirst,
        password: this.password
      };
    
      this.authService.signup(newUser)
      .then(() => {
          this.router.navigate(['/home']);
      })
      .catch(error => {
          console.log(error);
      });

    }

  }

}
