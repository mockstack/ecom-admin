import { Contact } from './contact';
import { Deserializable } from './Deserializable';

export class Supplier implements Deserializable {
	public contact_name: string;
	public contact_title: string;
	public company_name: string;
	public contact: Contact;
	public _id?: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
