import { Component, OnInit } from '@angular/core';
import {Blog} from 'src/app/artist/blog';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { BlogServiceService } from 'src/app/blog-service.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})

export class PublishComponent implements OnInit {
  Blog : Blog[]=[];
  displayedColumns: string[] = ['id','title', 'type',  'createdon','action'];
  dataSource = new MatTableDataSource<Blog>(this.Blog);
 
  constructor(private service:BlogServiceService) { }
  posts:any;
  ngOnInit() {
    this.refresh();
  }
    public refresh(){
    let response = this.service.getPost()
    response.subscribe(report=>this.dataSource.data=report as Blog[]);
    }
  
    public deletePost(id:number){
      let response = this.service.deletePost(id);
      response.subscribe(data => this.refresh());
      console.log(id);
    }
  }

 







