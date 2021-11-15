import { Component, Input, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.css']
})
export class CartOverlayComponent {
  @Input() item = {};
  items = this.checkoutService.items;
  listIndex = this.checkoutService.findItem(this.item);
  
  constructor(private checkoutService: CheckoutService) { }

  public increase() {
    this.checkoutService.increaseItem(this.listIndex);
    this.items = this.checkoutService.items;
  }

  public decrease() {
    this.checkoutService.decreaseItem(this.listIndex);
    this.items = this.checkoutService.items;
  }

  public add() {
    this.checkoutService.addItem(this.item);
    this.items = this.checkoutService.items;
  }

}
