import { safeParse } from "valibot"
import { DraftProductSchema } from "../types"

type ProductData = {
    [k: string]: FormDataEntryValue
}

export async function addProduct(data: ProductData) {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name as string,
            price: +data.price
        })
        
        if(result.success) {

        } else{
            throw new Error('Datos inválidos')
        }
    } catch (error) {
        console.log(error)
    }
}