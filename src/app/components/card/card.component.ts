import { Component, OnInit, Input } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';
import { MdBooksService } from '../../services/md-books.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() mdNote: any;
  @Input() mdBook: any;

  constructor(
    private mdNotesService: MdNotesService,
    private mdBooksService: MdBooksService
  ) { }

  ngOnInit() {
  }

  delete(){
    this.mdNotesService.delete(this.mdNote._id)
    .then(()=> {
      this.mdBooksService.updateCurrentMdBook(this.mdBook._id);
    })
    .then(() =>{
      this.mdBooksService.updateMdBooksList();
    })
    .catch(err => {
      console.error(err);
    })
  }

  addToPinned(){
    console.log(this.mdNote.pinned)
    // this.mdNote.pinned = !this.mdNote.pinned;
    // this.mdNotesService.pin(this.mdNote._id, this.mdNote.pinned);
    // this.mdBooksService.updateCurrentMdBook(this.mdBook._id);

  }


}

