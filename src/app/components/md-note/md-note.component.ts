import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MdNotesService } from '../../services/md-notes.service';
import { ActivatedRoute } from '@angular/router';
import { AppSettingsService } from '../../services/app-settings.service'
import { FilesaverService } from '../../services/filesaver.service';

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
  
  settings = {
    editView: false,
    htmlView: false,
    autoSave: false,
    preview: false
  };

  // editMode = false;
  // autoSaveMode = false;
  // previewActive = true;
  
  // id: number;

  constructor(  
    private mdNotesService: MdNotesService,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private el: ElementRef,
    private appSettingsService: AppSettingsService,
    private filesaverService: FilesaverService
  ) { }



  //INIT: BIND SELECTED NOTE TO COMPONENT PROPERTIES THROUGH PARAMS SUB.
  ngOnInit(){
    this.route.params.subscribe((val) => {
      
      this.settings = { ...this.appSettingsService.settings};  
      document.getElementById('md-note-view').classList.remove('active-preview');

      this.getNote(val);
    });
  }

  //GET NOTE FUNCTION:
  getNote(val) {
    this.mdNotesService.getOne(val.id)
      .then(note => {
        this.mdNewnote = note
        this.mdNote = this.mdNewnote;
        this.markdown = this.mdNote.content;
      })
      .catch(err => {
        console.error(err);
      });
  }

  //EDIT MODE CONTROL:
  editModeIO(){
    this.setActiveMessage('Edit mode enabled');
    this.settings.editView = !this.settings.editView;
    this.settings.htmlView = !this.settings.htmlView;
  };


  activatePreview(){
    this.settings.preview = !this.settings.preview;
    if(this.settings.preview){
      this.setActiveMessage('Preview enabled');
    } else {
      this.setActiveMessage('Preview disabled');
    }
    this.toggleEditClass();
  };
  // AUTOSAVE MODE MANAGEMENT:
  activateAutoSave(){
    this.settings.autoSave = !this.settings.autoSave;
    if(this.settings.autoSave){
      this.setActiveMessage('Autosave mode enabled');
    } else {
      this.setActiveMessage('Autosave mode disabled');
    }
  }
  autoSave(){
    if(this.settings.autoSave) { 
      this.saveFunction() 
    }
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
      this.setActiveMessage('MdNote saved!');
    })
    .catch(error => {
      console.log('Fail Saving')
    });
  };
  //CLOSE NOTE WITHOUT SAVING:
  closeEdit(){
    this.settings.editView = !this.settings.editView
    this.settings.htmlView = !this.settings.htmlView 
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

  exportFile(){
    this.filesaverService.onTestSaveFile(this.markdown, this.mdNote.title);
  }



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

}