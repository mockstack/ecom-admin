import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { Supplier } from 'src/app/common/model/supplier';
import { SupplierDataServiceService } from 'src/app/common/data-service/supplier-data-service.service';

@Component({
	selector: 'app-supplier-view',
	templateUrl: './supplier-view.component.html',
	styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {
	//displayColumns: string[] = ['contact_title', 'contact_name', 'company_name', 'action_edit', 'action_delete'];
	displayColumns: string[] = ['contact_title', 'contact_name', 'company_name', 'action_delete'];
	supplierList: Supplier[] = [];

	constructor(private snakBar: MatSnackBar, private supplierService: SupplierService,
		private snackBar: MatSnackBar, private supplierDataService: SupplierDataServiceService) { }

	ngOnInit(): void {
		this.getAllSuppliers();
		this.supplierDataService.dataSetModifiedStatus.subscribe(data => {
			this.getAllSuppliers();
		});
	}

	getAllSuppliers() {
		this.supplierService.getAllSuppliers().subscribe((data: Supplier[]) => {
			this.supplierList = data;
		}, error => {
			this.snakBar.open('Cannot load suppliers', "OK");
		});
	}

	editSupplier(supplier: Supplier) {
		//this.supplierDataService.selectedSupplier = supplier;
	}

	deleteSupplier(supplier: Supplier) {
		this.supplierDataService.selectedSupplier = supplier;
	}

	openDialog(action, obj) {
		this.snakBar.open('Action is being done', 'ok', {
			duration: 2000,
		});
	}

}
