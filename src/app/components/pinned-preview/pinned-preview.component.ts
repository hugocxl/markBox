import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdNotesService } from '../../services/md-notes.service';

@Component({
  selector: 'app-pinned-preview',
  templateUrl: './pinned-preview.component.html',
  styleUrls: ['./pinned-preview.component.css']
})
export class PinnedPreviewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private mdNotesService: MdNotesService,
  ) { }


  mdNote:any;
  mdNewnote:any;
  markdown: any;

  public pipeMarkDown = '# Markdown';

  ngOnInit() {
    this.route.params.subscribe((val) => {
      if(val.id){
        this.getNote(val);
      }
    });
  }

  getNote(val){
    this.mdNotesService.getOne(val.id)
    .then(note => {
      this.mdNewnote = note
      this.mdNote = this.mdNewnote;
      this.markdown = this.mdNote.content;
      console.log(this.markdown);
    })
    .catch(err => {
      console.error(err);
    });
  }

}
