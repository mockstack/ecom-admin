import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductDataService {

	private _selectedProduct: Product;
	private _dataSetModified: Boolean;

	private productSelectNotifier = new BehaviorSubject(this._selectedProduct);
	private dataSetModifiedNotifier = new BehaviorSubject(this._dataSetModified);

	public selectionStatus = this.productSelectNotifier.asObservable();
	public dataSetModifiedStaus = this.dataSetModifiedNotifier.asObservable();

	constructor() { }

	public get selectedProduct() {
		return this._selectedProduct;
	}

	public set selectedProduct(selectedProduct: Product) {
		this._selectedProduct = selectedProduct;
		this.productSelectNotifier.next(selectedProduct);
	}

	public set dataSetModified(status: Boolean) {
		this._dataSetModified = status;
		this.dataSetModifiedNotifier.next(status);
	}
}
