import { Deserializable } from './Deserializable';
import { MapItem } from './map-item';

export class Province extends MapItem implements Deserializable {

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
