import { DraftProduct, Product } from "../../types";


export abstract class ValidationProducts {
    abstract parseDraftProductSchema(data: unknown): DraftProduct;
    abstract parseUpdateDraftProductSchema(data: unknown): Product;
    abstract parseAllProducts(data: unknown): Product[];
    abstract parseProduct(data: unknown): Product;
    
}