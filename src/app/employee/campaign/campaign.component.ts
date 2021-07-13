import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { OfferServiceService } from 'src/app/offer-service.service';
import { Offers } from 'src/app/offers';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})

export class CampaignComponent implements OnInit  {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  show:boolean = false;
  show1:boolean = false;
  Offers: Offers = new Offers();
  ELEMENT_DATA : Offers[] = [];
  displayedColumns: string[] = ['festname', 'startdate','enddate', 'offer','status', 'actions'];
  dataSource = new _MatTableDataSource<Offers>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  message: any;

  constructor(private service : OfferServiceService) { }

  ngOnInit(): void {
    this.refresh();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

   showHideOffers(){
    this.show=!this.show
   }

   showHideAdd(){
    this.show1=!this.show1
   }

  public refresh(){
    let response = this.service.getOffers()
    response.subscribe(report=>this.dataSource.data=report as Offers[]);
  }

  public regCam(){
    let response =this.service.regOffers(this.Offers)
    response.subscribe(data => {
      this.message = data;
  
      alert("offers added");
      this.refresh();
      
    })
  }


  
  
  



  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }



}
