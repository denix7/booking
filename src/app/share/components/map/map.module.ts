import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from "../map/map.component";

@NgModule({
  declarations: [
    MapComponent
],
exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIgQFvMRk4Q2fz7po3hZ7RY4WsGnTP20c'
    })
  ],
  providers: [],
  bootstrap: []
})
export class MapModule { }