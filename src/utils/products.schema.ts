import { array, boolean, number, object, string, coerce, preprocess } from 'zod'
import { toBoolean } from './utils'

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: coerce.number(),
    // Transforma la entrada a booleano antes de validarla
    availability: preprocess((val) => toBoolean(String(val)), boolean())
})


export const allProductsSchema = array(ProductSchema)

export const draftProductSchema = object({
    name: string(),
    price: coerce.number()
})
