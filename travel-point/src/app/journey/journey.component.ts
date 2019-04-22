import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  searchText: string;
  closeResult: string;
  foundCity: any;
  toggled = false;
  foundLocations: any;
  activeVenue: any;
  storedLocations: [];
  checkedLocation: any;

  constructor(private cityService:CityService, private modalService: NgbModal) { }

  ngOnInit() {
  }


  onJourneySubmit(){
    
  }

  searchCity(){
    console.log(this.searchText);
    this.cityService.getFourSquareCity(this.searchText).subscribe(res =>{
      let jsonResponse:any = res;
      this.foundCity = jsonResponse.response;
      document.getElementById("input").blur();
      console.log(this.foundCity);   
  })
}

getLocations(){
  this.cityService.getFourSquareLocations(this.foundCity.headerLocation).subscribe(res => {
    let jsonResponse:any = res;
    this.foundLocations = jsonResponse.response.groups[0].items;
    console.log(this.foundLocations);
  })
}

toggle(){
  this.toggled = true;
}

untoggle(){
  this.toggled = false;
}

openVenue( content,venueId){
  this.cityService.getFourSquareVenue(venueId).subscribe(res => {
    let jsonResponse:any = res;
    this.activeVenue = jsonResponse.response.venue;
    console.log(this.activeVenue);
  })
  this.modalService.open(content, { centered: true }).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
