import { Component, OnInit } from '@angular/core';
import { CheckoutService } from "./../checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items:Array<any> = [];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.items = this.checkoutService.items;
  }

  public increase(index): void {
    this.checkoutService.increaseItem(index);
    this.items = this.checkoutService.items;
  }

  public decrease(index): void {
    this.checkoutService.decreaseItem(index);
    this.items = this.checkoutService.items;
  }

  public remove(item): void {
    this.checkoutService.removeItem(item);
    this.items = this.checkoutService.items;
  }

  public total(): number {
    return this.items.reduce((accumulator, item) => {
      if(typeof accumulator == 'object') {
        accumulator = (accumulator.item.price * accumulator.quantity);
      }
      
      return accumulator + (item.item.price * item.quantity);
    })
  }
}
