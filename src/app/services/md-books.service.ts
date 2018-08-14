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

  getAll(){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.get(`${this.mdBooksURL}`, options).toPromise()
  };


  new(data){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.post(`${this.mdBooksURL}/new`, data, options).toPromise();
  }

  edit(id, data){
    const options = {
      withCredentials: true
    }
    return this.httpClient.put(`${this.mdBooksURL}/${id}`, data, options).toPromise();
  };

  delete(id){
    const options = {
      withCredentials: true,
    }
    return this.httpClient.delete(`${this.mdBooksURL}/${id}`, options).toPromise();
  }
  
}
  




// delete(id)