'use client'

import {MainMenu} from "@/components/menu/mainmenu";
import {Footer} from "@/components/menu/footer";
import Link from "next/link";

import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {CategoryData} from "@/entities/CategoryObjects";
import {useCart} from "@/provider/CartProvider";

export default function CategoryPage({params}: { params: { code : string }}) {

    const { code } = useParams();
    const { cart, addToCart } = useCart();
    const [categoryData, setCategoryData] = useState<CategoryData>({ code: "", name: "", products: [] });

    useEffect(() => {

        if (!code) return;
        fetch('https://my-webshop-product-service.wittywater-48df91da.westeurope.azurecontainerapps.io/category/' + code, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                setCategoryData(data);
            });
    }, [code]);

    return (
        <div className="bg-gray-50">

            <MainMenu />

            <div>
                <main>
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                        { categoryData.products.length > 0 ? (
                        <div className="py-24 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                                {categoryData.name}
                            </h1>
                        </div>
                        ) : '' }

                        {/* Filters */}
                        <section aria-labelledby="filter-heading" className="border-t border-gray-200 pt-6"></section>

                        {/* Product grid */}
                        <section aria-labelledby="products-heading" className="mt-8 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            { categoryData.products.length > 0 ? (
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                    {categoryData.products.map((product) => (
                                        <Link key={product.code} href={'/product/' + product.code } className="group">
                                            <img
                                                alt={product.name}
                                                src={product.thumbnailUrl}
                                                className="aspect-square w-full rounded-lg object-cover group-hover:opacity-75 sm:aspect-[2/3]"
                                            />
                                            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                                <h3>{product.name}</h3>
                                                <p>${product.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <h3 className="text-2xl font-bold tracking-tight text-gray-700 text-center">
                                    Sorry we couldn't find any products
                                </h3>
                            ) }
                        </section>
                    </div>
                </main>

                <Footer />

            </div>
        </div>
    )
}
