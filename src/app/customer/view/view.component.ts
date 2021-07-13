import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { Campaign } from 'src/app/campaign';
import { CampaignServiceService } from 'src/app/campaign-service.service';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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


