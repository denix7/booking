import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { Rental } from "../../../share/models/rental.model";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals : Rental[];

  constructor(private rentalSerivce:RentalService) { }

  ngOnInit(): void {
    const rentalObservable = this.rentalSerivce.getRentals();

    rentalObservable.subscribe((rentals) => {
      this.rentals = rentals;
    }),
    (err) => {
    },
    () => {
    }
  }
}