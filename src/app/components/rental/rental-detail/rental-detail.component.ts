import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental.service';
import { Rental } from '../../../share/models/rental.model';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  myParam : string;
  rental : Rental;

  constructor(private activatedRoute : ActivatedRoute, 
              private rentalService : RentalService) { }

  ngOnInit(): void {
    this.rental = new Rental();
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.myParam = params.get('rentalId');
    })
    this.getRental(this.myParam);
  }

  getRental(id : string)
  {
    this.rentalService.getRentalById(id).subscribe(
      (rental: Rental) => {
        this.rental = rental['rental'];
        console.warn(this.rental);
    },
      (err) => {
        console.warn(err)
    },
      () => {
          console.warn('completed');
      }
    );
  }
}