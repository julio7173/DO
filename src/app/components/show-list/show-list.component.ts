import { Component, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

  constructor(private todoList: TodoService) { }

  bgDo = "bg-blue-500 rounded-xl p-2 text-white text-3xl col-span-4";

  changeDo = false;

  bgButton = "bg-green-500 rounded-xl text-white";

  // done(list: [], element: string, index: number) {
  //   let id = 0;
  //   for (let int = 0; int < list.length; int++) {
  //     if (list[int] == element) {
  //       return id = int;
  //     }
  //   }
  //   if (id == index) {
  //     this.changeDo = !this.changeDo;
  //     if (this.changeDo) {
  //       this.bgDo = "bg-green-500 rounded-xl p-2 text-white text-3xl col-span-4";
  //       this.bgButton = "bg-blue-500 rounded-xl text-white";
  //     } else {
  //       this.bgDo = "bg-blue-500 rounded-xl p-2 text-white text-3xl col-span-4";
  //       this.bgButton = "bg-green-500 rounded-xl text-white";
  //     }
  //   }
  //   return -1;
  // }

  done() {

    this.changeDo = !this.changeDo;
    if (this.changeDo) {
      this.bgDo = "bg-green-500 rounded-xl p-2 text-white text-3xl col-span-4";
      this.bgButton = "bg-blue-500 rounded-xl text-white";
    } else {
      this.bgDo = "bg-blue-500 rounded-xl p-2 text-white text-3xl col-span-4";
      this.bgButton = "bg-green-500 rounded-xl text-white";
    }

  }

  wipe(index: number) {
    this.todoList.delete(index);
  }

}
