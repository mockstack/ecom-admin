import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class SupplierService {

	private ROOT_URL = environment.apiUrl + 'supplier';
	constructor(private httpClient: HttpClient) { }

	/**
	 * Get all suppliers.
	 */
	public getAllSuppliers(): Observable<Object> {
		return this.httpClient.get(this.ROOT_URL);
	}

	/**
	 * Add a new supplier.
	 * @param data Supplier model
	 */
	public addSupplier(data: any): Observable<Object> {
		return this.httpClient.post(this.ROOT_URL, data);
	}
}
