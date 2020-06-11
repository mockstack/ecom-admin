import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  public getAllSuppliers(): Observable<Object> {
    return this.httpClient.get(environment.apiUrl + 'supplier');
  }
}
