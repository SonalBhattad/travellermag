import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { DraftsComponent } from './artist/drafts/drafts.component';
import { EditorComponent } from './artist/editor/editor.component';
import { PublishComponent } from './artist/publish/publish.component';
import { TodoComponent } from './artist/todo/todo.component';

import { AccountComponent } from './customer/account/account.component';

import CustomerComponent from './customer/customer.component';
import { StoreComponent } from './customer/store/store.component';
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
  {path:'customer', component:CustomerComponent,
  children:[
    {path:'account', component:AccountComponent},
    {path:'store', component:StoreComponent},

  ]},
  {path:'artist', component:ArtistComponent,
  children:[
    {path:'editor', component:EditorComponent},
    {path:'publish', component:PublishComponent},
    {path:'todo', component:TodoComponent},
    {path:'drafts', component:DraftsComponent},

  ]},
  {path:'employee', component:EmployeeComponent},
  {path:'todo', component:TodoComponent},  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
