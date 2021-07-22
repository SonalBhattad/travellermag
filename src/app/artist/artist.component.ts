import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  formdata: any;
  contentVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, public service: UserServiceService) { }

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
    if (this.formdata.invalid) {

      this.formdata.get('description').markAsTouched();

    }
  }


  ngOnInit(): void {
  }

}
