import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class RentalModule { }
