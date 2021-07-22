import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OfferServiceService } from 'src/app/offer-service.service';
import { Offers } from 'src/app/offers';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Offers,private service: OfferServiceService) { }

  offers: Offers = new Offers();
  
  ngOnInit(): void {

  }

public updateOffers(){
    this.service.updateOffers(this.offers).subscribe(data=>{
      alert("record Updated")
     
    })
  
    
}




}
