import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { MagzineServiceService } from 'src/app/magzine-service.service';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
//import { Magzine } from '../../../../../travellermag-gamma/src/app/magzine';
import { Magzine } from 'src/app/magzine';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-magzinelist',
  templateUrl: './magzinelist.component.html',
  styleUrls: ['./magzinelist.component.css']
})
export class MagzinelistComponent implements OnInit {

  magzine : Magzine = new Magzine();

  ELEMENT_DATA : Magzine[] = [];
  
  displayedColumns: string[] = ['mag_id','mag_name','mag_price','mag_type','actions'];
  dataSource = new _MatTableDataSource<Magzine>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  durationInSeconds: 5;
  
  message: Object;
  
  
  
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

  public regM(){
  let response =this.service.regMagzine(this.magzine)
  response.subscribe(data => {
    this.message = data;

    alert("magzine added");
    this.refresh();
    
  })
}
  
  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }
  
}
