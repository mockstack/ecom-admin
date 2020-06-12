import { Location } from './location';
import { Deserializable } from './Deserializable';

export class Contact implements Deserializable {
	telephone: string;
	email: string;
	fax: string;
	postal_code: string;
	location: Location;
	_id: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
