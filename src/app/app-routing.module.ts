import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';

import { DraftsComponent } from './artist/drafts/drafts.component';
import { EditorComponent } from './artist/editor/editor.component';
import { PublishedComponent } from './artist/published/published.component';
import { TodoComponent } from './artist/todo/todo.component';
import { AccountComponent } from './customer/account/account.component';
import { BilingComponent } from './customer/biling/biling.component';
import { CustomerComponent } from './customer/customer.component';
import { StoreComponent } from './customer/store/store.component';
import { CampaignsComponent } from './employee/campaigns/campaigns.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { MagzinelistComponent } from './employee/magzinelist/magzinelist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterformComponent } from './registerform/registerform.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'artist', component:ArtistComponent,
  children:[
    
    {path:'drafts',component:DraftsComponent},
    {path:'editor',component:EditorComponent},
    {path:'published',component:PublishedComponent},
    {path:'todo',component:TodoComponent},
  ]},
  {path:'customer', component:CustomerComponent,
  children:[
    {path:'account', component:AccountComponent},
    {path:'biling', component:BilingComponent},
    {path:'store', component:StoreComponent},
  ]},
  {path:'employee', component:EmployeeComponent,
  children:[
    { path:'employeelist', component:EmployeelistComponent},
    {path:'magzinelist', component:MagzinelistComponent},
    {path: 'campaigns', component:CampaignsComponent},
    ]},
  {path:'regformCust/:profile_id', component:RegisterformComponent,data:{user:1}},
  {path:'regformEmp/:profile_id', component:RegisterformComponent,data : {user:2}},
  {path:'regformArt/:profile_id', component:RegisterformComponent,data : {user:3}},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
