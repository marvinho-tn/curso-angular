import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent {
  constructor(
    private readonly _elRef: ElementRef<HTMLElement>,
    private readonly _renderer2: Renderer2
  ) { }

  createElement(value: string) {
    const divElement = document.createElement('div');

    //isso permite que pessoas criem html através do valor do input
    //é uma brecha de segurança
    divElement.innerHTML = value;
    divElement.style.color = 'orange';

    //essa classe nao vai ser aplicada 
    //pq o document nao está no mesmo escopo do componente
    divElement.classList.add('bg-blue');

    this._elRef.nativeElement.appendChild(divElement);
  }

  createElementCorrect(inputText: string) {
    const divElement = this._renderer2.createElement('div');
    const text = this._renderer2.createText(inputText);

    this._renderer2.appendChild(divElement, text);
    this._renderer2.appendChild(this._elRef.nativeElement, divElement);
    this._renderer2.setStyle(divElement, 'color', 'orange');
    this._renderer2.addClass(divElement, 'bg-blue');
  }
}
