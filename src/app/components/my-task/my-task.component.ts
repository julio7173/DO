import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../type/todo';

@Component({
  selector: 'app-my-task',
  standalone: true,
  imports: [],
  templateUrl: './my-task.component.html',
  styleUrl: './my-task.component.css'
})
export class MyTaskComponent {

  constructor(public todoList: TodoService) { };

  @Input()
  item!: Todo;

  wipe(todo: Todo) {
    this.todoList.delete(todo.id);
  }

  done(todo: Todo){
    todo.isDone=!todo.isDone
  }

}