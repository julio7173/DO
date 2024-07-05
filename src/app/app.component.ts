import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Teaching';

  // @ViewChild('something') lista!: ListComponent;

  @ViewChild(ListComponent) 
  lista!: ListComponent;

  message = "Vi otro pejelagarto";


  ngAfterViewInit(){
    this.lista.doSomething("Hola desde child list component");
  }

  // ngAfterViewInit(){
  //   this.lista.doSomething(this.message);
  // }
}
