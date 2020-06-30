import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { PackComponent } from './pages/pack/pack.component';
import { ProductComponent } from './pages/product/product.component';
import { AdminComponent } from './admin.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CityComponent } from './pages/city/city.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: 'pack', component: PackComponent },
	  { path: 'supplier', component: SupplierComponent },
	  { path: 'city', component: CityComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
