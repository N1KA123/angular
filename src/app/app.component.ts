import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user_list/user-list.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularapp';

  handleInputValue(value: string) {
    console.log(value);
  }

  users = ['Giorgi', 'nika','davity','elise','tekla'];
}
