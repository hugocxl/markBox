import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdBooksService } from './md-books.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MdNotesService {

  private titleChange: Subject<any> = new Subject();
  titleChange$: Observable<any> = this.titleChange.asObservable();
  mdNote:any;
  title:any;
  constructor(
    private httpClient: HttpClient,
    private mdBooksService: MdBooksService
  ) { }
  
  mdNoteURL = 'http://localhost:3000/api/mdnotes';
  mdBooksURL = 'http://localhost:3000/api/mdbooks';

  private setTitle(title){
    this.title = title;
    this.titleChange.next(title);
    return title;
  }
  getTitle(): any {
    return this.title;
  }
  //GET ONE NOTE - ID: Note - REQ.PARAMS;
  getOne(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.mdNoteURL}/${id}`, options).toPromise()
  }

  //EDIT NOTE - ID: Note - REQ.PARAMS; { title, content } = req.body;
  edit(id, data){
    const options = {
      withCredentials: true
    };
    this.setTitle(data.title);
    return this.httpClient.put(`${this.mdNoteURL}/${id}`, data, options).toPromise()
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
