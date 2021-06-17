import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import {ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  



  users : any;
  constructor(private service : UserServiceService) { }

  ngOnInit(): void {
    let response = this.service.getUser()
    response.subscribe(data=>this.users = data);
  }

  public removeUser(username : string){
    let response = this.service.deleteUser(username);
    response.subscribe(data => this.users = data);
  }


}
