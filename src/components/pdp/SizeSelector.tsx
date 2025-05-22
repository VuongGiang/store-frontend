import { Radio, RadioGroup } from "@headlessui/react";
import {ProductData, ProductSize} from "@/entities/ProductObjects";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface SizeSelectorProps {
    productData: ProductData,
    setSelectedSize: any,
    selectedSize: any,
}

export function SizeSelector( { productData, selectedSize, setSelectedSize}: SizeSelectorProps ) {

    return (

            <div className="mt-10">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {productData.size?.map((size: ProductSize) => (
                            <Radio
                                key={size.size}
                                value={size}
                                disabled={!size.inStock}
                                className={classNames(
                                    size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                    'group relative flex items-center justify-center rounded-md border px-4 ' +
                                    'py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none ' +
                                    'data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                )}
                            >
                                <span>{size.size}</span>
                                {size.inStock ? (
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2
                                                                border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                    />
                                ) : (
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        className="absolute inset-0 size-full stroke-2 text-gray-200">
                                      <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke"/>
                                    </svg>
                                  </span>
                                )}
                            </Radio>
                        ))}
                    </RadioGroup>
                </fieldset>
            </div>
    )
}