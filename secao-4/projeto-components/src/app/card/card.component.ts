import { Component } from '@angular/core';

interface ICardInfo {
  currentYear: number;
  name: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  infos: ICardInfo = {
      currentYear: new Date().getFullYear(),
      name: "Projeto Componentes"
  };
}
