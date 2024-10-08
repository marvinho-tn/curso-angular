import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    FocusSecondInputDirective,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
