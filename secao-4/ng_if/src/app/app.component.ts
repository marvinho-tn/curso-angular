import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp = true;
  persona: any = {
    status: 1,
    name: undefined,
  }

  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  isTruthy() {
    // return {};
    // return [];
    // return 1;
    // return "teste";
    // return "0";
    // return '0';
    // return "false";
    // return this.persona.status;
  }

  isFalsy() {
    // return false;
    // return 0;
    // return "";
    // return '';
    // return null;
    // return undefined;
    // return -0;
    // return NaN;
    // return this.persona.name;
    // return this.persona.address?.street;
  }
}
