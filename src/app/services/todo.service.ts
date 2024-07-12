import { Injectable } from '@angular/core';
import { Todo } from '../class/todo'; 

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  
  todo: Todo[] = [];

  index = 0;


  constructor() {};
  
  add(task:string){
    const id = this.index
    const newToDo: Todo = new Todo(id, task, false);
    this.todo.push(newToDo);
    this.index += 1;
  }

  delete(id: number){
    this.todo.splice(id, 1);
  }

}
