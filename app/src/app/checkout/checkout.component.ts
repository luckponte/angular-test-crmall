import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from "./../checkout.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Array<any> = [];
  bought: boolean = false;

  constructor(private checkoutService: CheckoutService, private location: Location, private router: Router) { }

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
      return accumulator + (item.price * item.quantity);
    }, 0);
  }

  public buy(): void {
    this.checkoutService.clear();
    this.bought = true;

    // Simulate latency to purchase API
    setTimeout(() => {
      this.bought = false;
      this.router.navigate(['/']);
    }, 1000);
  }

  public routeBack(): void {
    this.location.back();
  }
}
