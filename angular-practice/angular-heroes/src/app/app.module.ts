import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
