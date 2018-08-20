import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  public user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.API_URL;
 
  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(
    private httpClient: HttpClient, 
    private router: Router
  ) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  login(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/login`, user, options)
      .toPromise()
      .then((data) => {this.setUser(data)})
  }

  signup(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/logout`, null, options)
      .toPromise()
      .then(() => this.setUser());
  }

  getUser(): any {
    return this.user;
  }

  updateData(data){
    const options = {
      withCredentials: true
    };
    
    return this.httpClient.put(`${this.API_URL}/edit`, data, options).toPromise()
    .then((user)=>{
      this.setUser(user);
    })
    .catch(error => { 
      console.log(error)
    });
  }

}
