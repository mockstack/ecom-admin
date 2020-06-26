import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { Supplier } from 'src/app/common/model/supplier';
import { SupplierDataServiceService } from 'src/app/common/data-service/supplier-data-service.service';

@Component({
	selector: 'app-supplier-list',
	templateUrl: './supplier-list.component.html',
	styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent {
	supplierList: Supplier[] = [];
	@Output() supplierSelected = new EventEmitter<any>();

	constructor(private snakBar: MatSnackBar, private supplierService: SupplierService,
		private snackBar: MatSnackBar, private supplierDataService: SupplierDataServiceService) { }

	ngOnInit(): void {
		this.supplierService.getAllSuppliers().subscribe((data: Supplier[]) => {
			this.supplierList = data;
		}, error => {
			this.snakBar.open('Cannot load suppliers', "OK");
		})
	}

	loadSupplierData(supplier: Supplier) {
		this.supplierDataService.selectedSupplier = supplier;
	}

}
