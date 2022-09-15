import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { InfoCharacterComponent } from './info-character/info-character.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'characters/:id', component: InfoCharacterComponent },
  { path: 'add', component: AddCharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
