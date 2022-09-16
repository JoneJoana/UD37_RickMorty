import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://jmm-spring-api-h2-angular.herokuapp.com/'
const httpOptions = { //comprobar utilidad
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string,password: string): Observable<any>{
    return this.http.post(API_URL+'login',{
      username,password
    });
  }

  register(username: string,password: string): Observable<any>{
    return this.http.post(API_URL+'users',{
      username,password
    });
  }
}
