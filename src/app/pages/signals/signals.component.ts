import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  // Writable signal

  count = signal<number>(0);

  change(){
    this.count.set(4);
  }

  update(){
    this.count.update(value => value + 1);
  }

  // Read Only Signal

  products = signal([
    { name: "producto A", price: 10},
    { name: "producto B", price: 15},
    { name: "producto C", price: 20},
  ]);

  total = computed(() => this.products().reduce((sum, product) => sum + product.price, 0));

  showTotal = this.total;

  calculated(){
    this.total();
  }

}
