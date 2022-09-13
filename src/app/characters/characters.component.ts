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

  getRndom(){
    return Math.floor(Math.random() * 826+ 1);
  }

  load8RndomCharacters(){
    this.http.get("https://rickandmortyapi.com/api/character/"+
    this.getRndom()+","+this.getRndom()+","+this.getRndom()+","+this.getRndom()+","+this.getRndom()
    +","+this.getRndom()+","+this.getRndom()+","+this.getRndom())
    .subscribe(
      response=>{
        this.characters = response;
      },
      error => {
        console.log("error al cargar datos");
      }
    );
  }

}
