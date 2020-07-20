import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  
  @Input() location : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
