import { Component, Input, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.css']
})
export class CartOverlayComponent {
  @Input() item: any = {};
  listIndex = this.checkoutService.findItem(this.item);
  
  constructor(private checkoutService: CheckoutService) { }

  public increase() {
    if (this.item.quantity === 0 ) {
      this.checkoutService.addItem(this.item);
    } else {
      this.checkoutService.increaseItem(this.listIndex);
    }
  }

  public decrease() {
    this.checkoutService.decreaseItem(this.listIndex);
  }

  public add() {
    this.checkoutService.addItem(this.item);
    this.listIndex = this.checkoutService.findItem(this.item);
  }

}
