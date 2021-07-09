import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { UserServiceService } from 'src/app/user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Blog } from '../../blog';


@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PublishedComponent implements OnInit {
  BlogData : Blog[] =[];
  columnsToDisplay = ['id','title', 'type', 'creation','action'];
  dataSource= new MatTableDataSource<Blog>(this.BlogData);
  blog:any;
  expandedElement: Blog | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public service:UserServiceService) { }

  ngOnInit(){
    this.refresh();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public refresh(){
    let response = this.service.getBlogs()
    response.subscribe(res=>this.dataSource.data=res as Blog[]); 
  }

  public deleteById(id: number){
    let response = this.service.deleteBlogs(id);
    response.subscribe(data => this.refresh());
    
  }

}
