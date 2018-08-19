import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  mdBook = {
    mdNotes:[]
  };
  noteCount: String;
  constructor(
    private mdBooksService: MdBooksService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.mdBooksService.currentMdBookChange$.subscribe((updatedMdBook) => {
        this.mdBook = updatedMdBook;
        console.log(this.mdBook.mdNotes);
        if(this.mdBook.mdNotes.length){
          let checkNoteCount;
          this.mdBook.mdNotes.length > 1 ? checkNoteCount = 'notes' : checkNoteCount = 'note';
          this.noteCount = `You have: ${this.mdBook.mdNotes.length} ${checkNoteCount}`;
        }
        else{
          this.noteCount = `You have no notes`;
        }
    }); 
    const id = this.route.params.subscribe((val) => {
      this.mdBooksService.getOne(val.id)
    })
  }

}
