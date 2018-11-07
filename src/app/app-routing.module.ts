import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
	CategoryComponent,
} from './layout/index';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: CategoryComponent, pathMatch: 'full' }
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
