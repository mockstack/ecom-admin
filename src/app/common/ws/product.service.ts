import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private PRODUCT = "product"

	constructor(private httpClient: HttpClient) { }

	/**
	 * Get product names.
	 */
	public getProductNames(): any {
		return this.httpClient.get(environment.apiUrl + this.PRODUCT + '/names');
	}

	/**
	 * Get products by category id.
	 */
	public getProductsByCategoryId(id): Observable<Object> {
		return this.httpClient.get(environment.apiUrl + this.PRODUCT + '/byCategory/' + id);
	}

	/**Add a new product */
	public addProduct(formData): Observable<any> {
		return this.httpClient.post(environment.apiUrl + this.PRODUCT, formData);
	}

	/**Get all products */
	public getAllProducts(): Observable<Object> {
		return this.httpClient.get(environment.apiUrl + this.PRODUCT);
	}

	/**Update product */
	public updateProduct(formData): Observable<any> {
		return this.httpClient.put(environment.apiUrl + this.PRODUCT, formData);
	}
}
