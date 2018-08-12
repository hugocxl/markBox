import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.authService.signup({
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

