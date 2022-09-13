import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.load8RndomCharacters();
  }

  load8RndomCharacters(){
    this.http.get("https://rickandmortyapi.com/api/character/1,10,28,250,460,556,731,429").subscribe(
      response=>{
        this.characters = response;
      },
      error => {
        console.log("error al cargar datos");
      }
    );
  }

}
