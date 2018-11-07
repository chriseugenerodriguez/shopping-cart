import { Component, Input } from '@angular/core';

// COMPONENT
@Component({
	selector: 'module-rating-app',
	templateUrl: 'rating.component.html',
})

// CLASS
export class ModuleRatingComponent {

	@Input() public rating: number;

	constructor() {
	}
}
