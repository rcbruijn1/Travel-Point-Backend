import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService, private router : Router){
    
  }

  // canActivate(){
  //   if(this.authService.loggedIn() == false){
  //     this.router.navigate(['/']);
  //     return true
      
  //   }else{
  //     this.router.navigate(['/user/login']);
  //     return false;
  //   }
  // }

  canActivate(): boolean {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['user/login']);
      return false;
    }
    return true;
  }
}
