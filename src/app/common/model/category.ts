import { Deserializable } from './Deserializable';

export class Category implements Deserializable {
	public name: string
	public description: string;
	public active: boolean;
	public _id?: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
