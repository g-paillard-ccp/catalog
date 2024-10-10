import {Product} from "./product.model";
import {Repo} from "./repo.interface";

export class RepoImpl implements Repo {

    private products: Product[] = [
        {
            id: "products::1",
            name: "Pain au chocolat",
            price: 200,
        },
        {
            id: "products::2",
            name: "Chocolatine",
            price: 400,
        },
    ]

    get(id: string): Promise<Product> {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return Promise.resolve(product);
        }
        throw new Error(`No product found with id ${id}`);
    }

}
