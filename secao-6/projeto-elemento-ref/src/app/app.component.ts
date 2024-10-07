import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('minhaDiv')
  divElement!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
    this.divElement.nativeElement.style.backgroundColor = 'orange';
    this.divElement.nativeElement.textContent = 'Minha div orange';
    this.divElement.nativeElement.classList.add('minha-classe');
  }
}
