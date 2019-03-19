import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PaintComponent } from './paint/paint.component';
import { MileageComponent } from './mileage/mileage.component';
import { TiresComponent } from './tires/tires.component';
import { PassengerComponent } from './passenger/passenger.component';
import { RentDateComponent } from './rent-date/rent-date.component';
import { TestDriveComponent } from './test-drive/test-drive.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VehicleComponent,
    AccessoriesComponent,
    PaintComponent,
    MileageComponent,
    TiresComponent,
    PassengerComponent,
    RentDateComponent,
    TestDriveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
