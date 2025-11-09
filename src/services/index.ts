import { ValidationZodProducts } from "../config";
import { Api } from "../lib/api";
import { ProductService } from "./Product-service";

// Dependencias
const api = new Api()
const validationProducts = new ValidationZodProducts()

// Servicios
export const productService = new ProductService(api, validationProducts);