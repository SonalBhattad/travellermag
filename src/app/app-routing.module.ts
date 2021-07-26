import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ChartsComponent } from './artist/charts/charts.component';
import { DraftsComponent } from './artist/drafts/drafts.component';
import { EditorComponent } from './artist/editor/editor.component';
import { PublishedComponent } from './artist/published/published.component';
import { TodoComponent } from './artist/todo/todo.component';
import { CartComponent } from './customer/cart/cart.component';
import { CustomerComponent } from './customer/customer.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { StoreComponent } from './customer/store/store.component';
import { SubscriptionsComponent } from './customer/subscriptions/subscriptions.component';
import { CampaignComponent } from './employee/campaign/campaign.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { MagazinelistComponent } from './employee/magazinelist/magazinelist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterformComponent } from './registerform/registerform.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'customer', component:CustomerComponent,
  children:[
    { path:'feedback', component:FeedbackComponent},
    { path:'store', component:StoreComponent},
    { path:'cart', component:CartComponent},
    { path:'subscriptions', component:SubscriptionsComponent}
  ]},
  {path:'employee', component:EmployeeComponent,
   children:[
   { path:'employees', component:EmployeelistComponent},
    { path:'magazines', component:MagazinelistComponent},
    { path: 'campaigns', component:CampaignComponent}
  ]},
  {path:'artist', component:ArtistComponent,
    children:[
      { path:'', component:ChartsComponent},
      { path:'saved', component:PublishedComponent},
      { path:'editor', component:EditorComponent},
      { path:'todo', component:TodoComponent},
      { path:'drafts', component:DraftsComponent}
    ]},
  {path:'register', component:RegisterComponent},
  {path:'regformCust/:pid', component:RegisterformComponent, data: {user:1}},
  {path:'regformEmp/:pid', component:RegisterformComponent, data: {user:2}},
  {path:'regformArt/:pid', component:RegisterformComponent, data: {user:3}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
