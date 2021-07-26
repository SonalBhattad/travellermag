import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { CampaignService } from 'src/Services/campaign.service';
import { Campaigns } from 'src/Classes/campaign'; 
import { OffersformComponent } from './offersform/offersform.component';



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


  public festivalname;
  public startdate;
  public enddate;
  public offer;
  public status;

  show: boolean = false;
  show1: boolean = false;
  Campaign: Campaigns = new Campaigns();
  ELEMENT_DATA: Campaigns[] = [];
  displayedColumns: string[] = ['festivalid','festivalname', 'startdate', 'enddate', 'offer', 'status', 'actions'];
  dataSource = new _MatTableDataSource<Campaigns>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  message: any;
  message2: Observable<Campaigns[]>;
  message3:any;
  message4: Object;

  constructor(private cservice: CampaignService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  // Method 1 Not Working Through Observable
  public uploadOffer(){
  let response = this.cservice.getOffers()
  response.subscribe(data=>{
   this.message3= data;
    console.log(data[0]) 
  })
  }
    pm:any;
  //method 2 SQL METHOD 
  public uploadOffer2(){
   
    let response = this.cservice.getStatus();
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
    let response = this.cservice.getOffers()
    response.subscribe(report => this.dataSource.data = report as Campaigns[]);
  }

  public regCam() {
    let response = this.cservice.regOffers(this.Campaign)
    response.subscribe(data => {
      this.message = data;

      alert("offers added");
      this.refresh();

    })
  }

  public removeUser(festivalid : number){
    if(confirm('are you sure to delete??')){
      this.cservice.deleteOffers(festivalid).subscribe(res=>{
        this.refresh()
      });
    }
  }

  openDialog(){
    this.dialog.open(OffersformComponent,{
    data:{festivalname:this.festivalname,startdate:this.startdate,enddate:this.enddate,offer:this.offer,status:this.status}
  });
}

  }
