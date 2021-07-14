import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators, FormGroupDirective, AbstractControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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

  hide = true;
  
  
 

  temp(){return console.log("line number 25------>"+this.profile_id);}


  message: any;
  
  profile_id:number=2;
  
 
  user : User = new User();
  constructor(private service: UserServiceService, public routes: ActivatedRoute) { 

    console.log("Hello inside constructor---------------->"+this.profile_id);
  
  }
  
  // Form=this.fb.group({
  //   UserName:['',Validators.required, Validators.minLength(5)],
  //   dob: ['',Validators.required],
  //   email:['',Validators.required],
  //   password:['',Validators.required],
  //   gender:['',Validators.required],  
  // });


  nayan(){ this.routes.data.subscribe(params => {
    this.profile_id = +params['user'];
    console.log("------profile_id------" + this.profile_id);

  })}
  


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {


  
    this.temp();
    this.nayan();
    console.log("1st entry ------>"+this.profile_id );
    
    
    



  }



  public registernow() {

    this.user.profile_id = this.profile_id;
    let response = this.service.reguser(this.user);
    response.subscribe(data => {
      this.message = data;

    })
  }


}
