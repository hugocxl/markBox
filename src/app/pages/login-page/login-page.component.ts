import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.login({
        username: this.username,
        password: this.password
    })
    .then(() => {
        this.router.navigate(['/private']);
    })
    .catch(error => {
        console.log(error);
    });
  }
}

