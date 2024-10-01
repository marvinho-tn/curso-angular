import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonCancelComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
  ],
})
export class CardsModule { }
