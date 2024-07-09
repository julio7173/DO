import { Injectable } from '@angular/core';
import { Todo } from '../type/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {};

  todo: Todo[] = [];

  index = 0;
  
  add(task:string){
    const id = this.index
    const newToDo: Todo = {id, task};
    this.todo.push(newToDo);
    this.index += 1;
  }

  delete(id: number){
    this.todo.splice(id, 1);
  }

}
