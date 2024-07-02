import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  myMap = new Map([
    ["firstName", "Angular"],
    ["lastName", "Framework"],
  ]);

  flow1 = "@for";
  flow2 = "@for with String - Texto";
  flow3 = "@for with Objects - Objetos";
  flow4 = "@for with $index - Int:incremental (0,1,...)";
  flow5 = "@for with $first and $last - Boolean";
  flow6 = "@for with $odd/impar and $even/par - Boolean";
  flow7 = "@for with $count - Int:incremental (1,2,...)";


  operatingSystem = [
    "Windows",
    "MacOs",
    "Linux",
  ];

  opSys = [
    "Windows",
    "MacOs",
    "Linux",
  ];

  SO = [
    "Windows",
    "MacOs",
    "Linux",
  ];
}
