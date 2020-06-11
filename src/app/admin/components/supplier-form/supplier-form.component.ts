import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {

  supplierForm: FormGroup;

  constructor() { }

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
  }

  saveSupplier(formValues: any) {
    if (this.supplierForm.valid) {
      console.log(formValues)
    }
  }

  resetForm() {
    this.supplierForm.reset();
  }

}
