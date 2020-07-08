import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './share/components/nav/nav.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
