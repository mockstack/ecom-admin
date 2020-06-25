import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/ws/user.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
