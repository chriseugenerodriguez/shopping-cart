import { Component, OnInit, Input } from '@angular/core';

// REDUX
import { Observable } from 'rxjs/internal/Observable';

// SERVICES
import { CartService } from '../../services/cart.service';

// COMPONENT
@Component({
	selector: 'module-cart-app',
	templateUrl: 'cart.component.html',
})

// CLASS
export class ModuleCartComponent implements OnInit {

	@Input() public data: object;

	constructor(private CS: CartService) {
	}
	ngOnInit(): void {
	}

	public totalQuantity(): Observable<number> {
		return this.CS.getTotalQuantity();
	}
}
