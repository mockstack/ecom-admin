import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/ws/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

	constructor(private userService: UserService, private router: Router, private cookieService: CookieService) { }

	ngOnInit(): void {
	}

	logout() {
		this.userService.logout().subscribe(data => {
			this.cookieService.deleteAll();
			this.router.navigateByUrl('login');
		})
	}
}
