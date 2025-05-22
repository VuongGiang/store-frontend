import {ChevronDownIcon} from "@heroicons/react/20/solid";

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']

export function LoginMenu() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form>
                    <div className="-ml-2 inline-grid grid-cols-1">
                        <select
                            id="desktop-currency"
                            name="currency"
                            aria-label="Currency"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pl-2 pr-7
                                        text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1
                                        focus:outline-white sm:text-sm/6"
                        >
                            {currencies.map((currency) => (
                                <option key={currency}>{currency}</option>
                            ))}
                        </select>
                        <ChevronDownIcon
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center
                                        justify-self-end fill-gray-300"
                        />
                    </div>
                </form>

                <div className="flex items-center space-x-6">
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                        Sign in
                    </a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                        Create an account
                    </a>
                </div>
            </div>
        </div>
    );
}