import {ProductData} from "@/entities/ProductObjects";

interface ProductDescriptionProps {
    productData: ProductData
}

export function ProductDescription( {productData } : ProductDescriptionProps ) {

    return (
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                    <p className="text-base text-gray-900">{productData.description}</p>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        {productData.highlights.map((highlight: string) => (
                            <li key={highlight} className="text-gray-400">
                                <span className="text-gray-600">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <section aria-labelledby="shipping-heading" className="mt-10 pb-16">
                <h2 id="shipping-heading" className="text-sm font-medium text-gray-900">
                    Details
                </h2>

                <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{productData.details}</p>
                </div>
            </section>
        </div>
    )
}