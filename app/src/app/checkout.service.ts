import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  items: Array<any> = [];

  constructor() { }

  public addItem(item: any): void {
    let isNew = true;

    this.items.forEach(el => {
      if (el.item.id == item.id) {
        el.quantity--;
        isNew = false;
      }
    });

    if (isNew) {
      this.items.push({
        item: item,
        quantity: 1,
      });
    }
  }

  public removeItem(item: any): void {
    this.items = this.items.filter((val) => val.item.id != item.id);
  }

  public increaseItem(index: number): void {
    this.items[index].quantity++;
  }

  public decreaseItem(index: number): void {
    this.items[index].quantity--;
    if (this.items[index].quantity === 0) {
      this.removeItem(this.items[index]);
    }
  }
}
