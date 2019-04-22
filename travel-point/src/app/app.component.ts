import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traveler';
  user: any;
  dateNow = Date.now();

  constructor(private authService:AuthService, private router:Router){}

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      let jsonResponse:any = profile;
      this.user = jsonResponse;
    })

  }

openNav(){
  let x = window.matchMedia("(max-width: 900px)");
  let y = window.matchMedia("(max-width: 600px)");

  if(x.matches){
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("toggle_fade").style.display="block";
  } 
  if(y.matches){
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("toggle_fade").style.display="block";

  } else{
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("toggle_fade").style.display="block";
  }

  
}

closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("toggle_fade").style.display="none";
}

onLogOutClick(){
  this.authService.logout();
  this.router.navigate(['user/login']);
  this.closeNav();
  return false;
}

}
