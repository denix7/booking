import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private geoCoder;

  constructor() { }

  public geoCodeLocation(location:string): Observable<any>{
    // console.log(location);
    this.geoCoder = new (<any>window).google.maps.Geocoder();
    
    return new Observable((observer)=> {
      this.geoCoder.geocode({address: location}, (result, status) => {
        console.log(result);
        console.log(status);
        // console.log(location);
        if(status === 'OK'){
          const geometry = result[0].geometry.location;
          console.warn(geometry.lat(), geometry.lng())
          observer.next({lat: geometry.lat(), lng: geometry.lng()});
        }else{
          observer.error('Location could not be geocoded');
        }
      });
    });
  }
}
