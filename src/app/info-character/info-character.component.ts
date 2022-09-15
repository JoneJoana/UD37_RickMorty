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

  character: any = '';

  constructor(private _router: Router,private _route: ActivatedRoute,private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.rickMortyService.getCharacterByID(id).subscribe(
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

}
