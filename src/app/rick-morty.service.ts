import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE = "https://rickandmortyapi.com/api/";
const NUM_CHARACTERS = 8;

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  get8RndomCharacters(){
    return this.http.get(BASE+"character/"+
      getRndom().join());
  }

  getCharacterByID(id: any){
    return this.http.get(BASE+"character/"+id);
  }

}

function getRndom(){
  let randoms = [];
  for(let i=0;i<NUM_CHARACTERS;i++){
    randoms.push(Math.floor(Math.random() * 826+ 1))
  }
  return randoms;
}


