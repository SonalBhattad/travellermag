import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import{MatSidenav}from'@angular/material/sidenav';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  public show :boolean =true;

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
  constructor(private formBuilder: FormBuilder) { }
  onClickSubmit(data) {
      if(this.formdata.invalid)
     {
      
    this.formdata.get('description').markAsTouched();
    
    }
  }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      description: ['', [Validators.required,
        Validators.maxLength(400), Validators.minLength(5)]]
  });
  
   
  }
  toggle() {

    this.show = !this.show;}

}
