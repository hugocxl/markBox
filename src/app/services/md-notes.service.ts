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

  //EDIT NOTE - ID: Note - REQ.PARAMS; { title, content } = req.body;
  edit(id, data){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.mdNoteURL}/${id}`, data, options).toPromise();
  }

  pin(id, status){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.mdNoteURL}/${id}/pin`, status, options).toPromise();  
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
