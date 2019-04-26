import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JourneyService } from 'src/app/services/journey.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CityService } from 'src/app/services/city.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-journey-detail',
  templateUrl: './journey-detail.component.html',
  styleUrls: ['./journey-detail.component.css']
})
export class JourneyDetailComponent implements OnInit {
  private sub: any;
  journeyId: string;
  activeJourney: any;
  locations: any;
  edit = false;
  delete = false;
  closeResult: string;
  activeLocation: any;

  journey_description: string;
  confirm_string: string;

  constructor(private router:Router, private currentRoute: ActivatedRoute, private journeyService:JourneyService, private modalService: NgbModal, private cityService:CityService, private toastr:ToastrService) { }

  ngOnInit() {
    this.sub = this.currentRoute.params.subscribe(
      params => {
        this.journeyId = params.id;
      })
      console.log(this.journeyId);

      this.journeyService.getJourneyById(this.journeyId).subscribe(res =>{
        let jsonResponse = res;
        this.activeJourney = jsonResponse;
        this.locations = this.activeJourney.locations;
        console.log(this.activeJourney);
      })
  }

  toggleEdit(){
    this.edit = true;
  }

  toggleDelete(){
    this.delete = true;
  }

  update(){
    let update = {
      description : this.journey_description
    }

    this.journeyService.updateJourney(this.journeyId, update).subscribe(res =>{
      console.log(res);
      this.edit = false;
      this.ngOnInit();
    })
  }

  deleteJourney(){
    if(this.confirm_string === this.activeJourney.name){
      this.journeyService.deleteJourney(this.activeJourney._id).subscribe(res =>{
        console.log(res);
      });
      this.toastr.success('Journey deleted successfully', 'Successfully',{
        easing: 'ease-in', easeTime: 300});
        this.router.navigate(['/']);
    }else{
      this.toastr.warning('Please fill in the correct journey name to confirm deleting this journey', 'Invalid',{
        easing: 'ease-in', easeTime: 300});
    }
   
  }

  deleteLocation(i, f:string){
    this.journeyService.deleteLocation(f, this.journeyId).subscribe(journey =>{
      console.log(journey + 'deleted');
    })
    this.locations.splice(i, 1);
    console.log(this.locations);
  }

  openVenue( content, f){

    this.activeLocation = f;

    this.modalService.open(content, { centered: true, size: 'sm' }).result.then((result) => {
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
