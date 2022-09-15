import { Component, OnInit } from '@angular/core';
import { Character } from '../models/characters.model';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters?: Character[];
  currentCharacter: any = { };
  currentIndex = -1;
  name = '';

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickMortyService.getCharacters()
      .subscribe(
        (response) => {
          this.characters = response;
          console.log(response);
        },
        (error) => {
          console.log('Error al cargar datos getCharacters' + error);
        }
      );
  }

  refreshList(): void{
    this.loadCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character,index: number):void{
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  /* removeAllCharacters(): void{
    this.rickMortyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error + 'error removeAll');
        });
  } */

  searchName(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.rickMortyService.findByName(this.name)
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error + 'error searchName')
        }
      );
  }
}
