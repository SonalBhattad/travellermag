import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../Classes/blog';
import {Observable} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from 'src/Services/user-service.service';
import { ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {
  //editor: Editor = new Editor(0,'','','','','');
  // message:any;
  // dataSource= new MatTableDataSource<Editor>(this.ElementData);
  BlogData : Blog[] =[];
  changeColor= [false, false, false];
  posts: Observable<Blog[]>;
  colors=['#b6d8f2','#b5ead7','#fee1e8'];
  blogtype:any;
  materials: any;
  randomItem: string;

  constructor(public service:UserServiceService, public routes:ActivatedRoute) { }

  getColor(){
    this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
    console.log('s',this.randomItem);
    return this.randomItem;
 }

  ngOnInit(): void {
    this.refresh();
  }

  public refresh(){
    this.posts = this.service.getBlogs('D');
  }

  public deleteById(id: number){
    let response = this.service.deleteBlogs(id);
    response.subscribe(data => this.refresh());
    
  }
}
 


