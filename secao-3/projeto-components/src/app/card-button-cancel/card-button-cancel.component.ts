import { Component } from '@angular/core';

interface IButtonInfos {
  nome: string;
}

@Component({
  selector: 'app-card-button-cancel',
  templateUrl: './card-button-cancel.component.html',
  styleUrl: './card-button-cancel.component.scss',
})
export class CardButtonCancelComponent {
  infos: IButtonInfos = {
    nome: 'Cancelar'
  }
}
