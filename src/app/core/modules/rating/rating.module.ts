import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { ModuleRatingComponent } from './rating.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ModuleRatingComponent
	],
	exports: [
		ModuleRatingComponent
	]
})
export class ModuleRatingModule { }
