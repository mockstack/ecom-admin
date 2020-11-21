import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/common/ws/category.service';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { Product } from 'src/app/common/model/product';
import { Category } from 'src/app/common/model/category';
import { Supplier } from 'src/app/common/model/supplier';
import { ProductService } from 'src/app/common/ws/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDataService } from 'src/app/common/data-service/product-data.service';
import { SupplierDataServiceService } from 'src/app/common/data-service/supplier-data-service.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
	public categoryList = [];
	public supplierList = [];
	public selectedProduct: Product;
	@Input() forEdit: Boolean = false;
	public env = environment;

	//STEPPER
	basicInforFormGroup: FormGroup;
	imageFormGroup: FormGroup;
	associationFormGroup: FormGroup;

	// Measurement units
	mesurementUnits = [{ name: 'Bottle', value: 'bottle' },
	{ name: 'Packet', value: 'packet' }, { name: 'Kg', value: 'kg' },
	{ name: 'Bottle', value: 'bottle' }, { name: 'Unit', value: 'unit' },
	{ name: 'Bundle', value: 'bundle' }, { name: 'Piece', value: 'piece' }]

	@ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

	constructor(private categoryService: CategoryService, private supplierService: SupplierService,
		private formBuilder: FormBuilder, private productService: ProductService, private snackBar: MatSnackBar,
		private productDataService: ProductDataService) {
		// initializa an empty product model
		this.selectedProduct = new Product();
		this.selectedProduct.supplier = new Supplier();
		this.selectedProduct.category = new Category();
	}

	ngOnInit(): void {
		this.basicInforFormGroup = new FormGroup({
			productName: new FormControl('', Validators.required),
			shortDescription: new FormControl('', Validators.required),
			longDescription: new FormControl('', Validators.required),
			unitPriceLKR: new FormControl('', Validators.required),
			unitPriceUSD: new FormControl('', Validators.required),
			measurementUnit: new FormControl('', Validators.required)
		});

		this.imageFormGroup = new FormGroup({});

		this.associationFormGroup = new FormGroup({
			promotion: new FormControl(''),
			stockAvailable: new FormControl(true),
			showToCustomer: new FormControl(true),
			stockMaintain: new FormControl(false),
			category: new FormControl('', Validators.required),
			supplier: new FormControl('', Validators.required)
		});

		this.categoryService.getProductCategories().subscribe((data: object[]) => {
			this.categoryList = data;
		}, error => {

		});

		this.supplierService.getAllSuppliers().subscribe((data: object[]) => {
			this.supplierList = data;
		}, error => {

		});

		this.productDataService.selectionStatus.subscribe((data: Product) => {
			if (data !== undefined && this.forEdit === true) {
				this.selectedProduct = data;
				this.files = [];
			}
		});
	}

	saveProduct(basicInfo: any, imageInfo: any, associateInfo: any) {
		if (this.basicInforFormGroup.valid && this.associationFormGroup.valid && this.imageFormGroup.valid) {
			const formData = new FormData();
			if (this.files.length !== 0) {
				formData.append('product-image', this.files[0].data);
			}
			formData.append('productinfo', JSON.stringify(this.selectedProduct));
			if (this.forEdit) {
				this.productService.updateProduct(formData).subscribe(data => {
					this.openSnackBar('Product updated successfully', 'OK');
					this.productDataService.dataSetModified = true;
				}, error => {
					this.openSnackBar('Product updating failed', 'OK');
				});
			} else {
				this.productService.addProduct(formData).subscribe(data => {
					this.productDataService.dataSetModified = true;
					this.openSnackBar('Product added successfully', 'OK');
					this.resetForm();
				}, error => {
					this.openSnackBar('Product adding failed', 'OK');
				});
			}
		} else {
			this.openSnackBar('Invalid form data contains', 'OK');
		}
	}

	openSnackBar(message: string, action: string) {
		this.snackBar.open(message, action, {
			duration: 2000,
		});
	}

	resetForm() {
		this.basicInforFormGroup.reset();
		this.imageFormGroup.reset();
		this.associationFormGroup.reset();
		this.files = [];
	}

	onClick() {
		const fileUpload = this.fileUpload.nativeElement;
		fileUpload.onchange = () => {
			for (let index = 0; index < fileUpload.files.length; index++) {
				const file = fileUpload.files[index];
				this.files.push({ data: file, inProgress: false, progress: 0 });
			}
		};
		fileUpload.click();
	}

}
