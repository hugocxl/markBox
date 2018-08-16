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

  isTitleEdited = false;
  isEditing = false;
  // id: number;

  constructor(  
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) { }

    public pipeMarkDown = '# Markdown';
    newTitle:any;

    // @HostListener('mouseover') onHover() {
    //   let part = this.el.nativeElement.querySelector('#noteTitle').style= 'color:red';
    //   window.alert("hover");
    // }
  //INIT: BIND SELECTED NOTE TO COMPONENT PROPERTIES THROUGH PARAMS SUB.
  ngOnInit(){
    this.route.params.subscribe((val) => {
      this.getNote(val);
      this.editTitle();
    });
  };

  //EDIT NOTE TITLE - Activated onInit
  editTitle(){
    this.renderer.listen(document.getElementById('noteTitle'), 'click', (event) => {
      this.isTitleEdited = true;
    });
  }

  saveTitleChanges(){
    const data = {
      title: document.getElementById('noteTitle').innerHTML,
      content: this.markdown
    };
    this.mdNotesService.edit(this.mdNote._id, data)
    .then(data => {
      console.log('Succesfully saved');
    })
    .catch(error => {
      console.log('Fail Saving')
    });
    this.isTitleEdited = false;
  }


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
  handleEdit(){
    this.isEditing = !this.isEditing;
  };

  //SAVE EDITED NOTE: 
  saveChanges(){
    this.handleEdit();
    
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


}


