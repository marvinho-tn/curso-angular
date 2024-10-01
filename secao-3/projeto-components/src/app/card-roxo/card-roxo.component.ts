import { Component } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card-roxo',
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss',
})
export class CardRoxoComponent {
  plano: IPlano = {
    infos: {
      tipo: 'Completo',
      preco: 250,
    }
  };
}
