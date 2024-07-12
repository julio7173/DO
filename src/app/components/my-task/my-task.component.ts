import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../class/todo'; 

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

  @Input()
  index!: number;

  wipe(index: number) {
    this.todoList.delete(index);
  }

  done(todo: Todo){
    todo.isDone=!todo.isDone
  }

}