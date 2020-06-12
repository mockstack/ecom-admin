import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/common/ws/category.service';
import { SupplierService } from 'src/app/common/ws/supplier.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

	productForm: FormGroup;
	public categoryList = [];
	public supplierList = [];

	@ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

	constructor(private categoryService: CategoryService, private supplierService: SupplierService) { }

	ngOnInit(): void {
		this.productForm = new FormGroup({
			productName: new FormControl('', Validators.required),
			shortDescription: new FormControl('', Validators.required),
			longDescription: new FormControl('', Validators.required),
			unitPriceLKR: new FormControl('', Validators.required),
			unitPriceUSD: new FormControl('', Validators.required),
			measurementUnit: new FormControl('', Validators.required),
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

	saveSupplier(formValues: any) {
		if (this.productForm.valid) {
			console.log(formValues)
		}
	}

	resetForm() {
		this.productForm.reset();
	}

	onClick() {
		const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
			for (let index = 0; index < fileUpload.files.length; index++) {
				const file = fileUpload.files[index];
				this.files.push({ data: file, inProgress: false, progress: 0 });
			}
			this.uploadFiles();
		};
		fileUpload.click();
	}

	private uploadFiles() {
		this.fileUpload.nativeElement.value = '';
		this.files.forEach(file => {
			this.uploadFile(file);
		});
	}

	uploadFile(file) {
		console.log(file);
		/*const formData = new FormData();
		formData.append('file', file.data);
		file.inProgress = true;
		this.uploadService.upload(formData).pipe(
		  map(event => {
			switch (event.type) {
			  case HttpEventType.UploadProgress:
				file.progress = Math.round(event.loaded * 100 / event.total);
				break;
			  case HttpEventType.Response:
				return event;
			}
		  }),
		  catchError((error: HttpErrorResponse) => {
			file.inProgress = false;
			return of(`${file.data.name} upload failed.`);
		  })).subscribe((event: any) => {
			if (typeof (event) === 'object') {
			  console.log(event.body);
			}
		  });  */
	}



}
