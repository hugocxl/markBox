import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser()
    console.log('HOME: ', this.user)
  }

}
