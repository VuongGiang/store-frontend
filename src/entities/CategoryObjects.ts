import {ProductData} from "@/entities/ProductObjects";

export type CategoryData = {

    code: string,
    name: string,
    products: ProductData[],
}