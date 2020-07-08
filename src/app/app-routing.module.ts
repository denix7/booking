import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './share/components/nav/nav.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';

const routes : Routes = [
    {
        path: '',
        component: RentalListComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'rental'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }