'use client'

import {MainMenu} from "@/components/menu/mainmenu";
import {Footer} from "@/components/menu/footer";
import {useCart} from "@/provider/CartProvider";
import Link from "next/link";

export default function CartPage() {

    const { cart, updateCartEntry, removeCartEntry } = useCart();

    return (
        <div className="bg-gray-50">

            <MainMenu />
            <div className="bg-white">
                <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

                    <form className="mt-12">
                        <div>
                            <h2 className="sr-only">Items in your shopping cart</h2>

                            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                                {cart.entries?.map((entry, productIdx) => (
                                    <li key={entry.position} className="flex py-6 sm:py-10">
                                        <div className="shrink-0">
                                            <img alt={entry.product} src={entry.productThumbnailUrl}
                                                className="size-24 rounded-lg object-cover sm:size-32"
                                            />
                                        </div>

                                        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div>
                                                <div className="flex justify-between sm:grid sm:grid-cols-2">
                                                    <div className="pr-6">
                                                        <h3 className="text-sm">
                                                            <Link href={"product/" + entry.product}
                                                               className="font-medium text-gray-700 hover:text-gray-800">
                                                                {entry.productName}
                                                            </Link>
                                                        </h3>
                                                    </div>

                                                    <p className="text-right text-sm font-medium text-gray-900">${entry.totalPrice}</p>
                                                </div>

                                                <div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
                                                    <div className="inline-grid w-full max-w-16 grid-cols-1">
                                                        <input value={entry.quantity}
                                                               onInput={(event) => updateCartEntry(entry.position, Number(event.currentTarget.value))}
                                                               className="block w-full rounded-md bg-white px-3 py-1.5 text-base
                                                                text-gray-900 outline-1 -outline-offset-1 outline-gray-300
                                                                placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                                                                focus:outline-indigo-600 sm:text-sm/6"/>
                                                    </div>
                                                    <br />
                                                    <button onClick={() => removeCartEntry(entry.position)}
                                                        type="button" className="ml-4 text-sm font-medium
                                                         text-indigo-600 hover:text-indigo-500 sm:mt-3 sm:ml-0">
                                                        <span>Remove</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10">
                            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
                                <h2 className="sr-only">Order summary</h2>

                                <div className="flow-root">
                                    <dl className="-my-4 divide-y divide-gray-200 text-sm">
                                        <div className="flex items-center justify-between py-4">
                                            <dt className="text-base font-medium text-gray-900">Order total</dt>
                                            <dd className="text-base font-medium text-gray-900">
                                                ${ cart.entries?.reduce((acc, item) => acc + item.totalPrice, 0)}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium
                                    text-white shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                    focus:ring-offset-gray-50 focus:outline-hidden">
                                    Checkout
                                </button>
                            </div>

                            <div className="mt-6 text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}