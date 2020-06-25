import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	private PREFIX: string = "iuser";
	constructor(private httpClient: HttpClient) { }

	/**Login a user */
	public login(userName: string, password: string): Observable<object> {
		let login = { userName: userName, password: password };
		return this.httpClient.post(environment.apiUrl + this.PREFIX + '/login', login, { withCredentials: true });
	}

	public validateSession(): Observable<object> {
		return this.httpClient.get(environment.apiUrl + this.PREFIX + '/validSession', { withCredentials: true });
	}

	public logout(): Observable<object> {
		return this.httpClient.post(environment.apiUrl + this.PREFIX + '/logout', undefined, { withCredentials: true });
	}

}
