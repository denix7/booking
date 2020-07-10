import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalItemComponent } from './rental-item/rental-item.component';
import { RentalComponent } from './rental.component';

const routes : Routes = [
    {
        path: 'rentals',
        component: RentalComponent,
        children: [
            {path : '', component : RentalListComponent},
            {path: ':rentalId', component : RentalItemComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RentalRoutingModule { }