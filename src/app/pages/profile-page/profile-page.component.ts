import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user:any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
