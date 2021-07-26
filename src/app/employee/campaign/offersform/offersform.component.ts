import { Component, Inject, OnInit } from '@angular/core';
import { CampaignService } from 'src/Services/campaign.service';
import { Campaigns } from 'src/Classes/campaign';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-offersform',
  templateUrl: './offersform.component.html',
  styleUrls: ['./offersform.component.css']
})
export class OffersformComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Campaigns,private cservice: CampaignService) { }

  Campaign: Campaigns = new Campaigns();
  
  ngOnInit(): void {

  }

public updateOffers(){
    this.cservice.updateOffers(this.Campaign).subscribe(data=>{
      alert("record Updated")
     
    })
  
    
}




}