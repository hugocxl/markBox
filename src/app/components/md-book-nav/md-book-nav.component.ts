import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';

@Component({
  selector: 'app-md-book-nav',
  templateUrl: './md-book-nav.component.html',
  styleUrls: ['./md-book-nav.component.css']
})
export class MdBookNavComponent implements OnInit {

  open = false;
  mdBooks: Object;
  mdNote : any;
  markdown: any;
  id: number;
  newBook = {
    title : ''
  }

  constructor( 
    private mdBooksService: MdBooksService    
  ) { }

  ngOnInit() {
    this.mdBooksService.getAll()
      .then(mdBooks => {
        this.mdBooks = mdBooks;
      })
      .catch(err => {
        console.error(err);
      })
  }

  toggleNotes(id){
    document.getElementById(id).classList.toggle('open');
  }

  addMdBook(form){
    console.log(this.newBook);
    //this.mdBooksService.new(this.newBook);
  }

}
