import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/common/ws/category.service';
import { Category } from 'src/app/common/model/category';
import { CategoryDataServiceService } from 'src/app/common/data-service/category-data-service.service';

@Component({
	selector: 'app-category-view',
	templateUrl: './category-view.component.html',
	styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
	//displayColumns: string[] = ['name', 'description', 'active', 'action_edit', 'action_delete'];
	displayColumns: string[] = ['name', 'description', 'active', 'action_delete'];

	categoryList: Category[] = [];
	selectedCategory: Category;

	@Output() categorySelect = new EventEmitter<any>();

	constructor(private snakBar: MatSnackBar, private categoryService: CategoryService,
		private categoryDataService: CategoryDataServiceService) { }

	ngOnInit(): void {
		this.getProductCategories();

		this.categoryDataService.dataSetModifiedStatus.subscribe((data: Boolean) => {
			this.getProductCategories();
		});
	}

	getProductCategories() {
		this.categoryService.getProductCategories().subscribe((data: Category[]) => {
			this.categoryList = data;
		}, error => {
			this.openDialog(error, 'OK');
		})
	}

	editCategoryButtonClick(itemSelectEvent: any) {
		this.categorySelect.emit(itemSelectEvent);
	}

	deleteCategory(item: Category) {
		this.categoryService.deleteCategory(item._id).subscribe((data: Category) => {
			this.snakBar.open('Deleted successfully', 'OK');
			//remove the item from the list
			this.categoryList = this.categoryList.filter(item => item._id !== data._id)
		}, error => {
			this.snakBar.open('some error', 'OK');
		})
	}

	openDialog(action, obj) {
		this.snakBar.open('Action is being done', 'ok', {
			duration: 2000,
		});
	}

}
