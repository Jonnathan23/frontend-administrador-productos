import { safeParse } from "valibot"
import { DraftProductSchema, ProductsSchema } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue
}


export class ValidationUtils {

    static parseDraftProductSchema(data: ProductData) {
        const result = safeParse(DraftProductSchema, {
            name: data.name as string,
            price: +data.price
        })
        return {
            success: result.success,
            dataForm: result
        }
    }


    static parseProducts<T>(data: T) {
        const result = safeParse(ProductsSchema, data)
        if (!result.success) throw new Error(' Error con el servidor');

        return result.output
    }

}