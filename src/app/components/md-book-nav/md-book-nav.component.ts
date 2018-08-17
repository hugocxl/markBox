import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-md-book-nav',
  templateUrl: './md-book-nav.component.html',
  styleUrls: ['./md-book-nav.component.css']
})
export class MdBookNavComponent implements OnInit {

  mdBooks:any;
  mdNote : any;
  newMdNote: any;
  newMdBook:any;
  mdBookId: number;
  id: number;
  
  newBook = {
    title : ''
  }
  newNote = {
    title: '',
    content: ''
  }

  constructor( 
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService,
    private router: Router
  ) { }


  ngOnInit() {
    this.mdBooksService.getAll()
    .then(() =>{
      this.mdBooks = this.mdBooksService.mdBooks;
    })
    .catch(err => {
      console.error(err);
    })
  }

  toggleNotes(id){
    document.getElementById(id).classList.toggle('open');
  }
  addMdNote(form, bookId){
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
      this.mdBookId = this.newMdBook._id;
      return this.mdNotesService.getOne(this.newMdBook.mdNotes[0])  
    })
    .then(newNote =>{
      this.newMdNote = newNote;
      this.mdBooks.push(this.newMdBook);
      this.newMdBook.mdNotes.push(newNote);
      this.router.navigate(['/mdBooks/', this.newMdBook._id, 'mdNotes', this.newMdNote._id]);
      this.newBook.title = "";
    })
    .catch(err => {
      console.error(err);
    })
  } 

}
