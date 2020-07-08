import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './share/components/nav/nav.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';

//routing
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
