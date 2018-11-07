import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// RELATED
import { CategoryComponent } from './category.component';

// MODULE
import { ModuleProductModule } from '../../../core';

// IMPORT MODULES, DECLARE COMPONENTS
@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HttpModule,
		HttpClientModule,

		// MODULE
		ModuleProductModule,
	],
	declarations: [
		CategoryComponent,
	],
	exports: [
		CategoryComponent,
	]
})
export class CategoryModule { }
