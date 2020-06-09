import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecom-admin';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    // validate the user session
    // get the user role and forward to the correct dashboard
    // currently we move to admin dashboard
    this.router.navigateByUrl('db/admin');
  }
}
