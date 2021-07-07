
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { _MatTableDataSource } from '@angular/material/table';
import { Magzine } from 'src/app/magzine';
import { MagzineserviceService } from 'src/app/magzineservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-magzinelist',
  templateUrl: './magzinelist.component.html',
  styleUrls: ['./magzinelist.component.css']
})
export class MagzinelistComponent implements OnInit {

  magzine : Magzine = new Magzine(0,'',0,'');
  ELEMENT_DATA : Magzine[] = [];
  
  displayedColumns: string[] = ['mag_id', 'mag_name', 'mag_price', 'mag_type', 'actions'];
  dataSource = new _MatTableDataSource<Magzine>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  message: any;
  

  constructor(private service : MagzineserviceService,public dialog: MatDialog) { }

  ngOnInit(): void {

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

  public regMagzine(){
  let response =this.service.regMag(this.magzine)
  response.subscribe(data => {
    this.message = data;

    alert("magzine added");
    this.refresh()
    
  })
}
  




  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}








