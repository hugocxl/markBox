'use-strict';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './animations';
import { AuthService } from './services/auth.service';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  title = 'app';
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
      if(this.user){
        this.renderer.addClass(document.body, 'logged-in');
      }
    });

  }

}