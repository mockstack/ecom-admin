import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/common/ws/category.service';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { Product } from 'src/app/common/model/product';
import { Category } from 'src/app/common/model/category';
import { Supplier } from 'src/app/common/model/supplier';
import { ProductService } from 'src/app/common/ws/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
	public categoryList = [];
	public supplierList = [];

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
		private formBuilder: FormBuilder, private productService: ProductService, private snackBar: MatSnackBar) { }

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
	}

	saveProduct(basicInfo: any, imageInfo: any, associateInfo: any) {
		if (this.basicInforFormGroup.valid && this.associationFormGroup.valid && this.imageFormGroup.valid) {
			const supplier: Supplier = new Supplier().deserialize(associateInfo.supplier);
			const category: Category = new Category().deserialize(associateInfo.category);
			const product: Product = new Product().deserialize(basicInfo);
			product.category = category._id;
			product.supplier = supplier._id;
			product.showToCustomer = associateInfo.showToCustomer;
			product.stockAvailable = associateInfo.stockAvailable;
			product.promotions = associateInfo.promotion;

			const formData = new FormData();
			formData.append('product-image', this.files[0].data);
			formData.append('productinfo', JSON.stringify(product));
			this.productService.addProduct(formData).subscribe(data => {
				this.openSnackBar('Product added successfully', 'OK');
				this.resetForm();
			}, error => {
				this.openSnackBar('Product adding failed', 'OK');
				console.log(error);
			});
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
