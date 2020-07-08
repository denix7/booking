import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.css']
})
export class RentalItemComponent implements OnInit {

  @Input() rental:any;
  constructor() { }

  ngOnInit(): void {
  }

}
