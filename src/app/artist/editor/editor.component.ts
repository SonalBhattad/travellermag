import { Component, OnInit } from '@angular/core';
import { Blog } from '../../../Classes/blog';
import { UserServiceService } from '../../../Services/user-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  message: any;
  formdata: any;
  id: number = 0;
  Blog : Blog = new Blog(0,'','','','','','');
  public displayedColumns = ['id', 'title', 'type'];
  public dataSource = new MatTableDataSource<Blog>();
  public saveUsername:boolean;

  constructor(private formBuilder: FormBuilder, public service:UserServiceService, private router: Router, private route: ActivatedRoute) { }

  onClickSubmit() {
    if(this.formdata.invalid)
   {
    
  this.formdata.get('description').markAsTouched();
  
  }
}

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      title: [''],
      type: [''],
      description: [''],
      body: ['', [Validators.required,
        Validators.maxLength(1000), Validators.minLength(5)]]
  });
  
}

 public draft(){
   this.Blog.blogtype="D";
  let response = this.service.addBlog(this.Blog);
   console.log(this.Blog);
   response.subscribe(data=>{
       this.message = data;})
       this.formdata.reset();
 }

 public publish(){
  this.Blog.blogtype="P";
 let response = this.service.addBlog(this.Blog);
  console.log(this.Blog);
  response.subscribe(data=>{
      this.message = data;})
      this.formdata.reset();
}

onEdit() {
  this.router.navigate(['/editor', this.formdata.value]);
}


 
}
