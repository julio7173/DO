import { Component, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { MyTaskComponent } from '../my-task/my-task.component';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [MyTaskComponent],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

  constructor(public todoList: TodoService) { };

}
