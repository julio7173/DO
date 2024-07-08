import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-script',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-script.component.html',
  styleUrl: './input-script.component.css'
})
export class InputScriptComponent {

  constructor(private todoList: TodoService){}

  todo = "";

  addToDo(){
    this.todoList.add(this.todo);
    this.todo = "";
  }

}
