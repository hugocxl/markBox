import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-md-note',
  templateUrl: './md-note.component.html',
  styleUrls: ['./md-note.component.css']
})
export class MdNoteComponent implements OnInit {

  actualRoute: string;

  id: number;
  isEditing = false;
  mdBooks: Object;
  mdNote : any;
  markdown: any;

  constructor(  
    private location: Location, 
    private router: Router,
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute
  ) { }

    public pipeMarkDown = '# Markdown';
  
    ngOnInit(){
      this.router.events.subscribe((val) => {
        if(this.location.path() != ''){
          this.id = this.route.snapshot.params.idNote;
          this.mdNotesService.getOne(this.id)
        .then(mdNote => {
          this.mdNote = mdNote;
          this.markdown = this.mdNote.content;
        })
        .catch(err => {
          console.error(err);
        });
      }
      });
  }
  
  handleEdit(){
    this.isEditing = !this.isEditing;
  }


}


