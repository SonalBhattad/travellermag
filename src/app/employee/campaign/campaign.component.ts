import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';

import { OfferServiceService } from 'src/app/offer-service.service';
import { Offers } from 'src/app/offers';
import { PopupComponent } from './popup/popup.component';



@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  public festname;
  public startdate;
  public enddate;
  public offer;
  public status;

  show: boolean = false;
  show1: boolean = false;
  Offers: Offers = new Offers();
  ELEMENT_DATA: Offers[] = [];
  displayedColumns: string[] = ['festid','festname', 'startdate', 'enddate', 'offer', 'status', 'actions'];
  dataSource = new _MatTableDataSource<Offers>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  message: any;
  message2: Observable<Offers[]>;
  message3:any;
  message4: Object;

  constructor(private service: OfferServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  // Method 1 Not Working Through Observable
  public uploadOffer(){
  let response = this.service.getOffers()
  response.subscribe(data=>{
   this.message3= data;
    console.log(data[0]) 
  })
  }
    pm:any;
  //method 2 SQL METHOD 
  public uploadOffer2(){
   
    let response = this.service.getStatus();
    response.subscribe(data=>{
      this.message4 =data;
      console.log(this.message4)
      
      
    })



  }




 

  showHideOffers() {
    this.show = !this.show
  }

  showHideAdd() {
    this.show1 = !this.show1
  }

  public refresh() {
    let response = this.service.getOffers()
    response.subscribe(report => this.dataSource.data = report as Offers[]);
  }

  public regCam() {
    let response = this.service.regOffers(this.Offers)
    response.subscribe(data => {
      this.message = data;

      alert("offers added");
      this.refresh();

    })
  }

  public removeUser(festid : number){
    if(confirm('are you sure to delete??')){
      this.service.deleteOffers(festid).subscribe(res=>{
        this.refresh()
      });
    }
    
  }

  openDialog(){
    this.dialog.open(PopupComponent,{
    data:{festname:this.festname,startdate:this.startdate,enddate:this.enddate,offer:this.offer,status:this.status}
  });



 

  }










  

  


  openDialog1(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { festname:this.festname,startdate:this.startdate,enddate:this.enddate,offer:this.offer,status:this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.festname = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Offers) { }

  onNoClick(): void {
    this.dialogRef.close();
  }






}





