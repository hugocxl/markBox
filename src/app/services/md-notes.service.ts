import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MdNotesService {

  constructor(
    private httpClient : HttpClient
  ) { }
  
  mdNoteURL = 'http://localhost:3000/api/mdnotes';

  getOne(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.mdNoteURL}/${id}`, options).toPromise()
  }

  edit(id, data){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.mdNoteURL}/${id}`, data, options).toPromise()
  }

  delete(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.mdNoteURL}/${id}`, options).toPromise()
  }
  
}
