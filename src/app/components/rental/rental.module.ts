import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//service
import { RentalService } from "./rental.service";

//routing
import { RentalRoutingModule } from "./rental-routing.module";

//components
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalItemComponent,
    RentalDetailComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }