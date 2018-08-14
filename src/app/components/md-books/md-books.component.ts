import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md-books',
  templateUrl: './md-books.component.html',
  styleUrls: ['./md-books.component.css']
})
export class MdBooksComponent implements OnInit {

  open = false;

  mdBooks:Array<any> = [];
  newMdBook = {
    title: ''
  }
  constructor() { }

  ngOnInit() {
  }

  toggleNotes(){
    this.open = !this.open;
  }

  addNew(mdBook){
    this.mdBooks.push(this.newMdBook);
  }

}
