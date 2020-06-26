import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { Supplier } from 'src/app/common/model/supplier';
import { SupplierDataServiceService } from 'src/app/common/data-service/supplier-data-service.service';
import { CategoryService } from 'src/app/common/ws/category.service';
import { Category } from 'src/app/common/model/category';
import { CategoryDataServiceService } from 'src/app/common/data-service/category-data-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	categoryList: Category[] = [];
	@Output() supplierSelected = new EventEmitter<any>();

	constructor(private snakBar: MatSnackBar, private categoryService: CategoryService,
		private snackBar: MatSnackBar, private categoryDataService: CategoryDataServiceService) { }

	ngOnInit(): void {
		this.categoryService.getProductCategories().subscribe((data: Category[]) => {
			this.categoryList = data;
		}, error => {
			this.snakBar.open('Cannot load suppliers', "OK");
		})
	}

	loadSupplierData(category: Category) {
		this.categoryDataService.selectedCategory = category;
	}


}
