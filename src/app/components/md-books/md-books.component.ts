import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';

@Component({
  selector: 'app-md-books',
  templateUrl: './md-books.component.html',
  styleUrls: ['./md-books.component.css']
})
export class MdBooksComponent implements OnInit {

  open = false;
  isEditing = false;
  mdBooks: Object;

  note = "hola bla bla bla";
  markdown = this.note;

  constructor( private mdBooksService: MdBooksService) { }

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

  toggleNotes(){
    this.open = !this.open;
  }

  handleClickNote(){
    this.markdown = "# h1 ahora es otra nota";
  }

  handleEdit(){
    this.isEditing = !this.isEditing;
  }

}
