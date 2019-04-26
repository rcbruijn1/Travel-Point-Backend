
import { Injectable } from '@angular/core';
import { HttpHandler, HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  baseurl: string = 'http://localhost:3000/';
  journey: any;

  constructor(private _http: HttpClient) { }

  getJourneys() {
    return this._http.get('api/v1/journeys')
    .pipe(map(((res:Response) => res)));
  }

  getJourneyById(id:string){
    return this._http.get('api/v1/journeys' + '/' + id)
    .pipe(map(((res:Response) => res)));
  }

  deleteJourney(journeyId:string){
    console.log(journeyId);
    return this._http.delete('api/v1/journeys' + '/' + journeyId)
    .pipe(map(((res:any) => res)));
  }

  deleteLocation(id:string, journeyId:string){
    console.log(journeyId);
    return this._http.delete('api/v1/city-locations/' + id + '&'+ journeyId)
    .pipe(map(((res:any) => res)));
  }

  updateJourney(id:string, update){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put('api/v1/journeys/update/' + id, update, {headers: headers})
    .pipe(map(((res:Response) => res)));

  }

  addJourney(journey){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('api/v1/journeys', journey, {headers: headers})
    .pipe(map(((res:Response) => res)));
  }

  addJourneyToUser(journey, id:string){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put('api/v1/journeys/user' + '/' + id, journey, {headers: headers})
    .pipe(map(((res:Response) => res)));
   }

   addLocationToJourney(location, journey){
    let journeyId = journey._id;
    console.log(journeyId);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post('api/v1/journeys/location' + '/' + journeyId, location, {headers: headers})
    .pipe(map(((res:Response) => res)));
   }
  }
