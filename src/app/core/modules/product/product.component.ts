import { Component, Input } from '@angular/core';

// SERVICE
import { CartService } from '../../services/cart.service';

// COMPONENT
@Component({
  selector: 'module-product-app',
  templateUrl: 'product.component.html',
})

// CLASS
export class ModuleProductComponent {

  @Input() public product: object;

  constructor(private CS: CartService) {
  }

  addCart(i) {
    return this.CS.addToCart(i);
  }

  inCart(i): boolean {
    return this.CS.inCart(i);
  }
}
