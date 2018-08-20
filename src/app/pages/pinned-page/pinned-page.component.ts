import { Component, OnInit } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';

@Component({
  selector: 'app-pinned-page',
  templateUrl: './pinned-page.component.html',
  styleUrls: ['./pinned-page.component.css']
})
export class PinnedPageComponent implements OnInit {

  pinnedNotes:any;
  
  constructor(
    private mdNotesService: MdNotesService,
  ) { }

  ngOnInit() {
    this.mdNotesService.getPinned()
    .then(pinnedNotes => {
      this.pinnedNotes = pinnedNotes;
    })
  }

}
