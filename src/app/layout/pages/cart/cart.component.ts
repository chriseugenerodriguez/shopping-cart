import { Component, OnInit } from '@angular/core';

// SEO
import { Title, Meta } from '@angular/platform-browser';

// HTTP
import { HttpClient } from '@angular/common/http';

// INTERFACE
import { Item } from 'src/app/core';


// COMPONENT
@Component({
  selector: 'cart-app',
  templateUrl: 'cart.component.html',
})

// CLASS
export class CartComponent implements OnInit {

  // ITEMS
  products: Item;

  constructor(title: Title, meta: Meta, private http: HttpClient) {
    title.setTitle('Cart - Vicky\'s');
    meta.addTags([
      { name: 'description', content: 'Cart page to see and update your products.' },
    ]);


  }
  ngOnInit(): void {
  }

}
