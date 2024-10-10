import {Product} from "./product.model";

export type Repo = {
    get(id: string): Promise<Product>
}
