import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Supplier {
  name: string;
  description: string;
  active: boolean;
  _id: string;
}

const SUPPLIERS = [
  {
      "_id": "5ec51aba830e5d0cb8bd3c08",
      "contact_name": "Supun Sandakalum",
      "contact_title": "Mr",
      "company_name": "Sawsiri Distributors",
      "contact": {
          "_id": "5ec51aba830e5d0cb8bd3c06",
          "telephone": "0342221649",
          "email": "saw@gmail.com",
          "fax": "13213213",
          "postal_code": "11223",
          "location": {
              "_id": "5ec51aba830e5d0cb8bd3c07",
              "address": "Gall Road, Kalutara South",
              "city": "Kalutara",
              "district": "Kalutara"
          }
      }
  }
];

@Component({
  selector: 'app-supplier-view',
  templateUrl: './supplier-view.component.html',
  styleUrls: ['./supplier-view.component.scss']
})
export class SupplierViewComponent implements OnInit {
  displayColumns: string[] = ['contact_title', 'contact_name', 'company_name', 'action_edit', 'action_delete'];

  dataSource = SUPPLIERS;

  constructor(private snakBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDialog(action,obj) {
    this.snakBar.open('Action is being done', 'ok',{
      duration: 2000,
    });
  }

}
