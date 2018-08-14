import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MdBooksService {

  constructor(
    private httpClient : HttpClient
  ) { }

  mdBooksURL = 'http://localhost:3000/api/mdbooks';

  //GET ALL BOOKS - no data needed;
  getAll(){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.get(`${this.mdBooksURL}`, options).toPromise()
  };

  //CREATE NEW BOOK - DATA: Title - REQ.BODY;
  new(data){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.post(`${this.mdBooksURL}/new`, data, options).toPromise();
  }

  //EDIT BOOK - DATA: Title - REQ.BODY; ID: Book - REQ.PARAMS;
  edit(id, data){
    const options = {
      withCredentials: true
    }
    return this.httpClient.put(`${this.mdBooksURL}/${id}`, data, options).toPromise();
  };

  //DELETE BOOK - ID: Book - REQ.PARAMS;
  delete(id){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.delete(`${this.mdBooksURL}/${id}`, options).toPromise();
  }
  
}
  
