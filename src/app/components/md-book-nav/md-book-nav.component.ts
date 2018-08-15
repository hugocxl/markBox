import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';


@Component({
  selector: 'app-md-book-nav',
  templateUrl: './md-book-nav.component.html',
  styleUrls: ['./md-book-nav.component.css']
})
export class MdBookNavComponent implements OnInit {

  open = false;
  mdBooks;
  mdNote : any;
  markdown: any;
  newMdBook:any;
  id: number;

  newBook = {
    title : ''
  }

  constructor( 
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService  
  ) { }

  ngOnInit() {
    this.mdBooksService.getAll()
      .then(mdBooksDB => {
        this.mdBooks = mdBooksDB;
      })
      .catch(err => {
        console.error(err);
      })
  }

  toggleNotes(id){
    document.getElementById(id).classList.toggle('open');
  }

  addMdBook(form){
    this.mdBooksService.new(this.newBook)
    .then(book => {
      this.newMdBook = book;
      return this.mdNotesService.getOne(this.newMdBook.mdNotes[0])
    })
    .then(newNote =>{
      this.newMdBook.mdNotes.push(newNote);
      this.mdBooks.push(this.newMdBook);
      this.newBook.title = '';
    })
    .catch(err => {
      console.error(err);
    })
  } 

}
