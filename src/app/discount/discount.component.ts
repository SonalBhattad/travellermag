import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mrp:number;
  valuesType = ['flat', 'percent'];
  value:number;
  totalCost:number;

  onChange(selectedValue) {

    console.log(selectedValue);
    if (selectedValue == 'flat') {
      console.log("FLAT");
      this.totalCost = this.mrp - this.value;
    } else if (selectedValue == 'percent') {
      console.log("PERCENT");
      this.totalCost =  this.mrp - ((this.mrp * this.value) / 100); 
    }
  }
}
