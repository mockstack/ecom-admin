import { Category } from './category';
import { Supplier } from './supplier';
import { Deserializable } from './Deserializable';

export class ProductConcrete implements Deserializable {
	name: string;
	unit_price: number;
	long_desc: string;
	short_desc: string;
	promotions: string;
	stockAvailable: boolean;
	showToCustomer: boolean;
	stockMaintain: boolean;
	measurementUnit: string;
	thumbImage: string;
	fullImage: string;
	unit_price_lkr: string;
	unit_price_usd: string;
	features: string;
	//category: Category;
	//supplier: Supplier;
	_id?: string;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
