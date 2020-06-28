import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/ws/product.service';
import { Product } from 'src/app/common/model/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDataService } from 'src/app/common/data-service/product-data.service';

@Component({
	selector: 'app-product-grid-view',
	templateUrl: './product-grid-view.component.html',
	styleUrls: ['./product-grid-view.component.scss']
})
export class ProductGridViewComponent implements OnInit {

	productList: Product[] = [];

	constructor(private productService: ProductService, private snackBar: MatSnackBar,
		private productDataService: ProductDataService) { }

	ngOnInit(): void {
		this.getAllProducts();

		this.productDataService.dataSetModifiedStaus.subscribe(data => {
			this.getAllProducts();
		}, error => {
			this.snackBar.open('Cannot load update product list', 'OK');
		})
	}

	private getAllProducts() {
		this.productService.getAllProducts().subscribe((data: Product[]) => {
			this.productList = data;
		}, error => {
			this.openSnackBar(error, 'OK');
		});
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

}
