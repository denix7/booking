import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals : any[];

  constructor(private rentalSerivce:RentalService) { }

  ngOnInit(): void {
    //this.rentals = this.rentalSerivce.getRentals();
    debugger;
    const rentalObservable = this.rentalSerivce.getRentals();

    debugger;
    rentalObservable.subscribe((rentals) => {
      debugger;
      this.rentals = rentals;
    }),
    (err) => {
      debugger;
    },
    () => {
      debugger;
    }
  }
}
