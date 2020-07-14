import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

//components
import { AppComponent } from './app.component';
import { NavComponent } from './share/components/nav/nav.component';

//routing
import { AppRoutingModule } from "./app-routing.module";
import { RentalModule } from './components/rental/rental.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
