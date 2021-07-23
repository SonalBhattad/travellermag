import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  formdata: any;

  constructor(private formBuilder: FormBuilder) { }

  @ViewChild('sidenav') sidenav: MatSidenavModule | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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

  onClickSubmit() {
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

}