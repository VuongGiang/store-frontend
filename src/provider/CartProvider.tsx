'use client'

import {CartData} from "@/entities/CartObject";
import {createContext, ReactNode, useContext, useState} from "react";

interface CartContextType {
    addToCart: (product: string, quantity: number) => void;
    updateCartEntry: (position: number, quantity: number) => void;
    removeCartEntry: (position: number) => void;
    cart: CartData;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartData>({ code: "", entries: [] });
    const [isLoading, setLoading] = useState<boolean>(false);

    if (!isLoading && !cart.code) {
        setLoading(true)
        fetch('https://my-webshop-cart-service.wittywater-48df91da.westeurope.azurecontainerapps.io/carts', {
            method: "POST",
        })
        .then(response => response.json())
        .then(data => {
            setCart(data);
            setLoading(false);
        });
    }

    const addToCart = (product: string, quantity: number) => {

        fetch('https://my-webshop-cart-service.wittywater-48df91da.westeurope.azurecontainerapps.io/carts/'
            + cart.code + "/entries?product=" + product + "&quantity=" + quantity, {
            method: "POST",
        })
        .then(response => response.json())
        .then(data => {
            setCart(data);
        });
    };

    const updateCartEntry = (position: number, quantity: number) => {

        fetch('https://my-webshop-cart-service.wittywater-48df91da.westeurope.azurecontainerapps.io/carts/'
            + cart.code + "/entries/" + position + "?quantity=" + quantity, {
            method: "PATCH",
        })
        .then(response => response.json())
        .then(data => {
            setCart(data);
        });
    }

    const removeCartEntry = (position: number) => {

        fetch('https://my-webshop-cart-service.wittywater-48df91da.westeurope.azurecontainerapps.io/carts/'
            + cart.code + "/entries/" + position, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            setCart(data);
        });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartEntry, removeCartEntry }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};