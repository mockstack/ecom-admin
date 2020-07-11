import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './pages/product/product.component';
import { PackComponent } from './pages/pack/pack.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdminComponent } from './admin.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { SupplierViewComponent } from './components/supplier-view/supplier-view.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductGridViewComponent } from './components/product-grid-view/product-grid-view.component';
import { PackCreateComponent } from './components/pack-create/pack-create.component';
import { PackViewComponent } from './components/pack-view/pack-view.component';
import { ProductCategoryFilterPipe } from './pipe/product-category-filter.pipe';
import { SupplierListComponent } from './components/supplier-list/supplier-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CityComponent } from './pages/city/city.component';
import { CityViewComponent } from './components/city-view/city-view.component';
import { DeliveryAreaViewComponent } from './components/delivery-area-view/delivery-area-view.component';
import { DeliveryChargeViewComponent } from './components/delivery-charge-view/delivery-charge-view.component';

@NgModule({
	declarations: [
		DashboardComponent,
		ProductComponent,
		PackComponent,
		CategoryComponent,
		AdminComponent,
		CategoryViewComponent,
		CategoryFormComponent,
		SupplierComponent,
		SupplierFormComponent,
		SupplierViewComponent,
		ProductFormComponent,
		ProductGridItemComponent,
		ProductGridViewComponent,
		PackCreateComponent,
		PackViewComponent,
		ProductCategoryFilterPipe,
		SupplierListComponent,
		CategoryListComponent,
		ProductListComponent,
		CityComponent,
		CityViewComponent,
		DeliveryAreaViewComponent,
		DeliveryChargeViewComponent],
	imports: [
		CommonModule,
		AdminRoutingModule,
		FormsModule,
		A11yModule,
		ClipboardModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		PortalModule,
		ScrollingModule,
		ReactiveFormsModule
	], exports: [
		A11yModule,
		ClipboardModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		PortalModule,
		ScrollingModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class AdminModule { }
