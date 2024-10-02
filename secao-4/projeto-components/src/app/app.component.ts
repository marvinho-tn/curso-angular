import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-components';
  cart: Array<string> = [];

  addToCart(type: string) {
    this.cart.push(type);
  }

  showCart() {
    let cartItems = "";

    this.cart.forEach(function(item) {
      if(cartItems !== "") { 
        cartItems += ", ";
      }

      cartItems += item;
    });

    alert(cartItems);
  }
}
