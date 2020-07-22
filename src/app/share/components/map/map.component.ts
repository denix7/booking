import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  @Input() location : string;
  lat = "";
  lng = "";
  
  constructor(private mapService : MapService) {
    console.warn(this.location)
   }
  
  ngOnInit() {
    this.mapReadyHandler();
  }

  mapReadyHandler(){
    setTimeout(() => {
      this.mapService.geoCodeLocation(this.location).subscribe((coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      });
    }, 1000);
  }
}
