import { Component } from '@angular/core';

interface IButtonInfos {
  nome: string;
}

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  infos: IButtonInfos = {
    nome: 'Comprar'
  }
}
