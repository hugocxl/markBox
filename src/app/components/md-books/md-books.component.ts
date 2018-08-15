import { Component, OnInit } from '@angular/core';
import { MdBooksService } from '../../services/md-books.service';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-md-books',
  templateUrl: './md-books.component.html',
  styleUrls: ['./md-books.component.css']
})
export class MdBooksComponent implements OnInit {

  open = false;
  

  mdBooks: Object;
  mdNote : any;
  markdown: any;
  
  id: number;
  private sub: any;


  constructor( 
    private mdBooksService: MdBooksService,
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute,
    
  ) { }

  public pipeMarkDown = '# Markdown';

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


}
