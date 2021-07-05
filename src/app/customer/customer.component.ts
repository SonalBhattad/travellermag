import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  
  contentVisible: boolean =false;
  mesg :any;
  user  : any;
  service: any;
  message: any;
 

  constructor(public dialog: MatDialog) { }
  @ViewChild('sidenav') sidenav: MatSidenavModule | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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

  //  public registerNow(){
  //    console.log("added to your cart");
  //    let response = this.service.reguser(this.user);
  //   console.log(this.user);
  //   response.subscribe((data: () => void)=>{
  //       this.message = data;
  //   })
  //  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}