import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

// INTERFACE
import { Item } from '../interfaces/item.interface';


@Injectable()
export class CartService {
  private cartObj = [];

  constructor(
    private http: HttpClient) {
    if (localStorage.getItem('cart') !== null) {
      this.cartObj = JSON.parse(localStorage.getItem('cart'));
    }
  }

  public inCart(item: Item): boolean {
    const a = this.cartObj.find(r => r.id === item.id);
    let b = false;

    if (a) {
      b = true;
    }

    return b;
  }

  public addToCart(item: Item) {
    const e = this.cartObj.find(r => r.id === item.id);
    const i = this.cartObj.indexOf(item);

    if (e) {
      e.quantity = e.quantity + item.quantity;
      this.cartObj[i] = e;
    } else {
      item.quantity = 1;
      this.cartObj.push(item);
    }

    localStorage.set('cart', this.cartObj);
  }

  public removeFromCart(item: Item) {
    const a = this.cartObj.filter(i => i.id !== item.id);
    let b;

    if (this.cartObj.length === 1) {
      b = [];
      this.cartObj = b;
    } else {
      b = a;
      this.cartObj = b;
    }

    localStorage.set('cart', b);
  }

  public getTotalAmount(): Observable<number> {
    const a = localStorage.get('cart');
    let b: any;
    let c: any;
    let d: any;

    a.subscribe(r => {
      b = r.map(i => Math.ceil(i.price * 100) / 100).reduce((prev, next) => prev + next, 0);
      c = r.map(i => i.quantity).reduce((prev, next) => prev + next, 0);
      d = Math.ceil((b * c) * 100) / 100;
    });
    return d;
  }
}
