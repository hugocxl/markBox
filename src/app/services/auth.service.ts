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
    return this.httpClient.get(`${this.API_URL}/auth/me`, options)
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
    return this.httpClient.post(`${this.API_URL}/auth/login`, user, options)
      .toPromise()
      .then((data) => {this.setUser(data)})
  }

  signup(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/logout`, null, options)
      .toPromise()
      .then(() => this.router.navigate(['/login']))
      .then(() => this.setUser())
      .catch(err => {
        console.error(err);
      });
  }

  getUser(): any {
    return this.user;
  }

  updateData(data){
    const options = {
      withCredentials: true
    };
    
    return this.httpClient.put(`${this.API_URL}/auth/edit`, data, options).toPromise()
    .then((user)=>{
      // console.log('AUTH SERVICE:', user)
      this.setUser(user);
      // console.log('USER IN AUTH', this.getUser())

    })
    .catch(error => { 
      console.log(error)
    });
  }

}
