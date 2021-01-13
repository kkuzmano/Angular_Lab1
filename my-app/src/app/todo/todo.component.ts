import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      {task: "Mop", completed: false},
      {task: "Sweep", completed: false},
      {task: "Eat Snacks", completed: true}, 
    ]
   }

  ngOnInit(): void {
  }

}

interface Todo {
  task: string;
  completed: boolean;
}


