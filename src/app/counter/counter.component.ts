import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

}
