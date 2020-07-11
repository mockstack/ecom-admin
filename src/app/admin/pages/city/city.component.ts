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
	public provinceList: Province[];
	public districtList: District[];
	public cityList: City[];
	//public selectedCityList: City[];
	public deliveryArea: DeliveryArea[];

	private emptyInitialSelectedList: Boolean;

	// finaly selected items
	public selectedProvince: Province;
	public selectedDistrict: District;
	public selectedCity: City;



	constructor(private cityService: CityService, private snackBar: MatSnackBar) {
		this.provinceList = [];
		this.districtList = [];
		this.cityList = [];
		//this.selectedCityList = [];
		this.deliveryArea = [];
	}

	ngOnInit(): void {
		this.cityService.getProvinces().subscribe((data: Province[]) => {
			this.provinceList = data;
		});

		this.cityService.getDeliveryCities().subscribe((data: DeliveryArea[]) => {
			if (data.length === 0) {
				this.emptyInitialSelectedList = true;
			}
			this.deliveryArea = data;
			//for (const delArea of this.deliveryArea) {
			//	this.selectedCityList.push(delArea.city);
			//}
		});
	}

	itemSelected(mapItem: MapItem, type: string) {
		switch (type) {
			case 'province':
				this.selectedProvince = mapItem as Province;
				if (mapItem.service_available) {
					this.cityService.getDistrictsByProvinceId(mapItem._id).subscribe((data: District[]) => {
						this.districtList = data;
					});
				} else {
					this.districtList = [];
				}
				this.cityList = [];

				break;
			case 'district':
				this.selectedDistrict = mapItem as District;
				if (mapItem.service_available) {
					this.cityService.getCitiesByDistrictId(mapItem._id).subscribe((data: City[]) => {
						this.cityList = data;
						this.cityList = this.cityList.map((val, index) => {
							if (this.deliveryArea.filter(item => item.city._id === val._id).length !== 0) {
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
				this.selectedCity = mapItem as City;
				if (mapItem.service_available) {
					//this.selectedCityList.push(mapItem as City);
					let delArea = new DeliveryArea();
					delArea.city = this.selectedCity;
					delArea.district = this.selectedDistrict;
					delArea.active = true;
					this.deliveryArea.push(delArea);
				} else {
					//this.selectedCityList = this.selectedCityList.filter(item => item._id !== mapItem._id);
					this.deliveryArea = this.deliveryArea.filter(item => item.city._id !== mapItem._id)
				}

				break;
			default:
				break;
		}
	}

	saveDeliveryInfo() {
		if (this.deliveryArea.length === 0) {
			this.snackBar.open('At least on city should be selected', 'OK');
			return;
		}

		if (this.emptyInitialSelectedList) {
			//add items
			this.cityService.addDeliveryCities(this.deliveryArea).subscribe(data => {
				this.snackBar.open('Delivery area added successfully', 'OK');
			}, error => {
				this.snackBar.open('Delivery area adding dailed', 'OK');
			});
		} else {
			//update items
			this.cityService.updateDeliveryCities(this.deliveryArea).subscribe(data => {
				this.snackBar.open('Delivery area updated successfully', 'OK');
			}, error => {
				this.snackBar.open('Delivery area updating dailed', 'OK');
			});
		}
	}
}
