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


  searchName(): void {
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
