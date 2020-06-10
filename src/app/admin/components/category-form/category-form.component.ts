import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      active: new FormControl(true)
    });
  }

  saveCategory(formValues: any) {
    if (this.categoryForm.valid) {
      console.log(formValues)
    }
  }

  resetForm() {
    this.categoryForm.reset();
  }

}
