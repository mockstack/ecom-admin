import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/common/model/province';
import { District } from 'src/app/common/model/district';
import { City } from 'src/app/common/model/city';
import { CityService } from 'src/app/common/ws/city.service';
import { MapItem } from 'src/app/common/model/map-item';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeliveryArea } from 'src/app/common/model/delivery-area';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
	provinceList: Province[];
	districtList: District[];
	cityList: City[];
	selectedCityList: City[];
	deliveryArea: DeliveryArea;

	constructor(private cityService: CityService, private snackBar: MatSnackBar) {
		this.provinceList = [];
		this.districtList = [];
		this.cityList = [];
		this.selectedCityList = [];
	}

	ngOnInit(): void {
		this.cityService.getProvinces().subscribe((data: Province[]) => {
			this.provinceList = data;
		});

		this.cityService.getDeliveryCities().subscribe((data: DeliveryArea) => {
			this.deliveryArea = data;
			this.selectedCityList = data.city;
		});
	}

	itemSelected(mapItem: MapItem, type: string) {
		switch (type) {
			case 'province':
				if (mapItem.service_available) {
					this.cityService.getDistrictsByProvinceId(mapItem.id).subscribe((data: District[]) => {
						this.districtList = data;
					});
				} else {
					this.districtList = [];
				}
				this.cityList = [];

				break;
			case 'district':
				if (mapItem.service_available) {
					this.cityService.getCitiesByDistrictId(mapItem.id).subscribe((data: City[]) => {
						this.cityList = data;
						this.cityList = this.cityList.map((val, index) => {
							if (this.selectedCityList.filter(item=>item._id === val._id).length !== 0) {
								val.service_available = true;
							}
							return val;
						});
					});
				} else {
					this.cityList = [];
				}
				break;
			case 'city':
				if (mapItem.service_available) {
					this.selectedCityList.push(mapItem as City);
				} else {
					this.selectedCityList = this.selectedCityList.filter(item => item._id !== mapItem._id);
				}

				break;
			default:
				break;
		}
	}

	saveDeliveryInfo() {
		let selectedCities: City[] = this.cityList.filter(item => item.service_available === true);
		if (selectedCities.length === 0) {
			this.snackBar.open('At least on city should be selected', 'OK');
			return;
		}

		let cities = this.selectedCityList.map((val, index) => {
			return val._id;
		});
		if (this.deliveryArea === null) {
			this.cityService.addDeliveryCities(cities).subscribe(data => {
				this.snackBar.open('Delivery area added successfully', 'OK');
			}, error => {
				this.snackBar.open('Delivery area adding dailed', 'OK');
			});
		} else {
			this.cityService.updateDeliveryCities(cities, this.deliveryArea._id).subscribe(data => {
				this.snackBar.open('Delivery area updated successfully', 'OK');
			}, error => {
				this.snackBar.open('Delivery area updating dailed', 'OK');
			});
		}

	}
}
