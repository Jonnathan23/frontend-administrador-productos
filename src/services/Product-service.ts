
import { Api } from "../lib/api"
import { DraftProduct, Product } from "../types";
import { ValidationProducts } from "../config/adapters/validation-domain";

type ProductData = {
    [k: string]: FormDataEntryValue
}

export class ProductService {
    private readonly api: Api;
    private readonly validation: ValidationProducts;


    constructor(api: Api, validation: ValidationProducts) {
        this.api = api;
        this.validation = validation;
    }

    async addProduct(data: ProductData): Promise<void> {
        try {
            const dataForm = this.validation.parseDraftProductSchema(data);

            const url = '/api/products';
            await this.api.post<DraftProduct>(url, dataForm)
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(): Promise<Product[]> {
        try {
            const url = `/api/products`;
            const data = await this.api.get(url)
            const products = this.validation.parseAllProducts(data!.data)

            return products
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getProductById(id: Product['id']): Promise<Product> {
        try {
            const url = `/api/products/${id}`;
            const data = await this.api.get(url);
            const product = this.validation.parseProduct(data!.data);

            return product;
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async updateProduct(id: Product['id'], data: ProductData): Promise<void> {
        try {
            const dataForm = this.validation.parseUpdateDraftProductSchema(data);
            const url = `/api/products/${id}`
            await this.api.put<Product>(url, dataForm)

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async updateProductAvailability(id: Product['id']): Promise<void> {
        try {
            const url = `/api/products/${id}`;
            await this.api.patch(url)

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProduct(id: Product['id']): Promise<void> {
        try {
            const url = `/api/products/${id}`;
            await this.api.delete(url)

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}