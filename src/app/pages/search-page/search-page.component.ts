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
  searchResultsNum:Number;
  pinned;

  constructor(
    private mdNotesService: MdNotesService,
    private mdBooksService: MdBooksService,
  ) { }

  ngOnInit() {
    this.mdNotesService.searchChange$.subscribe(updatedSearch => {
      this.searchResultsNum = this.getSearchResutlsNumber(updatedSearch);
      this.searchResult = updatedSearch;
    });
  }

  delete(mdNote, mdBook){
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

  getSearchResutlsNumber(searchResult){
    let num = 0;
    searchResult.forEach(book => {
      book.mdNotes.forEach(note => {
        num++;
      });
    });
    return num;
  }

//   // PASS SEARCH STRING AND RETURNED CONTENT THROUGH HIGHLIGHT PARSER
//   highlightSearchstring(value: string, args: string): any {
//     if (args && value) {
//         value = String(value); // make sure its a string
//         let startIndex = value.toLowerCase().indexOf(args.toLowerCase());
//         if (startIndex != -1) {
//             let endLength = args.length;
//             let matchingString = value.substr(startIndex, endLength);
//             return value.replace(matchingString, "<mark>" + matchingString + "</mark>");
//         }

//     }
//     return value;
// }

}
