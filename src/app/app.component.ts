import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './common/ws/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ecom-admin';

	constructor(private router: Router, private userService: UserService, private cookieService: CookieService) {
	}

	ngOnInit(): void {
		this.userService.validateSession().subscribe(data => {
			this.router.navigateByUrl('dashboard');
		}, error => {
			this.router.navigateByUrl('login')
		})
	}
}
