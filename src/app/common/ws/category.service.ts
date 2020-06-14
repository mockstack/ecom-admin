import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { env } from 'process';
import { Category } from '../model/category';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	CAT:string = 'category';
	constructor(private httpClient: HttpClient) { }

	/**
	 * Get category names.
	 */
	public getProductCategories(): Observable<Object> {
		return this.httpClient.get(environment.apiUrl + 'category');
	}

	/**Add a new category */
	public addCategory(data: any): Observable<Object> {
		return this.httpClient.post(environment.apiUrl + this.CAT, data);
	}

	/**Delete category */
	public deleteCategory(id: any): Observable<Object> {
		return this.httpClient.delete(environment.apiUrl + this.CAT + '/' + id);
	}

	/**Update a category */
	public updateCategory(category: any): Observable<Object> {
		return this.httpClient.put(environment.apiUrl + this.CAT, category);
	}

}
