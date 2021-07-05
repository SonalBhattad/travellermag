import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Biling, Card } from '../Biling';
import { BilingServiceService } from '../biling-service.service';

@Component({
  selector: 'app-biling',
  templateUrl: './biling.component.html',
  styleUrls: ['./biling.component.css']
})
export class BilingComponent implements OnInit {

  mes : any;
  
  message : any;

  isLinear = false;
 
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  bil : Biling = new Biling('','','',1,'','','',1);
  card : Card = new Card(1,'','',1);


  constructor(private _formBuilder: FormBuilder, private service : BilingServiceService) {
    this.firstFormGroup;
    this.secondFormGroup;
   this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
 
  public registerNow(){
    let response = this.service.regbil(this.bil);
    
    response.subscribe(data=>{
        this.message = data;
    })
  }
  public registercardNow(){
    let response = this.service.regcard(this.card);
    
    response.subscribe(data=>{
        this.mes = data;
    })
  }

  //ngOnInit(): void {
 //}

}
// export class BilingComponent implements OnInit {

//   bil : Biling = new Biling('','','',1,'','','',0);
//   card : Card = new Card(1,'','',3);
  
//   message : any;

//   constructor(private service : BilingServiceService){}
  

//   public registerNow(){
//     let response = this.service.regcard(this.card);
    
//     response.subscribe(data=>{
//         this.message = data;
//     })
//   }
  
// }
