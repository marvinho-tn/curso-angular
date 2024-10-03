import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branco' | 'Laranja' = 'Laranja';
  styleString: string = 'font-size: 15px; color: white;';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  }
  
  increaseFontSize() {
    this.fontSize += this.fontSize / 10;

    this._updateStaticStyles();
  }
  
  decreaseFontSize() {
    this.fontSize -= this.fontSize / 10;

    this._updateStaticStyles();
  }

  resetStyle() {
    this.fontSize = 15;
    this.textColor = 'white';
    this.buttonText = 'Laranja';

    this._updateStaticStyles();
  }

  toggleFontColor() {
    if(this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branco';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }

    this._updateStaticStyles();
  }

  private _updateStaticStyles() {
    this._updateStyleString();
    this._updateStyleObj();
  }

  private _updateStyleString() {
    this.styleString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;
  }

  private _updateStyleObj() {
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    };
  }
}
