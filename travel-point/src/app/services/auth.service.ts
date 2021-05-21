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
  baseurl: string=  'http://localhost:3000/';


  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  registerUser(user){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('api/v1/user/register', user, {headers: headers})
    .pipe(map((res => res)));
  }

  authenticateUser(user){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('api/v1/user/authenticate', user, {headers: headers})
  }

  getProfile(){
    this.loadToken();
    let headers = new HttpHeaders().set('Content-Type','application/json');
    headers = headers.append('Authorization', this.authToken);
    return this.http.get('api/v1/user/profile', {headers: headers})
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user; 

  }


  public loggedIn(): boolean {
    const token = localStorage.getItem('id_token');
    return !this.jwtHelper.isTokenExpired(token);
  }


  isAdmin(){
    this.user = JSON.parse(localStorage.getItem('user')); 
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
