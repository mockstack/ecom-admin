import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/ws/product.service';
import { Product } from 'src/app/common/model/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/common/model/category';
import { CategoryService } from 'src/app/common/ws/category.service';
import { PackItem } from 'src/app/common/model/pack-item';
import { Pack } from 'src/app/common/model/pack';
import { PackService } from 'src/app/common/ws/pack.service';

@Component({
	selector: 'app-pack-create',
	templateUrl: './pack-create.component.html',
	styleUrls: ['./pack-create.component.scss']
})
export class PackCreateComponent implements OnInit {

	productList: Product[];
	categoryList: Category[];
	//selectedProducts: Product[] = [];
	packItems: PackItem[] = [];
	pack: Pack;
	packName: string;
	packDescription: string;

	constructor(private productService: ProductService, private categoryService: CategoryService,
		private snackBar: MatSnackBar, private packService: PackService) { }

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
		if (this.packItems.findIndex(item => item.productId === product._id) == -1) {
			const newPackItem = new PackItem();
			newPackItem.productId = product._id;
			newPackItem.productName = product.name;
			newPackItem.quantity = 1;
			this.packItems.push(newPackItem);
		}
	}

	removeProductFromMyPack(product: any) {
		this.packItems = this.packItems.filter(item => item !== product);
	}

	savePack() {
		this.pack = new Pack();
		this.pack.active = true;
		this.pack.description = this.packDescription;
		this.pack.name = this.packName;
		this.pack.packItems = this.packItems;
		this.packService.addDefaultPack(this.pack).subscribe(data=>{
			this.snackBar.open('Pack added successfully', 'OK')
		}, error => {
			this.snackBar.open('Cannot at the pack', 'OK')
		});
	}

}
