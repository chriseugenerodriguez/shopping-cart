import { Component, Input, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

// INTERFACE
import { Dropdown } from '../../interfaces/dropdown.interface';


// COMPONENT
@Component({
  selector: 'module-product-app',
  templateUrl: 'product.component.html',
})

// CLASS
export class ModuleProductComponent implements AfterViewInit {

  // CHILDREN
  @ViewChildren('item') public items: QueryList<ElementRef>;

  @Input() public name: string;
  @Input() public price: number;
  @Input() public image: string;

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
    this._randomQty();
  }

  dragstart(a, b, c) {
    const dt = a.dataTransfer;
    const img = new Image();

    dt.dropEffect = 'move';
    dt.setData('price', b);
    dt.setData('qty', c);

    img.src = a.srcElement.currentSrc;
    dt.setDragImage(img, 10, 10);
  }

  ngAfterViewInit() {
    this.items.forEach(r => {
      this.length = r.nativeElement.children.length;
    });
  }

  dragend() {
    for (let r = 0; r < this.length; r++) {
      this._randomQty();
    }
  }

  private _randomQty() {
    this.selectedQuantity = null;
    this.qty = null;

    // RANDOM QTY
    const a = this._getRandom(20);

    this.selectedQuantity = { id: a, name: a };

    // DEFINED QTY
    this.qty = this.selectedQuantity.id;

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

  private _getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
