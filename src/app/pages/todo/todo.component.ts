import { Component } from '@angular/core';
import { InputScriptComponent } from '../../components/input-script/input-script.component';
import { ShowListComponent } from '../../components/show-list/show-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [InputScriptComponent, ShowListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

}
