import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'src/app/campaign';
import { CampaignServiceService } from 'src/app/campaign-service.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  show: boolean;
  file: any;
  campaign : Campaign = new Campaign();

  ELEMENT_DATA : Campaign[] = [];
  
  displayedColumns: string[] = ['festname','startdate','enddate','offer','status'];
  dataSource = new _MatTableDataSource<Campaign>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  durationInSeconds: 5;
  
  message: Object;
  
  
  
  constructor(private service : CampaignServiceService) { }
 
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


  public removeCam(festname : string){
    if(confirm('are you sure to delete??')){
      this.service.deleteCamp(festname).subscribe(res=>{
        this.refresh()
      });
    }
    
  }

  public regCam(){
  let response =this.service.regCampaign(this.campaign)
  response.subscribe(data => {
    this.message = data;

    alert("magzine added");
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

  onChange(event) {
    this.file = event.target.files[0];
}

  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}


