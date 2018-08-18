import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { MdNotesService } from '../../services/md-notes.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  latest:any;

  constructor(
    private authService: AuthService,
    private mdNotesService: MdNotesService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser()
    this.mdNotesService.getLatest()
    .then(latestNotes => {
      this.latest = latestNotes;
    })
  }

}
