import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Category {
  name: string;
  description: string;
  active: boolean;
  _id: string;
}

const sourceData = [
  {
      "active": true,
      "_id": "5ec5181fef27a33f88fc6c21",
      "name": "Lubricants & Filters",
      "description": "Lubricants and Filters for all kind of vehicles"
  },
  {
      "active": false,
      "_id": "5ed9efc16bba153d88135f43",
      "name": "Grocery Items",
      "description": "All grocerry items"
  }
];

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {
  displayColumns: string[] = ['name', 'description', 'active', 'action_edit', 'action_delete'];

  dataSource = sourceData;

  constructor(private snakBar: MatSnackBar) { }



  ngOnInit(): void {
  }

  openDialog(action,obj) {
    this.snakBar.open('Action is being done', 'ok',{
      duration: 2000,
    });
  }

}
