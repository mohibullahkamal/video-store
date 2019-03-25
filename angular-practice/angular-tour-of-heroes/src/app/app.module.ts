import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { CarsComponent } from './cars/cars.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    CarsComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
