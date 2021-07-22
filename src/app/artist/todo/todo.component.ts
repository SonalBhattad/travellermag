import { Component, OnInit } from '@angular/core';


interface Todo {
  content: string;
  id?: string;
  datemodified?: Date;
  isDone?: boolean;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
