import { Deserializable } from './Deserializable';
import { Product } from './product';

export class PackItem implements Deserializable {
	product: Product;
    quantity: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
