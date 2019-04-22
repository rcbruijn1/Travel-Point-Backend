import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.email == undefined || user.username == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateForm(new_journey){
    if (new_journey.name == undefined || new_journey.departure_date == undefined || new_journey.return_date == undefined || new_journey.description == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
