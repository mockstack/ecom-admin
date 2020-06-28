import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/model/category';
import { Product } from 'src/app/common/model/product';
import { CategoryService } from 'src/app/common/ws/category.service';
import { ProductService } from 'src/app/common/ws/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDataService } from 'src/app/common/data-service/product-data.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	productList: Product[];
	categoryList: Category[];

	constructor(private productService: ProductService, private categoryService: CategoryService,
		private snackBar: MatSnackBar, private productDataService: ProductDataService) { }

	ngOnInit(): void {
		this.categoryService.getProductCategories().subscribe((data: Category[]) => {
			this.categoryList = data;
			//Load product list
			this.productService.getAllProducts().subscribe((data: Product[]) => {
				this.productList = data;
			}, error => {
				this.snackBar.open('Cannot load products', 'OK');
			});
		}, error => {
			this.snackBar.open('Cannot load categories', 'OK');
		});
	}

	addProductToPack(product: Product) {
		this.productDataService.selectedProduct = product;
	}

}
