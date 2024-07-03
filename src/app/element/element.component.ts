import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [],
  templateUrl: './element.component.html',
  styleUrl: './element.component.css'
})
export class ElementComponent {

  @Input() person : any;

  @Output() showRol = new EventEmitter<string>();

  printRol(rol:string){
    this.showRol.next("Hola mundo");
  }

  // lookRol(rol:string){
  //   alert(this.items(rol));
  // }

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
