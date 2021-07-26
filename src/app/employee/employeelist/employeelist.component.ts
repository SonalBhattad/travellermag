import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/Services/user-service.service';
import {ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { User } from '../../../Classes/user';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  UserData : User[] = [];
  
  displayedColumns: string[] = ['id','empid', 'username', 'dob', 'email', 'pid', 'actions'];
  dataSource = new MatTableDataSource<User>(this.UserData);
  
  @ViewChild(MatPaginator)paginator : MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  users : any;
  
  constructor(private service : UserServiceService) { }

  ngOnInit() { 
    this.refresh();
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  public refresh(){
    let response = this.service.getUser()
    response.subscribe(report=>this.dataSource.data=report as User[]);
  }

  


  public removeUser(username : string){
    if(confirm('are you sure to delete??')){
      this.service.deleteUser(username).subscribe(res=>{
        this.refresh()
      });
    }
    
  }
  

  applyColumnFilter(filterValue: String) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }



}