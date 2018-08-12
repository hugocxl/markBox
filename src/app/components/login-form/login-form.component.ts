import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.login(this.user)
    .then(() => {
        this.router.navigate(['/private']);
    })
    .catch(error => {
        console.log(error);
    });
  }

}
