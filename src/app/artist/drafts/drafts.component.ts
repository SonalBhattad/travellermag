import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BlogServiceService } from 'src/app/blog-service.service';
import { Blog } from '../blog';


@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {
  //title="Winterstorm";
  //data:any;
 //Editor : Editor = new Editor(0,'','','','',);
 posts:Observable<Blog[]>;
  BlogServiceService: any;
  
  constructor(private service:BlogServiceService) { }

  ngOnInit(){
    this.posts=this.service.getPost()
  }

}
