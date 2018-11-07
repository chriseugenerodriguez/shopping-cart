import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// PAGES
import { CategoryComponent } from './layout/pages/category/category.component';
import { CartComponent } from './layout/pages/cart/cart.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: CategoryComponent, pathMatch: 'full' },
			{ path: 'cart', component: CartComponent }

		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
