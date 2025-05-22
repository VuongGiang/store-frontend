export type CartData = {

    code: string,
    entries: CartEntryData[],
}

export type CartEntryData = {

    position: number,
    product: string,
    quantity: number,
    basePrice: number,
    totalPrice: number,
    productThumbnailUrl: string,
    productName: string,
}