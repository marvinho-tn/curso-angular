import { Component } from '@angular/core';

interface IButtonInfos {
  nome: string;
}

@Component({
  selector: 'app-card-button',
  template: `
    <div class="card-button"><b>{{ infos.nome }}</b></div>
  `,
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  infos: IButtonInfos = {
    nome: 'Adquirir'
  }
}
