import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('filhoComp')
  filhoCompElement!: FilhoComponent;

  @ViewChild('meuInput')
  meuInputElement!: ElementRef<HTMLInputElement>;

  @ViewChild('meuInputStatic', { static: true })
  meuInputStaticElement!: ElementRef<HTMLInputElement>;

  @ViewChild('meuInputStaticComNgIf', { static: true })
  meuInputStaticComNgIfElement!: ElementRef<HTMLInputElement>;

  constructor() {
    console.log(
      'constructor q nao carrega o view child', 
      { 
        meuInputElement: this.meuInputElement, 
        meuInputStaticElement: this.meuInputStaticElement,
        meuInputStaticComNgIf: this.meuInputStaticComNgIfElement,
      });
  }

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit q carrega o view child', 
      { 
        meuInputElement: this.meuInputElement, 
        meuInputStaticElement: this.meuInputStaticElement,
        meuInputStaticComNgIf: this.meuInputStaticComNgIfElement,
      });

    this.meuInputElement.nativeElement.focus();
  }

  ngOnInit() {
    console.log(
      'ngOnInit q nao carrega o view child q nao seja estatico e sem diretiva q faça binding', 
      { 
        meuInputElement: this.meuInputElement, 
        meuInputStaticElement: this.meuInputStaticElement,
        meuInputStaticComNgIf: this.meuInputStaticComNgIfElement,
      });
  }

  hello() {
    this.filhoCompElement.dizerOi();
    this.filhoCompElement.message = 'Eu disse oi!';
  }
}
