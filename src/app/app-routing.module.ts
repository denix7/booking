import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './share/components/nav/nav.component';
import { RentalListComponent } from './components/rental/rental-list/rental-list.component';
import { RentalComponent } from './components/rental/rental.component';

const routes : Routes = [
    {path : '', redirectTo: 'rentals', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }