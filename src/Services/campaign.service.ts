import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaigns } from 'src/Classes/campaign'; 

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http : HttpClient) { }

  public getOffers():Observable<Campaigns[]>{
    return this.http.get<Campaigns[]>("http://localhost:8080/all-offers")
  }

  public regOffers(Campaigns:Campaigns){
    return this.http.post("http://localhost:8080/saveoffer", Campaigns, {responseType : "text" as "json"});
  }

  public updateOffers(Campaigns:Campaigns){
    return this.http.put("http://localhost:8080/update-campaign2",Campaigns);

 
  }

  public deleteOffers(festivalid){
    return this.http.delete("http://localhost:8080/deletecamp/"+festivalid);
  }

  public getStatus(){
    return this.http.get("http://localhost:8080/test");
  }

}