import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Rental } from '../../share/models/rental.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RentalService {

    rentals: Rental[];

  constructor(private http : HttpClient) { }


    getRentals() : Observable<Rental[]>
    {
      return <Observable<Rental[]>>this.http.get('/api/v1/rentals');
    }

    getRentalById(id : string) : Observable<any>
    {
      return this.http.get('/api/v1/rentals/' + id);
    }
}