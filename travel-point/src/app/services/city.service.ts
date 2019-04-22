import { Injectable } from '@angular/core';
import { HttpHandler, HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  baseUrl = 'http://localhost:3000/api/v1/cities';
  city: any;
  location: any;
  extUrl = 'https://api.foursquare.com/v2/venues/explore?client_id=NQQ0UUXTCYP1F5K4OMR2XDNY0XV13LQKB231H2KMRUUV3C0F&client_secret=N2PCHUU0PLKSDMPF4V55VC2VZZEDZFBGZBNYEP3ZUE1CNQQD&v=20180323&locale=en&near='

  constructor(private _http: HttpClient) {

   }

   getFourSquareCity(searchText:string){
    return this._http.get(this.extUrl + searchText)
    .pipe(map(((res:Response) => res)));
  }

  getFourSquareLocations(cityName){
    return this._http.get(this.extUrl + cityName)
    .pipe(map(res=> res));
  }

  getFourSquareVenue(venueId:string){
    return this._http.get('https://api.foursquare.com/v2/venues/' + venueId + '?client_id=NQQ0UUXTCYP1F5K4OMR2XDNY0XV13LQKB231H2KMRUUV3C0F&client_secret=N2PCHUU0PLKSDMPF4V55VC2VZZEDZFBGZBNYEP3ZUE1CNQQD&v=20180323')
    .pipe(map(res=> res));
  }
  }
