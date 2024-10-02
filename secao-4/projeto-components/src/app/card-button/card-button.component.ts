import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {
  @Input({ required: true }) name: string = "";
  @Input() backgroundColor: string = "white";
  @Input() color: string = "black";
  @Output('buttonClick') buttonClickEmitter = new EventEmitter();

  onButtonClick() {
    this.buttonClickEmitter.emit();
  }
}
