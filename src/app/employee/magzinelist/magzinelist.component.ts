import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { MagzineServiceService } from 'src/app/magzine-service.service';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import { Magzine } from '../../../../../travellermag-gamma/src/app/magzine';

@Component({
  selector: 'app-magzinelist',
  templateUrl: './magzinelist.component.html',
  styleUrls: ['./magzinelist.component.css']
})
export class MagzinelistComponent implements OnInit {

  
  // ELEMENT_DATA : Magzine[] = [];
  
  // displayedColumns: string[] = ['mag_id', 'mag_name', 'mag_price', 'mag_type'];
  // dataSource = new _MatTableDataSource<Magzine>(this.ELEMENT_DATA);
  
  // @ViewChild(MatPaginator)paginator : MatPaginator;

  // @ViewChild(MatSort)
  // sort: MatSort = new MatSort;
  



  // users : any;
  
  // constructor(private service : UserServiceService) { }

  // ngOnInit() {
  
  //   this.refresh();

   

  // }

  // ngAfterViewInit() {

  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;

  // }

  // public refresh(){
  //   let response = this.service.getUser()
  //   response.subscribe(report=>this.dataSource.data=report as Magzine[]);
  // }

  


  // public removeUser(username : string){
  //   if(confirm('are you sure to delete??')){
  //     this.service.deleteUser(username).subscribe(res=>{
  //       this.refresh()
  //     });
  //   }
    
  // }

  // applyFilter(filterValue: String) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  
  // }


  ELEMENT_DATA : Magzine[] = [];
  
  displayedColumns: string[] = ['mag_id', 'mag_name', 'mag_price', 'mag_type'];
  dataSource = new _MatTableDataSource<Magzine>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  durationInSeconds: 5;
  _snackBar: any;
  



  
  
  constructor(private service : MagzineServiceService) { }

  ngOnInit() {
  
    this.refresh();

   

  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public refresh(){
    let response = this.service.getMagzine()
    response.subscribe(report=>this.dataSource.data=report as Magzine[]);
  }

  


  public removeUser(mag_name : string){
    if(confirm('are you sure to delete??')){
      this.service.deleteUser(mag_name).subscribe(res=>{
        this.refresh()
      });
    }
    
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }


}
