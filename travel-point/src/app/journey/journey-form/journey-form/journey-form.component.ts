import { Component, OnInit } from '@angular/core';
import { JourneyService } from 'src/app/services/journey.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ValidateService } from 'src/app/services/validate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-journey-form',
  templateUrl: './journey-form.component.html',
  styleUrls: ['./journey-form.component.css']
})
export class JourneyFormComponent implements OnInit {
  journeys: any;
  user_id: any;
  currentJourney: any;
  currentCity: string;
  foundLocations: any;
  activeVenue : any;
  private sub: any;
  toggled = false;
  closeResult: string;

  journey_name: string;
  journey_departure_date: Date;
  journey_return_date: Date;
  journey_description: string;

  constructor(private cityService:CityService,private journeyService: JourneyService, private authService: AuthService,
     private currentRoute: ActivatedRoute, private modalService: NgbModal, private validateService:ValidateService, private toastr:ToastrService) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      let jsonResponse:any = profile;
      this.user_id = jsonResponse._id;
      console.log(this.user_id);
    })

    this.sub = this.currentRoute.params.subscribe(
      params => {
        this.currentCity = params.cityName;
      }
    )
    console.log(this.currentCity);

    this.cityService.getFourSquareLocations(this.currentCity).subscribe(res => {
      let jsonResponse:any = res;
      this.foundLocations = jsonResponse.response.groups[0].items;
      console.log(this.foundLocations);
    })
  }

  delete(i,f){

    

    }

  toggle(){
    this.toggled = true;
  }
  
  untoggle(){
    this.toggled = false;
  }

  onJourneySubmit() {
    let new_journey = {
      name: this.journey_name,
      departure_date: this.journey_departure_date,
      return_date: this.journey_return_date,
      description: this.journey_description,
      city: this.currentCity
    }

       //Validate fields
       if(!this.validateService.validateForm(new_journey)){
        this.toastr.warning('Please fill in all the fields', 'Invalid',{
          easing: 'ease-in', easeTime: 300});
        return false;
      }

    let id = this.user_id;

    this.journeyService.addJourney(new_journey).subscribe(journey => {
      if (journey) {
        this.currentJourney = journey;
        this.journeyService.addJourneyToUser(journey, id).subscribe(user => {
          if(user){
            this.authService.getProfile().subscribe(profile => {
              this.toastr.success('Created your journey!', 'Success',{
                easing: 'ease-in', easeTime: 300});
            })
              //clear Form
              this.journey_name = '';
              this.journey_departure_date = new Date();
              this.journey_return_date = new Date();
              this.journey_description = '';

              this.toggle();
          }
          else {
            this.untoggle();
            this.toastr.error('Failed to create journey', 'Failed',{
              easing: 'ease-in', easeTime: 300});
            // this.flashMessage.show("Failed to add!", {cssClass: 'alert-danger', timeout: 3000});
          }
        });

} 

    });
  }

  addLocation(i,f){

    this.cityService.getFourSquareVenue(f.id).subscribe(res =>{
      let jsonResponse:any = res;
      console.log(jsonResponse);

      let newLocation = {
        name: jsonResponse.response.venue.name,
        address: jsonResponse.response.venue.location.address,
        category: jsonResponse.response.venue.categories[0].name,
        description: jsonResponse.response.venue.description,
        imagePath: jsonResponse.response.venue.bestPhoto.prefix + '300x500' + jsonResponse.response.venue.bestPhoto.suffix
  
      }
      if(newLocation.description == undefined){
        newLocation.description = 'No description'
      }
      // console.log(newLocation);
      // console.log(this.currentJourney);
      this.journeyService.addLocationToJourney(newLocation, this.currentJourney).subscribe(res =>{
        if(res){
          this.toastr.success('Location added to your journey!', 'Success',{
            easing: 'ease-in', easeTime: 300});
        } else {
          this.toastr.error('Failed to add location!', 'Failed',{
            easing: 'ease-in', easeTime: 300});
        }
      });
    })

    this.foundLocations.splice(i, 1);
    console.log(this.foundLocations);
  }

  confirmed(){
    this.toastr.success('Your journey is created successfully!', 'Success',{
      easing: 'ease-in', easeTime: 300});
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
