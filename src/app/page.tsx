'use client'

import {Footer} from "@/components/menu/footer";
import {MainMenu} from "@/components/menu/mainmenu";
import Image from 'next/image'
import Link from "next/link";

const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-category-03.jpg',
  },
]

// @typescript-eslint/no-explicit-any I don't know how to deal with this
export default function Example() {

  return (
      <div className="bg-white">

        <MainMenu />

        <div className="relative mx-auto flex flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0 bg-gray-500">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">New arrivals are here</h1>
          <p className="mt-4 text-xl text-white">
            The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release
            while they&apos;re still in stock.
          </p>
          <Link href="/category/001"
              className="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium
                text-gray-900 hover:bg-gray-100">
            Shop New Arrivals
          </Link>
        </div>

        <main>
          {/* Category section */}
          <section aria-labelledby="category-heading" className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Shop by Category
              </h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {categories.map((category) => (
                        <a
                            key={category.name}
                            href={category.href}
                            className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                        >
                      <span aria-hidden="true" className="absolute inset-0">
                        <Image alt="" src={category.imageSrc} className="size-full object-cover" />
                      </span>
                          <span
                              aria-hidden="true"
                              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                          />
                          <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </section>

          {/* Featured section */}
          <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <Image
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                    className="size-full object-cover"
                />
              </div>
              <div className="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Simple productivity
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we&apos;re doing our best
                    here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the
                    undeniable urge to fill empty circles.
                  </p>
                  <a
                      href="#"
                      className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium
                      text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Shop Focus
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
  )
}
