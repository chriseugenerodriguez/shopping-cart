import { Component, Input, AfterViewInit } from '@angular/core';

// INTERFACE
import { Dropdown } from '../../interfaces/dropdown.interface';


// COMPONENT
@Component({
  selector: 'module-product-app',
  templateUrl: 'product.component.html',
})

// CLASS
export class ModuleProductComponent implements AfterViewInit {

  @Input() public product: object;

  length: number;
  qty: number;

  // DROPDOWN
  selectedQuantity: Dropdown;
  quantity = Array(20)
    .fill(1)
    .map((x, i) => {
      return {
        id: i,
        name: i
      };
    });

  constructor() {
  }

  ngAfterViewInit() {

  }

  onSelect(a) {
    this.selectedQuantity = null;
    for (let i = 0; i < this.quantity.length; i++) {
      if (this.quantity[i].id === Number(a)) {
        this.selectedQuantity = this.quantity[i];
        this.qty = this.quantity[i].id;
      }
    }
  }
}
