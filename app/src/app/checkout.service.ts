import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  items: Array<any> = [
    {
      id: 1,
      title: 'Foo',
      price: 5.9,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Bar',
      price: 2.99,
      quantity: 2,
    },
    {
      id: 3,
      title: 'Baz',
      price: 9.99,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Baq',
      price: 4.99,
      quantity: 3,
    },
    {
      id: 5,
      title: 'Biz',
      price: 8.99,
      quantity: 2,
    },
  ];

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

  public findItem(item): string {
    for (const index in this.items) {
      if (item.id === this.items[index].id) {
        return index;
      }
    }

    return null;
  }
}
