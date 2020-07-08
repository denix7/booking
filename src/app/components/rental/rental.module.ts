import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//service
import { RentalService } from "./rental.service";

//components
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalItemComponent } from './rental-item/rental-item.component';

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }
