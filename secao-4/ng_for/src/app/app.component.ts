import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Marvin Thomaz', age: 33, },
    { name: 'Giovanna Thomaz', age: 21, },
    { name: 'Claudia Thomaz', age: 56, },
    { name: 'Jorge Nascimento', age: 71, },
  ];

  selectPerson(id: number) {
    if(this.personSelectedIndex === id) {
      this.personSelectedIndex = undefined;
    } else {
      this.personSelectedIndex = id;
    }
  }
}
