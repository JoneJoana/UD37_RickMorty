import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: any;

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.loadRndomCharacters();
  }

  getRndom() {
    return Math.floor(Math.random() * 826 + 1);
  }

  loadRndomCharacters() {
    this.rickMortyService.get8RndomCharacters().subscribe(
      (response) => {
        this.characters = response;
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    );
  }
}
