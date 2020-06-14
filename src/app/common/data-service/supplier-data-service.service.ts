import { Injectable } from '@angular/core';
import { Supplier } from '../model/supplier';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SupplierDataServiceService {

	private _selectedSupplier: Supplier;

	private notifier = new BehaviorSubject(this._selectedSupplier);
	public selectionStatus = this.notifier.asObservable();

	constructor() { }

	public get selectedSupplier() {
		return this._selectedSupplier;
	}

	public set selectedSupplier(supplier: Supplier) {
		this._selectedSupplier = supplier;
		this.notifier.next(supplier);
	}
}
