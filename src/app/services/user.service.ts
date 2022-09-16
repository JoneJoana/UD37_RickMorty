import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, zipAll } from 'rxjs';

const API_URL = 'https://jmm-spring-api-h2-angular.herokuapp.com/'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL+'users',{ responseType: 'text'})
  }

}
