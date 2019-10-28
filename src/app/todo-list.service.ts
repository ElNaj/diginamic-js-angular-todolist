import { Injectable } from '@angular/core';
import { Todos, Todo } from './todo-list/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todolist: Todos = [];
  
  constructor() { 
    
  }

  getAll(): Todos {
    return this.todolist;
  }

  get(id: number): Todo {
    let todo : Todo;

    this.todolist.forEach(iNew => {
      if(iNew.id === id){
        todo = iNew;
      }
    })
    return todo;
  }

  getNewId(): number {
    let id = [];
    this.todolist.forEach(iNew => {
      id.push(iNew.id);
    });
    if(!id.length){
      return 1;
    }
    else{
      return Math.max(...id) + 1;
    }
      
  }
  add(todo : Todo){
   this.todolist.push(todo);
  }

  edit(todo : Todo){
    this.todolist.forEach(iNew => {
      if(iNew.id === todo.id) {
        iNew.label = todo.label;
      };
    });
  }

  delete(id: number){
    this.todolist.forEach((iNew, index, object) => {
      if(id === iNew.id){
        object.splice(index, 1);
      }
    })
  }
}
