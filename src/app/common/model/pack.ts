import { Deserializable } from './Deserializable';
import { PackItem } from './pack-item';

export class Pack implements Deserializable {
	name: string;
	description: string;
	owner: string;
	active: boolean;
	packItems: PackItem[];

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
