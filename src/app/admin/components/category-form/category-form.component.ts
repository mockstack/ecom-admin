import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/common/model/category';
import { CategoryService } from 'src/app/common/ws/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDataServiceService } from 'src/app/common/data-service/category-data-service.service';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
	public categoryForm: FormGroup;
	public selectedCategory: Category;
	@Input() forEdit: Boolean = false;

	constructor(private categoryService: CategoryService, private snackBar: MatSnackBar,
		private categoryDataService: CategoryDataServiceService) {
		this.selectedCategory = new Category();
	}

	ngOnInit(): void {
		this.categoryForm = new FormGroup({
			name: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
			active: new FormControl()
		});

		this.categoryDataService.selectionStatus.subscribe((data: Category) => {
			if (data !== undefined) {
				this.selectedCategory = data;
			}
		}, error => { })

	}

	saveCategory(formValues: any) {
		if (this.categoryForm.valid) {
			if (this.forEdit) {
				//update
				formValues._id = this.selectedCategory._id;
				this.categoryService.updateCategory(formValues).subscribe(data => {
					this.showSnackBar('Category updated successfully', 'OK');
					this.categoryDataService.dataSetModified = true;
				}, error => {
					this.snackBar.open(error.error.errmsg, 'OK');
				});
			} else {
				//insert
				this.categoryService.addCategory(formValues).subscribe(data => {
					this.showSnackBar('Category added successfully', 'OK');
					this.categoryDataService.dataSetModified = true;
				}, error => {
					this.snackBar.open(error.error.errmsg, 'OK');
				});
			}
		} else {
			this.showSnackBar('Cannot update, invalid form data', 'OK');
		}

	}



	resetForm() {
		this.categoryForm.reset();
	}

	ngOnChanges(changes: SimpleChanges) {
		this.selectedCategory = new Category().deserialize(changes.selectedCategory.currentValue);
		console.log(this.selectedCategory)
	}

	showSnackBar(message, action) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

}
