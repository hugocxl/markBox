import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-md-books-page',
  templateUrl: './md-books-page.component.html',
  styleUrls: ['./md-books-page.component.scss']
})
export class MdBooksPageComponent implements OnInit {
  mdNoteSelected: Boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  checkNoteSelection(){
    if(this.route.snapshot.params.idNote){
      this.mdNoteSelected = true;
    } else {
      this.mdNoteSelected = false;
    }
  }

  ngOnInit() {
    console.log('PAGE COMPONENT')
    this.checkNoteSelection();
  }

}
