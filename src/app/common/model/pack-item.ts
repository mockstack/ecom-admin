import { Deserializable } from './Deserializable';

export class PackItem implements Deserializable {
	productId: string;
	productName: string;
    quantity: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
