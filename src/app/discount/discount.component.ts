import { Component, OnInit } from '@angular/core';
import {  ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit{
  ngOnInit(){
  }

  submitted: boolean;
  
  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })  

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'da.png';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }
  
  // Submit Registration Form
  // onSubmit() {
  //   this.submitted = true;
  //   if(!this.registrationForm.valid) {
  //     alert('Please fill all the required fields to create a super hero!')
  //     return false;
  //   } else {
  //     console.log(this.registrationForm.value)
  //   }
  // }

}
  
  // mrp:number;
  // valuesType = ['flat', 'percent'];
  // value:number;
  // totalCost:number;

  // onChange(selectedValue) {

  //   console.log(selectedValue);
  //   if (selectedValue == 'flat') {
  //     console.log("FLAT");
  //     this.totalCost = this.mrp - this.value;
  //   } else if (selectedValue == 'percent') {
  //     console.log("PERCENT");
  //     this.totalCost =  this.mrp - ((this.mrp * this.value) / 100); 
  //   }
  // }

