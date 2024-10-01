import { Component } from '@angular/core';

interface IInputProps {
  text: string;
  type: string;
  isDisabled: Boolean;
}

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.scss'
})
export class CardInputComponent {
  inputProps: IInputProps = {
    text: "Mensagem...",
    type: "text",
    isDisabled: false
  };

  enableInput() {
    this.inputProps.isDisabled = false;
  }

  disableInput() {
    this.inputProps.isDisabled = true;
  }
}
