import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDashboardComponent } from './pages/order-dashboard/order-dashboard.component';
import { OrderViewComponent } from './pages/order-view/order-view.component';


const routes: Routes = [
	{
		path: '', component: OrderComponent, children: [
			{ path: 'odashboard', component: OrderDashboardComponent },
			{ path: 'orders', component: OrderViewComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OrderRoutingModule { }
