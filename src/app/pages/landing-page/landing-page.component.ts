import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    
  }

}
