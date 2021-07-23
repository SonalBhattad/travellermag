import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularEditorModule } from '@kolkov/angular-editor';
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
import { CustomerComponent } from './customer/customer.component';
import { MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BidiModule } from '@angular/cdk/bidi';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EmployeeComponent } from './employee/employee.component';
import { ArtistComponent } from './artist/artist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TodoComponent } from './artist/todo/todo.component'
import { PublishedComponent } from './artist/published/published.component'; 
import { MatTableModule } from '@angular/material/table';
import { EditorComponent } from './artist/editor/editor.component'; 
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire';
import { ChartsComponent } from './artist/charts/charts.component';
import { DraftsComponent } from './artist/drafts/drafts.component';
import { ChartModule } from 'angular-highcharts';
import { MatBadgeModule } from '@angular/material/badge';
import { AccountComponent } from './customer/account/account.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StoreComponent } from './customer/store/store.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { MagazinelistComponent } from './employee/magazinelist/magazinelist.component';
import { CartComponent } from './customer/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterformComponent,
    CustomerComponent,
    EmployeeComponent,
    ArtistComponent,
    TodoComponent,
    PublishedComponent,
    EditorComponent,
    ChartsComponent,
    DraftsComponent,
    AccountComponent,
    StoreComponent,
    EmployeelistComponent,
    MagazinelistComponent,
    CartComponent
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
    MatListModule,
    MatSidenavModule,
    BidiModule,
    AngularEditorModule,
    DragDropModule,
    ChartModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    AngularFirestoreModule,
    MatStepperModule,
    MatSnackBarModule,
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
  bootstrap: [AppComponent],
})
export class AppModule { }