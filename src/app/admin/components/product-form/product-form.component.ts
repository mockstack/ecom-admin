import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/common/ws/category.service';
import { SupplierService } from 'src/app/common/ws/supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  public categoryList = [];
  public supplierList = [];

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

    this.categoryService.getProductCategories().subscribe((data: object[])=> {
      this.categoryList = data;
    }, error => {

    });

    this.supplierService.getAllSuppliers().subscribe((data: object[])=> {
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

}
