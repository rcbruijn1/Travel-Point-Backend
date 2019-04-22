import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs/operators";

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;


  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  registerUser(user){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/v1/user/register', user, {headers: headers})
    .pipe(map((res => res))); /// .pipe(map(res => res.json())); aanpassen mocht dit nieuwe code niet functioneren.
  }

  authenticateUser(user){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/v1/user/authenticate', user, {headers: headers})
    // .pipe(map((res:Response) => res.json()));
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders().set('Content-Type','application/json'); // create header object
    headers = headers.append('Authorization', this.authToken); // add a new header, creating a new object
    return this.http.get('http://localhost:3000/api/v1/user/profile', {headers: headers})
    // .pipe(map((res:Response) => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user; 

  }

  // loggedIn(){
  //      console.log(this.jwtHelper.isTokenExpired())
  //     return this.jwtHelper.isTokenExpired();
  // }

  public loggedIn(): boolean {
    const token = localStorage.getItem('id_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


  isAdmin(){
    this.user = JSON.parse(localStorage.getItem('user')); 
    // console.log(this.user.admin);
    if(this.user.admin == true){
      return true;
    } else {
      return false;
    }
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
