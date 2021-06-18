import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import{MatSidenav}from'@angular/material/sidenav';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export default class CustomerComponent implements OnInit {
 constructor(){}
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public show :boolean =true;
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  ngOnInit(): void {
  }
  toggle() {

    this.show = !this.show;}
}