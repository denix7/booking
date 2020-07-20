import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgPipesModule} from 'ngx-pipes';

//service
import { RentalService } from "./rental.service";

//routing
import { RentalRoutingModule } from "./rental-routing.module";

//components
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

//pipe
import { UppercasePipe } from "../../share/pipes/uppercase.pipe";

//modules
import { MapModule } from "../../share/components/map/map.module";

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalItemComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    NgPipesModule,
    MapModule
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule { }