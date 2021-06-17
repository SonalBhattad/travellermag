import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

export class MyErrorStateMatcher implements ErrorStateMatcher{
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
  
  hide=true;
  profile_id:number=0;
  user: User = new User('','','','','','',2);

  constructor(private fb: FormBuilder, private service: UserServiceService, public routes: Router,public router:ActivatedRoute ) {}

  loginForm=this.fb.group({
    UserName:['',Validators.required, Validators.minLength(5)]
  });

  saveForm(){
    console.log('Form value ',this.loginForm.value);
  }

  ngOnInit() {

    

  }

  
 

  loginUser(){
    
    this.service.loginuser(this.user).subscribe(
      data=>{console.log("response Recieved");
        this.routes.navigate(['/employee'])   
    },
      error=>{console.log("exception occured")
      alert("Wrong username or Password");
    }
      
    
    )
  }



}
