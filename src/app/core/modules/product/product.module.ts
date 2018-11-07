import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// RELATED
import { ModuleProductComponent } from './product.component';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		HttpModule,
		HttpClientModule,

	],
	declarations: [
		ModuleProductComponent,


	],
	exports: [
		ModuleProductComponent,
	]
})
export class ModuleProductModule { }
