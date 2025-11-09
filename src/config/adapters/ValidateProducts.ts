import { DraftProduct, Product } from "../../types";
import { allProductsSchema, draftProductSchema, ProductSchema } from "../../utils/products.schema";
import { ValidationProducts } from "./validation-domain";



export class ValidationZodProducts implements ValidationProducts {

    parseDraftProductSchema(data: unknown): DraftProduct {
        const result = draftProductSchema.safeParse(data);
        if (!result.success) {
            throw result.error;
        }

        return result.data;
    }

    parseUpdateDraftProductSchema(data: unknown): Product {
        const result = ProductSchema.safeParse(data);
        if (!result.success) {
            throw result.error;
        }

        return result.data;
    }

    parseAllProducts(data: unknown): Product[] {
        const result = allProductsSchema.safeParse(data);
        if (!result.success) throw new Error(' Error con el servidor');

        return result.data
    }

    parseProduct(data: unknown): Product {
        const result = ProductSchema.safeParse(data);
        if (!result.success) throw new Error(' Error con el servidor');

        return result.data
    }

}
