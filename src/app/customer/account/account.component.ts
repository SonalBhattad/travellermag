import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  panelOpenState = false;
 
  //constructor() { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
  }

}

function MatAccordion(MatAccordion: any) {
  throw new Error('Function not implemented.');
}

