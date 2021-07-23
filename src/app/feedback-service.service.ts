import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedback } from './feedback';
@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  constructor(private http : HttpClient) { }
  public regfeedback(feedback: feedback){
    return this.http.post("http://localhost:8080/save-feedback", feedback, {responseType : "text" as "json"});
}
}
