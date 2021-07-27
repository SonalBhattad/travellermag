import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = 'Angular 6';
  users:Array<any>=[{
    active:false
  }]

  click(user){
    user.active = !user.active
    // your code here....
  }
  constructor() { }

  ngOnInit(): void {
  }

}
