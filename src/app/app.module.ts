import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { HttpClientModule } from '@angular/common/http';
import { InfoCharacterComponent } from './info-character/info-character.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AboutUsComponent,
    InfoCharacterComponent,
    AddCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
