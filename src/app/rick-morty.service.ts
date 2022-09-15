import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './models/characters.model';

const BASE = "https://db-rick-morty.herokuapp.com/characters";


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]>{
    return this.http.get<Character[]>(BASE);
  }

  getCharacterByID(id: any): Observable<Character>{
    return this.http.get<Character>(`${BASE}/${id}`);
  }

  create(data: any): Observable<any>{
    return this.http.post(BASE,data);
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(`${BASE}/${id}`,data);
  }

  delete(id:number): Observable<any>{
    return this.http.delete(`${BASE}/${id}`);
  }

  /* deleteAll(): Observable<any>{
    return this.http.delete(BASE);
  } */

  findByName(name: string): Observable<Character[]>{
    return this.http.get<Character[]>(`${BASE}?name=${name}`);
  }

}

