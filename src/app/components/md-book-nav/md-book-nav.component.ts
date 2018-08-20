import { Component, OnInit, Renderer2 } from '@angular/core';
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
  open = false;
  selectedIndex: number;
  changeTitle = false;

  newBook = {
    title : ''
  }
  newNote = {
    title: '',
    content: ''
  }
  newTitle = {
    title: ''  
  }

  public currentTitle;

  public setTitle = (title) => {
    this.changeTitle = true;
    if (this.currentTitle === title) return;
    this.newTitle.title = title;
    this.currentTitle = title;
  }

  constructor( 
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService,
    private router: Router,
    private renderer: Renderer2,
  ) { }
  
  
  ngOnInit() {
    this.mdBooksService.mdBooksListChange$.subscribe((updatedList) => {
        this.mdBooks = updatedList;
    }); 
    return this.mdBooksService.getAll()
  }

  toogleOpen(index: number){
    this.selectedIndex = index;
    this.open = !this.open;
  }
  
  toggleClass(event: any, id) {
    const hasClass = event.target.classList.contains('open');    
    if(hasClass) {
      this.renderer.removeClass(event.target, 'open');
      this.changeTitle = false;
    } else {
      this.renderer.addClass(event.target, 'open');
    }
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

  setNewTitle(form, noteId, bookId){
    if(!this.newTitle.title){
      this.newTitle.title = this.currentTitle;
      this.changeTitle = false;
    } else {
      this.changeTitle = false;
      this.mdNotesService.editNewTitle(noteId, this.newTitle)
      .then(() => {
        this.newTitle.title = '';
      })
      .then(()=>{
        this.mdBooksService.updateMdBooksList();
        this.mdBooksService.updateCurrentMdBook(bookId);
      })
      .catch(error => {
        console.error(error);
      })
    }
  }
}
