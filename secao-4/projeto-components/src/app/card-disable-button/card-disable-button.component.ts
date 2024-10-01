import { Component } from '@angular/core';

interface IButtonInfos {
  nome: string;
}

@Component({
  selector: 'app-card-disable-button',
  templateUrl: './card-disable-button.component.html',
  styleUrl: './card-disable-button.component.scss'
})
export class CardDisableButtonComponent {
  infos: IButtonInfos = {
    nome: 'Desabilitar'
  }
}
