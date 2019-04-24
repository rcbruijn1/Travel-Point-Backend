import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService, private authService: AuthService, private router : Router, private toastr:ToastrService) { }

  ngOnInit() {
  }


  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    console.log(user);
    
    //Validate fields
    if(!this.validateService.validateRegister(user)){
      this.toastr.warning('Please fill in all the fields.', 'Invalid', {
         easing: 'ease-in', easeTime: 300});
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.email)){
      this.toastr.warning('Please fill a correct e-mail.', 'Invalid', {
         easing: 'ease-in', easeTime: 300});
      return false;
    }
    
    //Authenticate user
    this.authService.registerUser(user).subscribe(data => {
      if(data){
        this.toastr.success('You have registered successfully!.', 'Registered', {
           easing: 'ease-in', easeTime: 300});
        this.router.navigate(['/user/login']);
        
      } else {
        this.toastr.error('Failed to register', 'Failed', {
          easing: 'ease-in', easeTime: 300});
        this.router.navigate(['/user/register']);
        
      }
    });
  }

}
