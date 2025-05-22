export type ProductData = {
    code: string;
    name: string;
    price: number;

    thumbnailUrl?: string;
    imageUrls?: string[];

    description?: string;
    highlights: string[];
    details?: string;

    size?: ProductSize[],
    color?: ProductColor[]
}

export type ProductSize = {
    size: string,
    inStock: boolean
}

export type ProductColor = {
    color: string,
    hex: string
}