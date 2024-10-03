import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  foods = [
    {
      value: 'arroz',
      viewValue: 'Arroz'
    },
    {
      value: 'feijao',
      viewValue: 'Feijão'
    }];
}
