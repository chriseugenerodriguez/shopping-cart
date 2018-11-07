import { Component, OnInit, Input } from "@angular/core";

// COMPONENT
@Component({
	selector: 'module-cart-app',
	templateUrl: 'cart.component.html',
})

// CLASS
export class ModuleCartComponent implements OnInit {

  @Input() public data: object;
  total: number;
  qty: number;

  constructor(){
    this.qty = 0;
    this.total = 0;
  }
  ngOnInit(): void {
  }

  drop(i) {
    i.preventDefault();

    // GET DATA
    this.total += Number(i.dataTransfer.getData("price") * i.dataTransfer.getData("qty"));
    this.qty += Number(i.dataTransfer.getData("qty"));
  }

  dragover(i) {
    i.preventDefault();
    // Set the dropEffect to move
    i.dataTransfer.dropEffect = "move"
  }
}
