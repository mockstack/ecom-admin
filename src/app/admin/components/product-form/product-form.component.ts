import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      shortDescription: new FormControl('', Validators.required),
      longDescription: new FormControl('', Validators.required),
      unitPriceLKR: new FormControl('', Validators.required),
      unitPriceUSD: new FormControl('', Validators.required),
      measurementUnit: new FormControl(''),
      promotion: new FormControl('', Validators.required),
      stockAvailable: new FormControl('', Validators.required),
      showToCustomer: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      supplier: new FormControl('', Validators.required)
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
