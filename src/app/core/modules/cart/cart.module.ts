import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// RELATED
import { ModuleCartComponent } from './cart.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ModuleCartComponent
	],
	exports: [
		ModuleCartComponent
	]
})
export class ModuleCartModule { }
