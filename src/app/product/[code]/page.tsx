'use client'

import { useState, useEffect } from 'react'
import {MainMenu} from "@/components/menu/mainmenu";
import {Footer} from "@/components/menu/footer";
import {ProductData} from "@/entities/ProductObjects";
import {useParams} from "next/navigation";
import {SizeSelector} from "@/components/pdp/SizeSelector";
import {ColorSelector} from "@/components/pdp/ColorSelector";
import {ProductDescription} from "@/components/pdp/ProductDescription";
import {useCart} from "@/provider/CartProvider";
import Image from 'next/image'

/*
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. ' +
        'Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". ' +
        'Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service ' +
        'and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
*/

export default function ProductPage() {

    const { code } = useParams();
    const { addToCart } = useCart();
    const [productData, setProductData]
        = useState<ProductData>({ code: '001', name: 'xxx', price: 0.0, highlights: [] });

    useEffect(() => {

        if (!code) return;
        fetch('https://my-webshop-product-service.wittywater-48df91da.westeurope.azurecontainerapps.io/products/' + code, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setProductData(data);
            });
    }, [code]);

    const [selectedColor, setSelectedColor] = useState(productData.color?.[0])
    const [selectedSize, setSelectedSize] = useState(productData.size?.[2])

    return (
        <div className="bg-white">

            <MainMenu />

            <main className="pt-10 sm:pt-16 pb-6">

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    { productData.imageUrls?.slice(0, 3).map((url) => (
                    <Image alt={productData.name} src={url} key={url}
                         className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"/>
                    ))}
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3
                               lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16">

                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productData.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">${productData.price}</p>

                        <form className="mt-10">

                            { productData.color ?
                                <ColorSelector productData={productData} selectedColor={selectedColor}
                                               setSelectedColor={setSelectedColor} /> : '' }

                            { productData.size ?
                                <SizeSelector productData={productData} selectedSize={selectedSize}
                                              setSelectedSize={setSelectedSize} /> : '' }

                            <button onClick={() => addToCart(productData.code, 1 )} type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent
                                bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Add to bag
                            </button>
                        </form>
                    </div>

                    <ProductDescription productData={ productData }/>

                </div>
            </main>

            <Footer />
        </div>
    )
}
