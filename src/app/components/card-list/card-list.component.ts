import { Component, OnInit, Renderer2, AfterViewChecked } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, AfterViewChecked {

  mdBook = {
    mdNotes:[]
  };
  noteCount: String;
  changeTitle = false;

  newTitle = {
    title: ''  
  }

  constructor(
    private mdBooksService: MdBooksService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
  ) { }

  public ngAfterViewChecked(): void {
    if (this.changeTitle) {
      this.renderer.selectRootElement('#new-title').focus();
    }
  }

  ngOnInit() {
    this.mdBooksService.currentMdBookChange$.subscribe((updatedMdBook) => {
        this.mdBook = updatedMdBook;
        if(this.mdBook.mdNotes.length){
          let checkNoteCount;
          this.mdBook.mdNotes.length > 1 ? checkNoteCount = 'notes' : checkNoteCount = 'note';
          this.noteCount = `You have ${this.mdBook.mdNotes.length} ${checkNoteCount} in this book.`;
        }
        else{
          this.noteCount = `You have no notes`;
        }
    }); 
    const id = this.route.params.subscribe((val) => {
      this.mdBooksService.getOne(val.id)
    })
  }
  setTitle(title){
    this.changeTitle = !this.changeTitle;
    this.newTitle.title = title;
  }
  setNewTitle(form, bookId){
    if(!this.newTitle.title){
      this.changeTitle = false;
    } else {
      this.changeTitle = false;
      this.mdBooksService.edit(bookId, this.newTitle)
      .then(() => {
        this.newTitle.title = '';
        this.mdBooksService.updateCurrentMdBook(bookId);
      })
      .catch(error => {
        console.error(error);
      })
    }
  }

}
