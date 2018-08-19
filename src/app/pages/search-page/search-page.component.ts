import { Component, OnInit } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  mdNotesSearch: any;

  constructor(
    private mdNotesService: MdNotesService
  ) { }

  ngOnInit() {
      this.mdNotesService.searchChange$.subscribe(updatedSearch => {
        this.mdNotesSearch = updatedSearch
      })
  }

}
