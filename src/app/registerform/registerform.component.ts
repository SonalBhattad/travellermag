import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators,FormGroupDirective, AbstractControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css'],
})
export class RegisterformComponent implements OnInit {

  hide=true;
  
  profile_id:number=0;
  user : User = new User('','','','','','',0);
  message :any;
  
 
  //profile_id:number=0;
  constructor(private service : UserServiceService , public routes:ActivatedRoute) { }

  // Form=this.fb.group({
  //   UserName:['',Validators.required, Validators.minLength(5)],
  //   dob: ['',Validators.required],
  //   email:['',Validators.required],
  //   password:['',Validators.required],
  //   gender:['',Validators.required],  
  // });
  
  // saveForm(){
  //   console.log('Form value ',this.Form.value);
  // }

  
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    matcher = new MyErrorStateMatcher();

    ngOnInit(): void {

      
  
        this.routes.data.subscribe(params => {
  
        this.profile_id= +params['user'];
  
        console.log("------profile_id------"+this.profile_id);
  
        })
    
  
    }

  public registernow(){
    this.user.profile_id = this.profile_id
    let response = this.service.reguser(this.user);
    console.log(this.user);
    response.subscribe(data=>{
        this.message = data;
    })
  }


}
