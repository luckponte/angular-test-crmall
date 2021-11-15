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
      if (el.id == item.id) {
        el.quantity--;
        isNew = false;
      }
    });

    if (isNew) {
      item.quantity = 1;
      this.items.push(item);
    }
  }

  public removeItem(item: any): void {
    this.items = this.items.filter((val) => val.id != item.id);
  }

  public increaseItem(index: string): void {
    this.items[index].quantity++;
  }

  public decreaseItem(index: string): void {
    this.items[index].quantity--;
    if (this.items[index].quantity === 0) {
      this.removeItem(this.items[index]);
    }
  }

  public getItem(index: string): any {
    return this.items[index];
  }

  public findItem(item): string {
    for (const index in this.items) {
      if (item.id === this.items[index].id) {
        return index;
      }
    }

    return null;
  }

  public clear(): void {
    this.items = [];
  }
}
