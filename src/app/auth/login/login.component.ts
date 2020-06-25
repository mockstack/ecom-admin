import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/common/ws/user.service';
import * as CryptoJS from 'crypto-js';
import { CryptoService } from 'src/app/common/data-service/crypto.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	error: string;

	constructor(private userService: UserService, private cryptoService: CryptoService,
		private router: Router, private cookieService: CookieService) { }

	ngOnInit() {
		this.loginForm = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	submit() {
		if (this.loginForm.valid) {

			let name = this.loginForm.value.username;
			let pw = this.cryptoService.set(environment.key, this.loginForm.value.password);
			this.userService.login(name, pw).subscribe(data => {
				this.router.navigateByUrl('dashboard')
			}, error => {
				this.error = error.error;
			});
		} else {
			console.log(this.loginForm.valid)
		}
	}

}
