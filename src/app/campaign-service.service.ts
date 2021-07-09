import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignServiceService {

  constructor(private http : HttpClient) { }

  public regCampaigns(campaign: Campaign){
    return this.http.post("http://localhost:8080/save-camp", campaign, {responseType : "text" as "json"});
}
public getCampaign(){
  return this.http.get("http://localhost:8080/all-camp");
}

public deleteCamp(festname: string){
  return this.http.delete("http://localhost:8080/deletecamp/"+festname);
}
}
