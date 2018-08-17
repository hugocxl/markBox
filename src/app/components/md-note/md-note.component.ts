import { Component, OnInit } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';

import { ActivatedRoute } from '@angular/router';
import { Renderer2 } from '@angular/core';


@Component({
  selector: 'app-md-note',
  templateUrl: './md-note.component.html',
  styleUrls: ['./md-note.component.css']
})
export class MdNoteComponent implements OnInit {

  mdNote = {
    _id: "",
    title: "",
    content: "",
  };
  mdNewnote:any;
  markdown: any;

  public pipeMarkDown = '# Markdown';
  
  newTitle:any;
  
  editMode = false;
  autoSaveMode = false;
  previewActive = true;
  
  // id: number;

  constructor(  
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }



  //INIT: BIND SELECTED NOTE TO COMPONENT PROPERTIES THROUGH PARAMS SUB.
  ngOnInit(){
    this.route.params.subscribe((val) => {
      this.getNote(val);
    });
  };
  //GET NOTE FUNCTION:
  getNote(val) {
    this.mdNotesService.getOne(val.id)
      .then(note => {
        this.mdNewnote = note
        this.mdNote = this.mdNewnote;
        this.markdown = this.mdNote.content;
        //If note.content -> ERROR (though it works)
      })
      .catch(err => {
        console.error(err);
      });
  }
  //EDIT MODE CONTROL:
  editModeIO(){
    this.previewActive = false;
    this.editMode = !this.editMode;
  };
  activatePreview(){
    this.previewActive = !this.previewActive;
  };
  // AUTOSAVE MODE MANAGEMENT:
  activateAutoSave(){
    this.autoSaveMode = !this.autoSaveMode;
  }
  autoSave(){
    if(this.autoSaveMode) { this.saveFunction() }
  }
  //SAVE EDITED NOTE: 
  saveFunction(){    
    const data = {
      title: this.mdNote.title,
      content: this.markdown
    };

    this.mdNotesService.edit(this.mdNote._id, data)
    .then(data => {
      console.log('Succesfully saved')
    })
    .catch(error => {
      console.log('Fail Saving')
    });
  };
  saveAndClose(){
    this.editMode = false;
    this.previewActive = true;
    this.saveFunction();
  }
  //CLOSE NOTE WITHOUT SAVING:
  closeEdit(){
    this.editMode = false;
    this.previewActive = true;
  }


}


