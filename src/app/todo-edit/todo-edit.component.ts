import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/todo.model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})

export class TodoEditComponent implements OnInit {

  todo: Todo;
  id: any;

  constructor(
      private todoService: TodoListService,
      private router: Router,
      private routeActive: ActivatedRoute
      ) { }

  ngOnInit() {
    this.todo = new Todo(0, '');
    this.id = this.routeActive.snapshot.params['id'];
    
    if (this.id) {
    
      //On vérifie la valeur de l'id parsé 
      console.log('Id dans le ng onInit vaut :' + this.id);
      this.todo = this.todoService.get(parseInt(this.id));
      //On vérifie la valeur de l'id parsé après l'avoir passé en paramètre de la méthode get() du service TodoListService et 
      console.log(this.todo);
     }
  }

  addTodo(form: NgForm) {
    
    if (!this.id) {
      this.todo.id = this.todoService.getNewId();
      this.todo.label = form.value['idInput'];
      this.todoService.add(this.todo); 
    }
    else {
      this.todo.id = this.id;
      this.todo.label = form.value['idInput'];
      this.todoService.edit(this.todo);
    }
    this.router.navigate(['/list']);
  }
}
