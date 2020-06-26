import { Injectable } from '@angular/core';
import { Supplier } from '../model/supplier';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SupplierDataServiceService {

	private _selectedSupplier: Supplier;
	private _dataSetModified: Boolean;

	private dataModifiedNotifier = new BehaviorSubject(this._dataSetModified);
	private notifier = new BehaviorSubject(this._selectedSupplier);
	public selectionStatus = this.notifier.asObservable();
	public dataSetModifiedStatus = this.dataModifiedNotifier.asObservable();

	constructor() { }

	public get selectedSupplier() {
		return this._selectedSupplier;
	}

	public set selectedSupplier(supplier: Supplier) {
		this._selectedSupplier = supplier;
		this.notifier.next(supplier);
	}

	public set dataSetModified(status: Boolean) {
		this._dataSetModified = status;
		this.dataModifiedNotifier.next(status);
	}
}
