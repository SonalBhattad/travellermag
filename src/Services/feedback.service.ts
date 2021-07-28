import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from 'src/Classes/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  public getFeedbacks():Observable<Feedback[]>{
    return this.http.get<Feedback[]>("http://localhost:8080/all-feedbacks")
  }

  public saveFeedback(Feedback:Feedback){
    return this.http.post("http://localhost:8080/save-feedback", Feedback, {responseType : "text" as "json"});
  }
}
