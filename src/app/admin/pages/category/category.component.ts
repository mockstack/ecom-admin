import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/model/category';
import { MatDialog } from '@angular/material/dialog';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	selectedCategory: Category;

	constructor(private matDialog: MatDialog) { }

	ngOnInit(): void {
	}

	categorySelectEvent(event: any) {
		this.selectedCategory = event.item;
	}


	showNewCategoryDialog() {
		const dialogRef = this.matDialog.open(CategoryFormComponent, {width: '400px'});
	}
}
