import { Category } from './category';
import { Supplier } from './supplier';
import { ProductConcrete } from './product-concrete';
import { Deserializable } from './Deserializable';

export class Product extends ProductConcrete implements Deserializable {
	category: Category;
	supplier: Supplier;

	deserialize(input: any): this {
		Object.assign(this, input);
		return this;
	}
}
