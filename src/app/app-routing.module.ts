import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import CustomerComponent from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterformComponent } from './registerform/registerform.component';
//import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'regformCust/:profile_id', component:RegisterformComponent, data:{user: 1}},
  {path:'regformEmp/:profile_id', component:RegisterformComponent, data:{user:2}},
  {path:'regformArt/:profile_id', component:RegisterformComponent, data:{user:3}},
  {path:'customer', component:CustomerComponent},
  {path:'artist', component:ArtistComponent},
  {path:'employee', component:EmployeeComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
