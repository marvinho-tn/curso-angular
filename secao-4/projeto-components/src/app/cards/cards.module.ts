import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { MatSliderModule } from '@angular/material/slider';
import { CardInputComponent } from '../card-input/card-input.component';
import { CardDisableButtonComponent } from '../card-disable-button/card-disable-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardButtonComponent,
    CardInputComponent,
    CardDisableButtonComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [
    CardComponent,
  ],
})
export class CardsModule { }
