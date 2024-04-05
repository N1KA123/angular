import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  @Input() counterValue: number = 5;
  @Output() valueChange = new EventEmitter<number>();


  count = this.counterValue;


  increment() {
    this.count++;
    this.valueChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.valueChange.emit(this.count);
  }

}
