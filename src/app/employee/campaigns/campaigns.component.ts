import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { Campaign } from 'src/app/campaign';
import { CampaignServiceService } from 'src/app/campaign-service.service';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {



  show:boolean = false;
  
  
  campaign : Campaign = new Campaign();

  ELEMENT_DATA : Campaign[] = [];
  
  displayedColumns: string[] = ['festname','startdate','enddate','offer','status','actions'];
  dataSource = new _MatTableDataSource<Campaign>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  durationInSeconds: 5;
  
  message: Object;
  file: any;
  // show1: boolean =false;
  

  constructor(private service : CampaignServiceService, public dialog: MatDialog) { }
  

  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  ngOnInit() {
    this.refresh();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public refresh(){
    let response = this.service.getCampaign()
    response.subscribe(report=>this.dataSource.data=report as Campaign[]);
  }


  public removeCam(festname){
    if(confirm('are you sure to delete??')){
      this.service.deleteCamp(festname).subscribe(res=>{
        this.refresh()
      });
    }
    
  }

  public regCamp(){
  let response =this.service.regCampaigns(this.campaign)
  response.subscribe(data => {
    this.message = data;

    alert("campaign offer added");
    this.refresh();
    
  })
}
  
  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  showhide(){
    this.show=!this.show
  }
  
  // showactive(){
  //   this.show1=!this.show1
  // }

   showHideAdd(){
    this.show=!this.show
   }

  onChange(event) {
    this.file = event.target.files[0];
}

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  toggle:boolean = false;

  doToggle():void{
    this.toggle = !this.toggle;
    // Do some other stuff needed
  }
  
}
export class ButtonToggleOverviewExample {}
export class SlideToggleOverviewExample {}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
