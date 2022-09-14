import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.css']
})
export class InfoCharacterComponent implements OnInit {

  @Input() character: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
   }

}
