import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StatusClassPipe } from './pipes/status-class.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
