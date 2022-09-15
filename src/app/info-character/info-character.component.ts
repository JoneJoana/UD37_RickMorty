import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../models/characters.model';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {

  message = '';
  character: Character = {};
  id: any;
  constructor(private _router: Router,private _route: ActivatedRoute,private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.rickMortyService.getCharacterByID(this.id).subscribe(
      (response) => {
        this.character = response;
      },
      (error) => {
        console.log('Error al cargar datos');
      }
    );
  }

  onBack(): void{
    this._router.navigate(['/characters']);
  }

  updateCharacter():void{
    this.message = '';

    this.rickMortyService.update(this.id,this.character)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message: 'updated succesfully'
        },
        (error) => {
          console.log(error+' updateCharacter');
        }
      );
  }

  deleteCharacter(){
    this.rickMortyService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this._router.navigate(['/characters']);
        },
        error =>{
          console.log(error+' deleteCharacter');
        }
      )
  }



}
