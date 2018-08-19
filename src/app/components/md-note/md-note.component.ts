import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';


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
    pinned: false
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
    private renderer: Renderer2,
    private el: ElementRef  
  ) { }

  setActiveMessage(message){
    const activeMessage = this.renderer.createElement('span');
    activeMessage.classList.add('active-message');
    const text = this.renderer.createText(message);
    this.renderer.appendChild(activeMessage,text);
    this.renderer.appendChild(this.el.nativeElement, activeMessage);
    setTimeout( () => {
      this.renderer.removeChild(this.el.nativeElement, activeMessage);
    }, 1000);
  }
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
        //this.mdnote = note
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
    this.setActiveMessage('Edit mode enabled');
  };
  activatePreview(){
    this.previewActive = !this.previewActive;
    if(this.previewActive){
      this.setActiveMessage('Preview mode enabled');
    } else {
      this.setActiveMessage('Edit mode enabled');
    }
    this.toggleEditClass();
  };
  // AUTOSAVE MODE MANAGEMENT:
  activateAutoSave(){
    this.autoSaveMode = !this.autoSaveMode;
    if(this.autoSaveMode){
      this.setActiveMessage('Autosave mode enabled');
    } else {
      this.setActiveMessage('Autosave mode disabled');
    }
  }
  autoSave(){
    if(this.autoSaveMode) { this.saveFunction() }
  }
  //SAVE EDITED NOTE: 
  saveFunction(){    
    const data = {
      title: this.mdNote.title,
      content: this.markdown,
      pinned: this.mdNote.pinned
    };
    this.mdNotesService.edit(this.mdNote._id, data)
    .then(data => {
      this.setActiveMessage('MdNote saved');
    })
    .catch(error => {
      console.log('Fail Saving')
    });
  };
  saveAndClose(){
    this.saveFunction();
  }
  //CLOSE NOTE WITHOUT SAVING:
  closeEdit(){
    this.editMode = false;
    this.previewActive = true;
    document.getElementById('md-note-view').classList.remove('active-preview');
  }

  toggleEditClass(){
    document.getElementById('md-note-view').classList.toggle('active-preview');
  }

  togglePinned(){
    this.mdNote.pinned = !this.mdNote.pinned;
    if(this.mdNote.pinned){
      this.setActiveMessage('MdNote pinned');
    } else {
      this.setActiveMessage('MdNote removed from pinned');
    }
    this.mdNotesService.pin(this.mdNote._id, this.mdNote.pinned)
    .then((note)=> {
    })
    .catch(error =>{
      console.error(error)
    })
  }

}
