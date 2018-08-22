import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  searchContent = "";

  constructor(
    private router: Router,
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((val) => {
      this.searchContent = '';
      document.getElementById('search-input').classList.remove('active');
      
    });
    document.getElementById('search-input').addEventListener( "keyup", ()=>{
      if (this.searchContent) { 
        this.router.navigate(['/search']);
        this.mdNotesService.updateSearch(this.searchContent);
      } else {
        this.router.navigate(['/home']);
      }
    }, false )
  }

}
