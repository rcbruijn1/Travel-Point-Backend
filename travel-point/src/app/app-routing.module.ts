import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { JourneyComponent } from './journey/journey.component';
import { JourneyFormComponent } from './journey/journey-form/journey-form/journey-form.component';
import { JourneyDetailComponent } from './journey/journey-detail/journey-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate:[AuthGuard]},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/register', component: RegisterComponent},
  { path: 'journey', component:JourneyComponent, canActivate:[AuthGuard]},
  { path: 'createJourney/:cityName', component: JourneyFormComponent, canActivate:[AuthGuard] },
  { path: 'journey-detail/:id', component: JourneyDetailComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
