import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';

@Component({
  selector: 'app-md-books',
  templateUrl: './md-books.component.html',
  styleUrls: ['./md-books.component.css']
})
export class MdBooksComponent implements OnInit {

  open = false;
  isEditing = false;
  mdBooks: Object;

  content: Object;
  markdown:string;

  constructor( 
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService
  ) { }

  public pipeMarkDown = '# Markdown';

  ngOnInit() {
    this.mdBooksService.getAll()
      .then(mdBooks => {
        console.log(mdBooks);
        this.mdBooks = mdBooks;
      })
      .catch(err => {
        console.error(err);
      })
  }

  toggleNotes(id){
    document.getElementById(id).classList.toggle('open');
  }

  handleClickNote(id){
    this.mdNotesService.getOne(id)
    .then(mdNote => {
      this.markdown = mdNote.content;
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleEdit(){
    this.isEditing = !this.isEditing;
  }

}
