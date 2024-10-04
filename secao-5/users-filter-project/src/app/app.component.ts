import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userSelected: IUser = { } as IUser;
  
  selectUser(user: IUser) {
    this.userSelected = user;
  }
}
