import { Deserializable } from './Deserializable';

export class Location implements Deserializable {
	address: string;
	city: string;
	district: string;
	_id?: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
