import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {

  @Input() person = "";

  items = new Array();

  lookRol(rol:string){
    alert(this.items.push(rol));
  }

  // tableBody = [
  //   {id: 0, name: "Julio Cesar", lastname: "Severiche Orellana", rol: "Older brother"},
  //   {id: 1, name: "Vincent", lastname: "Severiche Orellana", rol: "Middle brother"},
  //   {id: 2, name: "Leonel Richi", lastname: "Severiche Orellana", rol: "Little brother"},
  //   {id: 3, name: "Roly", lastname: "Severiche Valverde", rol: "Father"},
  //   {id: 4, name: "Zulma", lastname: "Orellana Martinez", rol: "Mother"},
  // ];

  // tableHead = [
  //   {id: 0, title: "Person"},
  // ];

}
