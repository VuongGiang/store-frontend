'use client'

import {MainMenu} from "@/components/menu/mainmenu";
import {Footer} from "@/components/menu/footer";
import {useCart} from "@/provider/CartProvider";
import Link from "next/link";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function CartPage() {

    const { cart, updateCartEntry, removeCartEntry } = useCart();

    return (
        <div className="bg-gray-50">

            <MainMenu />
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
                    <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

                    <form className="mt-12">
                        <section aria-labelledby="cart-heading">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>

                            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            { cart.entries?.length > 0 ? (
                                cart.entries.map((entry) => (
                                    <li key={entry.position} className="flex py-6">
                                        <div className="shrink-0">
                                            <img
                                                alt={entry.product} src=""
                                                className="size-24 rounded-md object-cover sm:size-32"
                                            />
                                        </div>

                                        <div className="mt-4 flex items-center">
                                            <div className="inline-grid w-full max-w-16 grid-cols-1">
                                                <select
                                                    name={`quantity-${entry.product}`}
                                                    aria-label={`Quantity, ${entry.product}`}
                                                    className="col-start-1 row-start-1 appearance-none rounded-md bg-white
                                                    py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1
                                                    outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                    <option value={6}>6</option>
                                                    <option value={7}>7</option>
                                                    <option value={8}>8</option>
                                                </select>
                                                <ChevronDownIcon aria-hidden="true"
                                                    className="pointer-events-none col-start-1 row-start-1
                                                     mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
                                            </div>

                                            <button type="button" className="ml-4 text-sm font-medium text-indigo-600
                                                 hover:text-indigo-500 sm:mt-3 sm:ml-0" onClick={() => removeCartEntry(entry.position)} >
                                                <span>Remove</span>
                                            </button>
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h4 className="text-sm">
                                                        <a href={"/product/" + entry.product} className="font-medium text-gray-700 hover:text-gray-800">
                                                            back to the product
                                                        </a>
                                                    </h4>
                                                    <p className="ml-4 text-sm font-medium text-gray-900">
                                                        ${entry.totalPrice}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))) : '' }
                            </ul>
                        </section>

                        {/* Order summary */}
                        <section aria-labelledby="summary-heading" className="mt-10">
                            <h2 id="summary-heading" className="sr-only">
                                Order summary
                            </h2>

                            <div>
                                <dl className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                                        <dd className="ml-4 text-base font-medium text-gray-900">
                                            ${ cart.entries?.reduce((acc, item) => acc + item.totalPrice, 0)}
                                        </dd>
                                    </div>
                                </dl>
                                <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
                            </div>

                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3
                                    text-base font-medium text-white shadow-xs hover:bg-indigo-700 focus:ring-2
                                    focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden"
                                >
                                    Checkout
                                </button>
                            </div>

                            <div className="mt-6 text-center text-sm">
                                <p>
                                    or{' '}
                                    <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                </p>
                            </div>
                        </section>
                    </form>
                </div>
            <Footer />
        </div>
    )
}