import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// RELATED
import { ModuleProductComponent } from './product.component';

// MODULES
import { ModuleRatingModule } from '../rating/rating.module';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		FormsModule,

		// RATING
		ModuleRatingModule
	],
	declarations: [
		ModuleProductComponent,
	],
	exports: [
		ModuleProductComponent,
	]
})
export class ModuleProductModule { }
