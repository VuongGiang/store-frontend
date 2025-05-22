import { Radio, RadioGroup } from '@headlessui/react'
import {ProductColor, ProductData} from "@/entities/ProductObjects";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ColorSelectorProps {
    productData: ProductData,
    setSelectedColor: any,
    selectedColor: any,
}

export function ColorSelector( {productData, selectedColor, setSelectedColor} : ColorSelectorProps ) {

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>

            <fieldset aria-label="Choose a color" className="mt-4">
                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                    {productData.color?.map((color: ProductColor) => (
                        <Radio
                            key={color.color}
                            value={color.hex}
                            aria-label={color.color}
                            className={
                                'relative -m-0.5 flex cursor-pointer items-center justify-center ' +
                                'rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 ' +
                                'data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
                            } >
                            <span aria-hidden="true"
                                  className={classNames(color.color, 'size-8 rounded-full border border-black/10')}/>
                        </Radio>
                    ))}
                </RadioGroup>
            </fieldset>
        </div>
    )
}