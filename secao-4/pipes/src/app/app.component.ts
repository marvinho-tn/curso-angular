import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'MaRvIn';
  person = {
    name: this.name,
    status: 1,
  };

  person2 = {
    name: 'Giovanna',
    status: 2,
  };

  person3 = {
    name: 'Claudia',
    status: 3,
  };
}
