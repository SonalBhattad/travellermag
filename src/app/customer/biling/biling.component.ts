import { Component, OnInit } from '@angular/core';
import { Biling,Card } from 'src/app/biling';
import { BilingServiceService } from 'src/app/biling-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-biling',
  templateUrl: './biling.component.html',
  styleUrls: ['./biling.component.css']
})
export class BilingComponent implements OnInit {

  bil : Biling = new Biling();
  card : Card = new Card();
  mes : any;
  message : any;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private service : BilingServiceService) {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    

  }



  

  ngOnInit(): void {
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

  

}
