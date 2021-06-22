import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import {ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/user';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';




@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

 

  ELEMENT_DATA : User = new User('','','','','','',0);
  
  displayedColumns: string[] = ['empid', 'username', 'dob', 'email', 'profile_id'];
  dataSource = this.ELEMENT_DATA;
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  



  users : any;
  
  constructor(private service : UserServiceService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    let response = this.service.getUser()
    response.subscribe(report=>this.dataSource=report as User);
  }

  


  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data => this.users = data);
  }

  applyFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }



}

