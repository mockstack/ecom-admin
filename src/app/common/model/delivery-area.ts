import { City } from './city';
import { Deserializable } from './Deserializable';

export class DeliveryArea implements Deserializable {
	_id: String;
	city: [City];

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
