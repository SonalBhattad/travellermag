import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { UserServiceService } from '../user-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  hide = true;
  profileid: number=0;
  
  
  user = new User('','','','','','',this.profileid,'');
  message: any;
  

  constructor(private fb: FormBuilder, private service: UserServiceService, public routes: Router, public router: ActivatedRoute) { }

  loginForm = this.fb.group({
    UserName: ['', Validators.required, Validators.minLength(5)]
  });

  saveForm() {
    console.log('Form value ', this.loginForm.value);
  }

  ngOnInit() {

  }





  loginUser() {
   
    this.service.loginuser(this.user).subscribe(
      data => {
        console.log("response Recieved" + this.user.username);
        console.log("response Recieved" + this.user.password);
        console.log("response Recieved" + this.profileid);
        console.log("response Recieved" + this.user.profileid);

         if (this.profileid == 2) {
           this.routes.navigate(['/employee'])
          }else if(this.profileid == 1){
            this.routes.navigate(['/customer'])
          }else if(this.profileid == 3){
            this.routes.navigate(['/home'])
          }

      
        
        

      },

      error => {
        console.log("exception occured")
        alert("Wrong username or Password");
      }


    )
  }



}
