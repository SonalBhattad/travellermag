import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Biling, Card } from 'src/app/Biling';
import { BilingServiceService } from 'src/app/biling-service.service';

@Component({
  selector: 'app-biling',
  templateUrl: './biling.component.html',
  styleUrls: ['./biling.component.css']
})
export class BilingComponent implements OnInit {

  bil : Biling = new Biling('','','',1,'','','',0);
  card : Card = new Card(1,'','',3);
  mes : any;
  
  message : any;
  //constructor() { }
  //isLinear = false;
  isLinear = false;
  //secondFormGroup: any[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private service : BilingServiceService) {
    //this.firstFormGroup;
   // this.secondFormGroup;
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

