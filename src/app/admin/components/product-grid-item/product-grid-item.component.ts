import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/common/model/product';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product-grid-item',
	templateUrl: './product-grid-item.component.html',
	styleUrls: ['./product-grid-item.component.scss']
})
export class ProductGridItemComponent implements OnInit {

	environment = environment;
	@Input() item: Product;
	constructor() { }

	ngOnInit(): void {

	}

	editProductInfo(item: Product) {
		console.log(item);
	}

	viewProductInfo(item: Product) {
		console.log(item);
	}

}
