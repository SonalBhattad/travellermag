import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { RegisterComponent } from './register/register.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { BidiModule } from '@angular/cdk/bidi';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { MagzinelistComponent } from './employee/magzinelist/magzinelist.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { BilingComponent } from './customer/biling/biling.component';
import { AccountComponent } from './customer/account/account.component';
import { StoreComponent } from './customer/store/store.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CampaignsComponent } from './employee/campaigns/campaigns.component';
import { ArtistComponent } from './artist/artist.component';
//mport { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { DraftsComponent } from './artist/drafts/drafts.component';
import { EditorComponent } from './artist/editor/editor.component';
import { PublishedComponent } from './artist/published/published.component';
import { TodoComponent } from './artist/todo/todo.component';
import { AngularFireModule } from '@angular/fire';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewComponent } from './customer/view/view.component';
//import { StepperComponent } from './stepper/stepper.component';






@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterformComponent,
    EmployeeComponent,
    CustomerComponent,
    CampaignsComponent,
    EmployeelistComponent,
    MagzinelistComponent,
    BilingComponent,
    AccountComponent,
    StoreComponent,
    ArtistComponent,
    DraftsComponent,
    EditorComponent,
    PublishedComponent,
    TodoComponent,
    ViewComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    BidiModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA6udjfyzSagLVH2KJZOd5Qfvoja9bcHWI",
      authDomain: "todo-790e1.firebaseapp.com",
      projectId: "todo-790e1",
      storageBucket: "todo-790e1.appspot.com",
      messagingSenderId: "125185098851",
      appId: "1:125185098851:web:e280b4177b3a1caa236456",
      measurementId: "G-2BXL9T2KXR"
      }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
