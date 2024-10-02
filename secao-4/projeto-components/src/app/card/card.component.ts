import { Component, Input } from '@angular/core';

interface ICardInfo {
  backgroundColor: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) type: string = '';

  info: ICardInfo = {
    backgroundColor: this.gerarRGB(),
  }

  gerarRGB() {
    const key = Date.now() * Math.random();
    const r = Math.floor((key % 255) * Math.random());
    const g = Math.floor((key / 255 % 255) * Math.random());
    const b = Math.floor((key / 65025 % 255) * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
  }

  calcularLuminosidade(r: number, g: number, b: number) {
    return (0.299 * r + 0.587 * g + 0.114 * b);
  }

  definirCorFonte(fundoRgb: string) {
    const rgb = fundoRgb.match(/\d+/g);

    if (!rgb || rgb.length < 3) throw new Error("Formato RGB inválido");

    const r = parseInt(rgb[0], 10);
    const g = parseInt(rgb[1], 10);
    const b = parseInt(rgb[2], 10);

    const luminosidade = this.calcularLuminosidade(r, g, b);

    return luminosidade < 128 ? "white" : "black";
  }
}