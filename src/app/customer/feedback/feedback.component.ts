import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Magazine } from '../../../Classes/magazine';
import { Feedback } from 'src/Classes/feedback';
import { FeedbackService } from 'src/Services/feedback.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  Feedback : Feedback = new Feedback(0,'','','',null)
  feedback: Observable<Feedback[]>;
  message: any;

  magazines = new FormControl();

  magazineList: string[] = ['Travel+Leisure', 'The Newyorker', 'World Travel', 'Traveller', 'LA Travel', 'Planet Goa','Budget Travel','Wanderlust'];


  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor(public feedbackservice:FeedbackService) { }

  ngOnInit(): void {
    this.feedback = this.feedbackservice.getFeedbacks();
  }

  selectStar(value): void{

    // prevent multiple selection
    if ( this.selectedRating === 0){

      this.stars.filter( (star) => {

        if ( star.id <= value){

          star.class = 'star-gold star';

        }else{

          star.class = 'star-gray star';

        }

        return star;
      });

    }

    this.selectedRating = value;

  }

  saveform(){
    this.Feedback.rating= this.selectedRating;
    let response = this.feedbackservice.saveFeedback(this.Feedback);
  console.log(this.feedback);
  response.subscribe(data=>{
      this.message = data;})
  }

}

