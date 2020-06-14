import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/common/model/category';
import { CategoryService } from 'src/app/common/ws/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-category-form',
	templateUrl: './category-form.component.html',
	styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
	public categoryForm: FormGroup;
	// get the selected category
	@Input() selectedCategory: Category;
	// publish category modifications.
	@Output() categoryModified = new EventEmitter<any>();
	categoryName: string = '';

	constructor(private categoryService: CategoryService, private snackBar: MatSnackBar) { }

	ngOnInit(): void {
		this.categoryForm = new FormGroup({
			name: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
			active: new FormControl()
		});

		if (this.selectedCategory !== undefined) {
			this.categoryName = this.selectedCategory.name;
		}

	}

	saveCategory(formValues: any) {
		if (this.categoryForm.valid) {
			console.log(formValues)
			if (this.selectedCategory._id !== undefined) {
				//update
				formValues._id = this.selectedCategory._id;
				this.categoryService.updateCategory(formValues).subscribe(data => {
					this.showSnackBar('Category added successfully', 'OK');
					this.categoryModified.emit()
				}, error => {
					this.snackBar.open(error.error.errmsg, 'OK');
				});
			} else {
				//insert
				this.categoryService.addCategory(formValues).subscribe(data => {
					this.showSnackBar('Category added successfully', 'OK');
					this.categoryModified.emit()
				}, error => {
					this.snackBar.open(error.error.errmsg, 'OK');
				});
			}

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
