import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  buttonsList = [
    'Botão 1',
    'Botão 2',
    'Botão 3',
  ];

  @ViewChildren('meuButton')
  buttonsElement!: QueryList<ElementRef<HTMLButtonElement>>;
  
  ngAfterViewInit() {
    console.log(this.buttonsElement);
    console.log(this.buttonsElement.toArray());

    this.buttonsElement.changes.subscribe((result) => {
      console.log(result);
    })
  }

  remove() {
    this.buttonsList.shift();
  }

  changeColor(event: Event) {
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;

    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsElement.forEach((btnEl: ElementRef<HTMLButtonElement>) => {
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }

  first() {
    // const primeiro = this.buttonsElement.get(0);

    // const primeiro = this.buttonsElement.find((btnEl: ElementRef<HTMLButtonElement>) => btnEl.nativeElement.className === 'btn-0');

    const primeiro = this.buttonsElement.toArray()[0];

    console.log('primeiro', primeiro);
  }
}
