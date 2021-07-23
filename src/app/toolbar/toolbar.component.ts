import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home'
    },
    {
      label: 'Dashboard',
      icon: 'dashboard'
    },
    {
      label: 'Login',
      icon: 'person_outline'
    },
    {
      label: 'Register',
      icon: 'login'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}