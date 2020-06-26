import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from 'src/app/common/model/contact';
import { Location } from 'src/app/common/model/location';
import { Supplier } from 'src/app/common/model/supplier';
import { SupplierDataServiceService } from 'src/app/common/data-service/supplier-data-service.service';

@Component({
	selector: 'app-supplier-form',
	templateUrl: './supplier-form.component.html',
	styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {

	TITLES = [{ name: 'Mr', value: 'Mr' }, { name: 'Miss', value: 'Miss' }, { name: 'Ms', value: 'Ms' }, { name: 'Mrs', value: 'Mrs' }];
	DISTRICTS = [{ name: 'Kalutara', value: 'Kalutara' }, { name: 'Colombo', value: 'Colombo' }, { name: 'Gampaha', value: 'Gampaha' }];

	public supplierForm: FormGroup;
	public selectedSupplier: Supplier;
	@Input() forEdit: Boolean = false;

	constructor(private supplierService: SupplierService, private snackBar: MatSnackBar,
		private supplierDataService: SupplierDataServiceService) {
		this.selectedSupplier = new Supplier();
		this.selectedSupplier.contact = new Contact();
		this.selectedSupplier.contact.location = new Location();
	}

	ngOnInit(): void {
		this.supplierForm = new FormGroup({
			title: new FormControl('', Validators.required),
			name: new FormControl('', Validators.required),
			company: new FormControl('', Validators.required),
			telephone: new FormControl('', Validators.required),
			email: new FormControl('', Validators.required),
			fax: new FormControl(''),
			postalcode: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			city: new FormControl('', Validators.required),
			district: new FormControl('', Validators.required)
		});

		this.selectedSupplier.contact_name = ''

		this.supplierDataService.selectionStatus.subscribe((data: Supplier) => {
			if (data !== undefined) {
				console.log('item selected' + JSON.stringify(data))
				this.selectedSupplier = this.supplierDataService.selectedSupplier;
			}
		}, error => {
			console.log(JSON.stringify(error));
		});
	}

	saveSupplier(formValues: any) {
		console.log('forEdit=' + this.forEdit);
		if (this.forEdit) {
			this.supplierService.updateSupplier(this.selectedSupplier).subscribe(data => {
				this.supplierDataService.dataSetModified = true;
				this.snackBar.open("Successfullyupdated the supplier", "OK")
			}, error => {
				this.snackBar.open("Cannot update", "OK")
			});
		} else {
			if (this.supplierForm.valid) {
				let location = new Location();
				location.address = formValues.address;
				location.city = formValues.city;
				location.district = formValues.district;

				let contact = new Contact();
				contact.email = formValues.email;
				contact.fax = formValues.fax;
				contact.postal_code = formValues.postalcode;
				contact.telephone = formValues.telephone;
				contact.location = location;

				let supplier = new Supplier();
				supplier.company_name = formValues.company;
				supplier.contact_title = formValues.title;
				supplier.contact_name = formValues.name;
				supplier.contact = contact;

				console.log(supplier)
				this.supplierService.addSupplier(supplier).subscribe(data => {
					this.supplierDataService.dataSetModified = true;
					this.snackBar.open('Successfully added the supplier', 'OK');
					this.resetForm();
				}, error => {
					this.snackBar.open('Cannot add the supplier', 'OK');
				});
			}
		}
	}

	resetForm() {
		this.supplierForm.reset();
	}

}
