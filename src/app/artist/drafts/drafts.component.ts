import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/blog';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  BlogData : Blog[] =[];
  changeColor= [false, false, false];
  posts: Observable<Blog[]>;
  colors=['#b6d8f2','#b5ead7','#fee1e8'];
  blogtype:any;
  materials: any;
  randomItem: string;

  constructor(public service:UserServiceService, public routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.refresh();
  }

  getColor(){
    this.randomItem = this.colors[Math.floor(Math.random()*this.colors.length)];
    console.log('s',this.randomItem);
    return this.randomItem;
 }

 

  public refresh(){
    this.posts = this.service.getBlogs('D');
  }

  public deleteById(id: number){
    let response = this.service.deleteBlogs(id);
    response.subscribe(data => this.refresh());
    
  }

}
