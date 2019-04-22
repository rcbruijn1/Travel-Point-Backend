import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  data: any;
  
  constructor(private authService: AuthService, private router: Router) { }

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
        console.log('logged in')
        this.authService.storeUserData(this.data.token, this.data.user);
        // this.flashMessage.show("Logged in successfuly!", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/']);
      }else{
        window.alert('Please fill in the correct username/password');
        this.router.navigate(['/user/login']);
      }
    })
  }

}
