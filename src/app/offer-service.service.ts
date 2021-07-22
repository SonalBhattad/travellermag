import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offers } from 'src/app/offers';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor(private http : HttpClient) { }

  public getOffers():Observable<Offers[]>{
    return this.http.get<Offers[]>("http://localhost:8080/all-offers")
  }

  public regOffers(offers:Offers){
    return this.http.post("http://localhost:8080/save-camp", offers, {responseType : "text" as "json"});
  }

  public updateOffers(offers:Offers){
    return this.http.put("http://localhost:8080/update-campaign2",offers);

 
  }

  public deleteOffers(festid){
    return this.http.delete("http://localhost:8080/deletecamp/"+festid);


  }

  public getStatus(){
    return this.http.get("http://localhost:8080/test");
  }

}
