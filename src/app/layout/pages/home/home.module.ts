import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// RELATED
import { HomeComponent } from './home.component';

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
		HomeComponent,
	],
	exports: [
		HomeComponent,
	]
})
export class HomeModule { }
