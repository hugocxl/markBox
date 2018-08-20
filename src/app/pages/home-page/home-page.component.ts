import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MdNotesService } from '../../services/md-notes.service';
import { MdBooksService } from '../../services/md-books.service'


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user: any;
  notes: any;
  latestNotesInBook:any;
  latestNotes = [];
  pinnedNotesInBook:any;
  pinnedNotes = [];


  constructor(
    private authService: AuthService,
    private mdNotesService: MdNotesService,
    private mdBooksService: MdBooksService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser()


    this.mdNotesService.getLatest()
    .then(latestNotes => {
      this.latestNotesInBook = latestNotes;
      this.latestNotesInBook.forEach(book => {
        book.mdNotes.forEach(note => {
          note.book_id = book._id;
          this.latestNotes.push(note);
        })
      })
    });


    this.mdBooksService.getPinned()
    .then(pinnedNotes => {
      this.pinnedNotesInBook = pinnedNotes;
      this.pinnedNotesInBook.forEach(book => {
        book.mdNotes.forEach(note => {
          note.book_id = book._id;
          this.pinnedNotes.push(note);
        })
      });
    })
  }

}
