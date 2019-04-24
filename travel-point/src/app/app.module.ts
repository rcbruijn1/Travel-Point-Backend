//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Additional Modules
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


//Components
import { AppComponent } from './app.component';

//Services
import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './services/guards/auth.guard';
import { JourneyComponent } from './journey/journey.component';
import { JourneyFormComponent } from './journey/journey-form/journey-form/journey-form.component';
import { JourneyDetailComponent } from './journey/journey-detail/journey-detail.component';

export function tokenGetter() {
  return localStorage.getItem('acces_token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    JourneyComponent,
    JourneyFormComponent,
    JourneyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({config:{
      tokenGetter: tokenGetter
    }}),
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-full-width",
      preventDuplicates: false
    })
  ],
  providers: [JwtHelperService, AuthService, ValidateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
