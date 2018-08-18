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
    this.mdBooksService.mdBooksListChange$.subscribe((updatedList) => {
        this.mdBooks = updatedList;
    }); 
    return this.mdBooksService.getAll()
  }

  toggleNotes(id){
    document.getElementById(id).classList.toggle('open');
  }
  
  addMdNote(form, bookId){
    this.mdNotesService.new(this.newNote, bookId)
    .then(newNote => {
      this.mdBooksService.updateCurrentMdBook(bookId);
      this.mdBooksService.updateMdBooksList();
      this.newNote.title = '';
    })
    .catch(err => {
      console.error(err);
    })
  }

  addMdBook(){
    return this.mdBooksService.new(this.newBook)
    .then(() => {
      this.newBook.title = '';
    })
    .catch(error => {
      console.error(error);
    })
  } 

}
