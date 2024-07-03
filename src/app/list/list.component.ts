import { Component, EventEmitter, Output } from '@angular/core';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ElementComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  personList = [
    { id: 0, name: "Julio Cesar", lastname: "Severiche Orellana", rol: "Older brother" },
    { id: 1, name: "Vincent", lastname: "Severiche Orellana", rol: "Middle brother" },
    { id: 2, name: "Leonel Richi", lastname: "Severiche Orellana", rol: "Little brother" },
    { id: 3, name: "Roly", lastname: "Severiche Valverde", rol: "Father" },
    { id: 4, name: "Zulma", lastname: "Orellana Martinez", rol: "Mother" },
  ];

  printAlert(rol:string){
    alert(rol);
  }
}
