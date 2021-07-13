import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offers } from 'src/app/offers';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {

  constructor(private http : HttpClient) { }

  public getOffers(){
    return this.http.get("http://localhost:8080/all-offers")
  }

  public regOffers(offers:Offers){
    return this.http.post("http://localhost:8080/save-camp", offers, {responseType : "text" as "json"});
  }



}
