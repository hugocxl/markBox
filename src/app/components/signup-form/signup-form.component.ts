import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  newUser = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.signup(this.newUser)
    .then(() => {
        this.router.navigate(['/private']);
    })
    .catch(error => {
        console.log(error);
    });
  }

}
