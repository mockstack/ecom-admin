import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/ws/product.service';
import { Product } from 'src/app/common/model/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/common/model/category';
import { CategoryService } from 'src/app/common/ws/category.service';

@Component({
	selector: 'app-pack-create',
	templateUrl: './pack-create.component.html',
	styleUrls: ['./pack-create.component.scss']
})
export class PackCreateComponent implements OnInit {

	productList: Product[];
	categoryList: Category[];
	selectedProducts: Product[] = [];

	constructor(private productService: ProductService, private categoryService: CategoryService,
		private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.categoryService.getProductCategories().subscribe((data: Category[]) => {
			this.categoryList = data;
			console.log(data);
			//Load product list
			this.productService.getAllProducts().subscribe((data: Product[]) => {
				this.productList = data;
				console.log(data);
			}, error => {
				this.snackBar.open('Cannot load products', 'OK');
			});
		}, error => {
			this.snackBar.open('Cannot load categories', 'OK');
		});
	}

	addProductToPack(product: Product) {
		if (this.selectedProducts.findIndex(item => item === product) == -1) {
			this.selectedProducts.push(product);
		}
	}

	removeProductFromMyPack(product: any) {
		this.selectedProducts = this.selectedProducts.filter(item => item !== product);
	}

}
