import { Component, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { count } from 'console';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

  constructor(public todoList: TodoService) { };

  bgDo = "bg-blue-500 rounded-xl p-2 text-white text-3xl col-span-4";

  bgButton = "bg-green-500 rounded-xl text-white";

  done(index: number) {

    let id = (this.todoList.todo.findIndex((element) => element.id === index));

    let task = document.getElementById("task-"+id);
    let done = document.getElementById("done-"+id);

    let bgTask = task?.classList.contains("bg-blue-500");
    let bgDone = done?.classList.contains("bg-green-500");

    if(bgTask && bgDone ){
      task?.classList.replace("bg-blue-500", "bg-green-500");
      task?.classList.add("line-through");

      done?.classList.replace("bg-green-500", "bg-blue-500");
    } else {
      task?.classList.replace("bg-green-500", "bg-blue-500");
      task?.classList.remove("line-through");

      done?.classList.replace("bg-blue-500", "bg-green-500");
    }

  }

  wipe(index: number) {
    this.todoList.delete(index);
  }


      // if (id === index) {
    //   this.changeDo = !this.changeDo;
    //   if (this.changeDo) {
    //     this.bgDo = "bg-green-500 rounded-xl p-2 text-white text-3xl col-span-4";
    //     this.bgButton = "bg-blue-500 rounded-xl text-white";
    //   } else {
    //     this.bgDo = "bg-blue-500 rounded-xl p-2 text-white text-3xl col-span-4";
    //     this.bgButton = "bg-green-500 rounded-xl text-white";
    //   }
    // }

}
