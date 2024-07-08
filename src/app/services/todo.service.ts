import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  toDo: string[] = [];

  add(todo: string){
    this.toDo.push(todo);
  }

  delete(index: number){
    this.toDo.splice(index, 1);
  }
}
