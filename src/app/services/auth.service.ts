import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://jmm-spring-api-h2-angular.herokuapp.com/'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  user:any = null;

  login(username: string,password: string): Observable<any>{
    this.user = {
      "username": username,
      "password": password
    };
    return this.http.post(API_URL+'login', JSON.stringify(this.user), { headers: { 'Content-Type': 'application/json'}});
  }

  findRole(username: string): Observable<any> {
    return this.http.get(API_URL + "users/" + username);
  }

  register(username: string,password: string): Observable<any>{
    return this.http.post(API_URL+'users',{
      username,password
    });
  }
}
