
import { Api } from "../lib/api"
import { ValidationUtils } from "../utils/ValidateType"

type ProductData = {
    [k: string]: FormDataEntryValue
}


export class ProductService {
    private readonly api: Api = new Api();

    constructor()

    async addProduct(data: ProductData) {
        try {
            const { success, dataForm } = ValidationUtils.parseDraftProductSchema(data);
            if (!success) throw new Error('Error de validacion');

            const url = '/api/products';
            await this.api.post(url, dataForm.output)
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts() {
        const url = `/api/products`;
        const data =  await this.api.get(url)        
        const products = ValidationUtils.parseProducts(data!.data)
        
        return products
    }


}