import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-md-note',
  templateUrl: './md-note.component.html',
  styleUrls: ['./md-note.component.css']
})
export class MdNoteComponent implements OnInit {

  id: number;
  private sub: any;
  isEditing = false;
  mdBooks: Object;
  mdNote : any;
  markdown: any;

  constructor(     
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.idNote
    this.mdNotesService.getOne(this.id)
      .then(mdNote => {
        this.mdNote = mdNote;
        this.markdown = this.mdNote.content;
      })
      .catch(err => {
        console.error(err);
      })
  }


}


