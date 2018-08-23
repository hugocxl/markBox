import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    console.log(this.error);
      if (form.valid) {
        this.processing = true;
      this.authService.login(this.user)
      .then(() => {
          this.router.navigate(['/home']);
      })
      .catch(error => {
        this.error = error.statusText;
        console.log(this.error);
        this.processing = false;
        this.feedbackEnabled = false;
      });
    }
  }
}
