import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ValidateService } from 'src/app/services/validate.service';


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

  constructor(private validateService: ValidateService, private authService: AuthService, private router : Router) { }

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
      window.alert('Please fill in all the fields');
      return false;
    }

    //Validate email
    if(!this.validateService.validateEmail(user.email)){
      window.alert('Please fill in a correct e-mail');
      return false;
    }
    
    //Authenticate user
    this.authService.registerUser(user).subscribe(data => {
      if(data){
        window.alert('Registered successfuly');
        this.router.navigate(['/user/login']);
        
      } else {
        window.alert('Failed to register');
        this.router.navigate(['/user/register']);
        
      }
    });
  }

}
