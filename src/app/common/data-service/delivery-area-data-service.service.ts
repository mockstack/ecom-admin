import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DeliveryAreaDataServiceService {

	private _dataSetModified: Boolean;
	private dataModifiedNotifier = new BehaviorSubject<Boolean>(undefined);
	public dataSetModifiedStatus = this.dataModifiedNotifier.asObservable();

	constructor() { }

	public set dataSetModified(status: Boolean) {
		this._dataSetModified = status;
		this.dataModifiedNotifier.next(status);
	}
}
