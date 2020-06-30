import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MapItem } from 'src/app/common/model/map-item';

@Component({
	selector: 'app-city-view',
	templateUrl: './city-view.component.html',
	styleUrls: ['./city-view.component.scss']
})
export class CityViewComponent implements OnInit {
	@Input() model: MapItem;
	@Output() onSelect = new EventEmitter();

	constructor(private snackBar: MatSnackBar) { }

	ngOnInit(): void {
	}
}
