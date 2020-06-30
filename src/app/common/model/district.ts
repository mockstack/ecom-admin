import { Deserializable } from './Deserializable';
import { MapItem } from './map-item';

export class District extends MapItem implements Deserializable {
	province_id: Number;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
