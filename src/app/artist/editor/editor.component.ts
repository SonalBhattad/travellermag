import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute,Router, RouterLink } from '@angular/router';
import { BlogServiceService } from 'src/app/blog-service.service';
import { Blog } from '../blog';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  checked = false;
  isDone = true;
  isSelected=true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public show :boolean =true;
  user: any;
  event:any;
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  formdata;
    message:any;
  //username: [''];
  blog : Blog = new Blog(0,'','',''," ",'','');
  constructor(private formBuilder: FormBuilder,public service: BlogServiceService,private route:ActivatedRoute,private router:Router) {
    

    
   }
  onClickSubmit(data) {
      if(this.formdata.invalid)
     {
      
    this.formdata.get('description').markAsTouched();
    
    }
  }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      description: ['', [Validators.required,
        Validators.maxLength(24000), Validators.minLength(5)]]
  });
  }
  toggle() {

    this.show = !this.show;}
   
    public addPost(){
      //this.Editor.username = this.user.username
       let response = this.service.addPost(this.blog);
      console.log(this.blog);
      response.subscribe(data=>{
          this.message = data;
      })
    }
  draft(){
      this.router.navigate(["/artist/drafts"]); //Gives the error message in the title
   }
     goto(){
     if(this.checked=true){
      alert("goto draft");
      this.draft();
     }
    else
      {
        this.addPost();
       
     }
    // eventCheck(event){
    //   console.log(event.target.checked); 
    //   }
      
    // goto(){
    //   switch(this.checked)
    //   {
    //     case false:
    //       this.addPost();
    //       break;

    //       case true:
    //         this.draft();
    //         break;

    //       default:
    //           this.draft();
    //           break;
    // }
    // }
    pageRefresh(); {
      location.reload();
     

    }
  function pageRefresh() {
    throw new Error('Function not implemented.');
  }
}}

