import z from "zod";
import { draftProductSchema, ProductSchema } from "../utils/products.schema";


export type Product = z.infer<typeof ProductSchema>
export type DraftProduct = z.infer<typeof draftProductSchema>