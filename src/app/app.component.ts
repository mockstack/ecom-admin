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
		this.router.events.subscribe(data => {
			console.log(data)
		})
		this.userService.validateSession().subscribe((data: any) => {
			console.log(data)
			if (data.user.role === 'ADMIN') {
				//this.router.navigateByUrl('dashboard')
			} else if (data.user.role === 'ORDER') {
				//this.router.navigateByUrl('odashboard')
			}
		}, error => {
			this.router.navigateByUrl('login')
		})
	}
}
