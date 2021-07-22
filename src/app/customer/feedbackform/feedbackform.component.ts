import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
export class InputHintExample {}
export class ButtonToggleFormsExample {
  fontStyleControl = new FormControl();
  fontStyle?: string;
}