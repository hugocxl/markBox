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
  newNote = {
    title: ''
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
  addMdNote(form, bookId){
    console.log(this.newNote);
    this.mdNotesService.new(this.newNote,bookId)
    .then(newNote => {
      let index = this.mdBooks.findIndex(x => x._id === bookId);
      this.mdBooks[index].mdNotes.push(newNote);
      this.newNote.title = "";
    })
    .catch(err => {
      console.error(err);
    })
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
