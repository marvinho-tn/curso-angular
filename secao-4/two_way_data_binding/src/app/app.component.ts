import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'Marvin';

  //usa a atribuição caso o two way data binding nao esteja ligado -> [(ngModel)]
  handleInputChange(event: string) {
    console.log(event);
    //this.name = event;
  }
}
