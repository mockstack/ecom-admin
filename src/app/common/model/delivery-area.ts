import { City } from './city';
import { Deserializable } from './Deserializable';
import { District } from './district';

export class DeliveryArea implements Deserializable {
	_id: String;
	city: City;
	district: District;
	active: Boolean;
	delivery_charge: Number;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
