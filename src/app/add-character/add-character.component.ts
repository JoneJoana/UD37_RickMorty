import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../models/characters.model';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  newCharacter: Character = {}

  constructor(private _router: Router, private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
  }

  onBack(): void{
    this._router.navigate(['/characters']);
  }

  save(): void{
    const data = {
      id: this.newCharacter.id,
      name: this.newCharacter.name,
      status: this.newCharacter.status,
      species: this.newCharacter.species,
      gender: this.newCharacter.gender,
      origin: this.newCharacter.origin,
      location: this.newCharacter.location
    }
    this.rickMortyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          alert('Personaje guardado')
          this._router.navigate(['/characters']);
        },error =>{
          console.log(error+' save() NewCharacter')
        }
      );

  }
}
