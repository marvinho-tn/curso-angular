import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-components';
  cart: Array<string> = [];

  addToCart(item: any) {
    this.cart.push(item);
  }

  showCart() {
    let cartItems = "";

    this.cart.forEach(function(item: any) {
      if(cartItems !== "") { 
        cartItems += ", ";
      }

      cartItems += item.type;
    });

    if(cartItems === "") {
      cartItems = "Carrinho Vazio!";
    }

    alert(cartItems);
  }

  getCartPrice() {
    let cartPrice = 0;

    this.cart.forEach(function(item: any) {
      cartPrice += item.price;
    });

    return cartPrice;
  }
}
