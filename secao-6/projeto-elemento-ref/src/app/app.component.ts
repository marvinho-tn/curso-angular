import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('minhaDiv')
  divElement!: ElementRef<HTMLDivElement>;
  
  constructor(private readonly _elRef: ElementRef<HTMLElement>) { }

  ngOnInit() {
    console.log(this._elRef);

    const minhaDiv = this._elRef.nativeElement.querySelector("#minha-outra-div") as HTMLDivElement;

    minhaDiv.style.backgroundColor = 'blue';
    minhaDiv.textContent = 'Minha outra div encontrada!';
    minhaDiv.classList.add('minha-classe');
    minhaDiv.addEventListener('click', () => { console.log('clicou') });
  }

  ngAfterViewInit() {
    this.divElement.nativeElement.style.backgroundColor = 'orange';
    this.divElement.nativeElement.textContent = 'Minha div orange';
    this.divElement.nativeElement.classList.add('minha-classe');
  }
}
