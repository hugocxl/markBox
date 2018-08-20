import { Component, OnInit } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';

@Component({
  selector: 'app-pinned-page',
  templateUrl: './pinned-page.component.html',
  styleUrls: ['./pinned-page.component.css']
})
export class PinnedPageComponent implements OnInit {

  pinnedNotes:any;
  noteCount:String;

  constructor(
    private mdNotesService: MdNotesService,
  ) { }

  ngOnInit() {
    this.mdNotesService.getPinned()
    .then(pinnedNotes => {
      this.pinnedNotes = pinnedNotes;
      if(this.pinnedNotes.length){
        let checkNoteCount;
        this.pinnedNotes.length > 1 ? checkNoteCount = 'notes' : checkNoteCount = 'note';
        this.noteCount = `You have: ${this.pinnedNotes.length} pinned ${checkNoteCount}`;
      }
      else{
        this.noteCount = `You have no pinned notes`;
      }
    })
  }

}
