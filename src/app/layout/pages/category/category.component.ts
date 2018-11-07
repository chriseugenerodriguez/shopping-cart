import { Component, OnInit } from "@angular/core";

// SEO
import { Title, Meta } from "@angular/platform-browser";

// HTTP
import { HttpClient } from "@angular/common/http";

// INTERFACE
import { Item } from "src/app/core";


// COMPONENT
@Component({
	selector: 'category-app',
	templateUrl: 'category.component.html',
})

// CLASS
export class CategoryComponent implements OnInit {

	// ITEMS
	products: Item;

	constructor(title: Title, meta: Meta, private http: HttpClient) {
		title.setTitle('Drag and Drop Interface - Vicky\'s');
		meta.addTags([
			{ name: 'description', content: 'Making it simple and easy drag and drop products into cart.' },
		]);

		this.http.get('/assets/json/products.json').subscribe(r => {
			this.products = r['Products'];
		});

	}
	ngOnInit(): void {
	}

}
