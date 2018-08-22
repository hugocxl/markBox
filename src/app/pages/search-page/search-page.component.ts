import { Component, OnInit } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';
import { MdBooksService } from '../../services/md-books.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchResult: any;
  pinned
  constructor(
    private mdNotesService: MdNotesService,
    private mdBooksService: MdBooksService,
  ) { }

  ngOnInit() {
    this.mdNotesService.searchChange$.subscribe(updatedSearch => {
      this.searchResult = updatedSearch;
    });
  }

  delete(mdNote, mdBook){
    console.log(mdNote);
    console.log(mdBook);
    this.mdNotesService.delete(mdNote._id)
    .then(()=> {
      this.mdBooksService.updateCurrentMdBook(mdBook._id);
    })
    .then(() =>{
      this.mdBooksService.updateMdBooksList();
    })
    .catch(err => {
      console.error(err);
    })
  }

  addToPinned(mdNote, mdBook){
    mdNote.pinned = !mdNote.pinned;
    this.mdNotesService.pin(mdNote._id, mdNote.pinned)
    .then(() => {
      this.mdBooksService.updateCurrentMdBook(mdBook._id);
    })
    .catch(error => {
      console.error(error);
    })
  }

}
