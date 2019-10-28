import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/todo-list/todo.model';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todolist: Todos;
  constructor(private todoService: TodoListService ) { 
  }

  ngOnInit() {
    this.todolist = this.todoService.getAll();
  }

  deleteTodo(id: number){
    this.todoService.delete(id);
  }
}
