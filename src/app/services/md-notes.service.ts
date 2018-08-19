import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MdNotesService {
    
  mdNote:any;
  
  
  constructor(
    private httpClient: HttpClient,
  ) { }
  
  mdNoteURL = 'http://localhost:3000/api/mdnotes';
  mdBooksURL = 'http://localhost:3000/api/mdbooks';

  //GET ONE NOTE - ID: Note - REQ.PARAMS;
  getOne(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.mdNoteURL}/${id}`, options).toPromise();
  }
  // Get 6 latest updated notes
  getLatest(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.mdNoteURL}/latest`, options).toPromise();
  }
  //EDIT NOTE - ID: Note - REQ.PARAMS; { title, content } = req.body;
  edit(id, data){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.mdNoteURL}/${id}`, data, options).toPromise();
  }
  editNewTitle(id, data){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.mdNoteURL}/${id}/title`, data, options).toPromise();
  }
  pin(id, status){
    const options = {
      withCredentials: true
    };
    const pinned = { status };
    return this.httpClient.put(`${this.mdNoteURL}/${id}/pin`, pinned, options).toPromise() 
  }

  //DELETE NOTE - ID: Note - REQ.PARAMS;
  delete(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.mdNoteURL}/${id}`, options).toPromise()
  }

  //CREATE NEW NOTE - ID: Book - REQ.PARAMS, DATA: const { title, content } = req.body;
  new(data, id){
    const options = {
      withCredentials: true
    }
    return this.httpClient.post(`${this.mdBooksURL}/${id}/new`, data, options).toPromise();
  }
  
}
