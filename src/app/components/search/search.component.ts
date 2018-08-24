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
    this.router.events.subscribe((val) => {
      if(!this.searchContent && this.router.url === '/search' ){
        this.searchContent = '';
        document.getElementById('search-field').classList.remove('active');
      }

      if(this.searchContent.length>1 && this.router.url === '/search' ){
        this.searchContent = '';
        document.getElementById('search-field').classList.remove('active');
      }

      if(!this.searchContent && this.router.url !== '/search' ){
        let searchDiv = document.getElementById('search-field');
        this.searchContent = '';
        if(searchDiv){
          searchDiv.classList.remove('active');
        }
      }


    });
    document.getElementById('search-input').addEventListener( "keyup", ()=>{
      if (this.searchContent) { 
        this.router.navigate(['/search']);
        this.mdNotesService.updateSearch(this.searchContent);
      }

  })
}




}

