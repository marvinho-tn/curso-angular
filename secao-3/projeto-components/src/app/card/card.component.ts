import { Component } from '@angular/core';

interface ICard {
  infos: ICardInfos;
}

interface ICardInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  plano: ICard = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    }
  };
}
