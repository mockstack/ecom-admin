import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
		path: '',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'db',
		loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
	},
	{
		path: 'inv',
		loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
	},
	{
		path: 'order',
		loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
	},
	{
		path: 'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
