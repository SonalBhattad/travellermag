import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biling, Card } from './Biling';

@Injectable({
  providedIn: 'root'
})
export class BilingServiceService {

  constructor(private http : HttpClient) { }
  public regbil(bil: Biling){
    return this.http.post("http://localhost:8080/save-bildata", bil, {responseType : "text" as "json"});
  }

  public regcard(card: Card){
    return this.http.post("http://localhost:8080/save-cardinfo", card, {responseType : "text" as "json"});
  }
}