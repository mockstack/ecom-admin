import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataServiceService {

	private _selectedCategory: Category;
	private _dataSetModified: Boolean;

	private dataModifiedNotifier = new BehaviorSubject(this._dataSetModified);
	private notifier = new BehaviorSubject(this._selectedCategory);
	public selectionStatus = this.notifier.asObservable();
	public dataSetModifiedStatus = this.dataModifiedNotifier.asObservable();

	constructor() { }

	public get selectedCategory() {
		return this._selectedCategory;
	}

	public set selectedCategory(category: Category) {
		this._selectedCategory = category;
		this.notifier.next(category);
	}

	public set dataSetModified(status: Boolean) {
		this._dataSetModified = status;
		this.dataModifiedNotifier.next(status);
	}
}
