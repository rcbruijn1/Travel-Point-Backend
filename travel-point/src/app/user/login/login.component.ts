import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  data: any;

  
  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService) { }



  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }


    this.authService.authenticateUser(user).subscribe(data => {
      this.data = data;          
      if(this.data.success){
        console.log(data);
        this.toastr.success('Logged in successfully!', 'Logged in', {
         easing: 'ease-in', easeTime: 300});
        this.authService.storeUserData(this.data.token, this.data.user);
        this.router.navigate(['/']);
      }else{
        this.toastr.error('Something went wrong!', 'Login failed', {
          easing: 'ease-in', easeTime: 300});
        this.router.navigate(['/user/login']);
      }
    })
  }

}
