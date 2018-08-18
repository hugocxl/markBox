import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MdNotesService } from '../../services/md-notes.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  latestNotes:any;

  constructor(
    private authService: AuthService,
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser()
    this.mdNotesService.getLatest()
    .then(latestNotes => {
      this.latestNotes = latestNotes;
    })
  }

}
