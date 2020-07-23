import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private geoCoder;
  private locationCache: any = {};

  constructor(private camelizePipe:CamelizePipe) { }

  private camelize(location : string) : string{
    return this.camelizePipe.transform(location);
  }

  public isLocationCached(location : string) : boolean{
    return this.locationCache[this.camelize(location)];
  }

  public cacheLocation(location:string, coordinates:any){
    const camelizedLocation = this.camelize(location);
    // console.warn('location saved from service to JSON!');
    this.locationCache[camelizedLocation] = coordinates;
  }

  public geoCodeLocation(location:string): Observable<any>{
    this.geoCoder = new (<any>window).google.maps.Geocoder();
    return new Observable((observer)=> {
      if(this.isLocationCached(location)){
        observer.next(this.locationCache[this.camelize(location)]);
        // console.warn('location from cache!');
      }
      else{
        this.geoCoder.geocode({address: location}, (result, status) => {
          if(status === 'OK'){
            const geometry = result[0].geometry.location;
            const coordinates = {lat: geometry.lat(), lng: geometry.lng()};
            
            this.cacheLocation(location, coordinates);
            // console.warn('location from service!')
            observer.next(coordinates);
          }else{
            observer.error('Location could not be geocoded');
          }
        });
      }
    });
  }
}
