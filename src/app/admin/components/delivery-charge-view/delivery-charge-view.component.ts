import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/common/ws/city.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeliveryArea } from 'src/app/common/model/delivery-area';
import { DeliveryAreaDataServiceService } from 'src/app/common/data-service/delivery-area-data-service.service';

@Component({
	selector: 'app-delivery-charge-view',
	templateUrl: './delivery-charge-view.component.html',
	styleUrls: ['./delivery-charge-view.component.scss']
})
export class DeliveryChargeViewComponent implements OnInit {

	public deliveryArea: DeliveryArea[];
	private emptyInitialSelectedList: Boolean;

	constructor(private cityService: CityService, private snackBar: MatSnackBar, private deliveryAreaDataService: DeliveryAreaDataServiceService) { }

	ngOnInit(): void {
		this.loadInitialData();

		this.deliveryAreaDataService.dataSetModifiedStatus.subscribe(data => {
			this.loadInitialData();
		});
	}

	private loadInitialData() {
		this.cityService.getDeliveryCities().subscribe((data: DeliveryArea[]) => {
			if (data.length === 0) {
				this.emptyInitialSelectedList = true;
			}
			this.deliveryArea = data;
		});
	}

	updateDeliveryCharge(item: DeliveryArea) {
		this.cityService.updateDeliveryCharges(item).subscribe(data => {
			this.snackBar.open('Delivery charge updated successfully', 'OK');
		}, error => {
			this.snackBar.open('Cannot update delivery charge', 'OK');
		});
	}

}
