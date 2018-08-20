import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MdBooksService {

  public mdBooksList = [];
  public currentMdBook: any;

  private mdBooksListChange: Subject<any> = new Subject(); 
  private currentMdBookChange: Subject<any> = new Subject(); 

  mdBooksListChange$: Observable<any> = this.mdBooksListChange.asObservable();
  currentMdBookChange$: Observable<any> = this.currentMdBookChange.asObservable();


  constructor(
    private httpClient : HttpClient,
    private route: ActivatedRoute,
  ) { }
  
  mdBooksURL = 'http://localhost:3000/api/mdbooks';
  mdBooks:any;


  private setMdBooksList(updatedList:any) {
    this.mdBooksList = updatedList;
    this.mdBooksListChange.next(updatedList);
    return updatedList;
  } 

  private setCurrentMdBook(updatedMdBook: any) {
    this.currentMdBook = updatedMdBook;
    this.currentMdBookChange.next(updatedMdBook);
    return updatedMdBook;
  } 


  //UPDATE SERVICE PROPERTY - MDBOOKS ARRAY
  updateMdBooksList(){
    const options = { withCredentials: true };
    return this.httpClient.get(`${this.mdBooksURL}`, options).toPromise()
    .then(books => {
      this.setMdBooksList(books)
    })
    .catch(err => {
      console.error(err);
    });
  }

  updateCurrentMdBook(id){
    const options = { withCredentials: true };
    return this.httpClient.get(`${this.mdBooksURL}/${id}`, options).toPromise()
    .then(book => {
      this.setCurrentMdBook(book);
    })
    .catch(err => {
      console.error(err);
    });
  }

  //GET ALL BOOKS - no data needed;
  getAll(){
    const options = { withCredentials: true };
    return this.httpClient.get(`${this.mdBooksURL}`, options).toPromise()
    .then(() => {
      this.updateMdBooksList();
    })
    .catch(error => {
      console.error(error);
    })
  }

  //GET ONE BOOK - ID: Note - REQ.PARAMS;
  getOne(id){
    const options = { withCredentials: true };
    return this.httpClient.get(`${this.mdBooksURL}/${id}`, options).toPromise()
    .then(book => {
      this.setCurrentMdBook(book)
    })
    .catch(error => {
      console.error(error);
    })
  }

  //CREATE NEW BOOK - DATA: Title - REQ.BODY;
  new(data){
    const options = { withCredentials: true }
    return this.httpClient.post(`${this.mdBooksURL}/new`, data, options).toPromise()
    .then(() => {
      this.updateMdBooksList();
    })
    .catch(error => {
      console.error(error);
    })
  }

  //EDIT BOOK - DATA: Title - REQ.BODY; ID: Book - REQ.PARAMS;
  edit(id, data){
    const options = { withCredentials: true }
    return this.httpClient.put(`${this.mdBooksURL}/${id}`, data, options).toPromise()
    .then(() => {
      this.updateMdBooksList();
    })
    .catch(error => {
      console.error(error);
    })
  }

  //DELETE BOOK - ID: Book - REQ.PARAMS;
  delete(id){
    const options = { withCredentials: true }
    return this.httpClient.delete(`${this.mdBooksURL}/${id}`, options).toPromise()
    .then(() => {
      this.updateMdBooksList();
    })
    .catch(error => {
      console.error(error);
    })
  }

  // GET PINNED NOTE - WITH BOOK ID
  getPinned(){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.mdBooksURL}/pinned`, options).toPromise();
  }
  
}
