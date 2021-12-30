import React from 'react'
import Cart from './Cart/Cart'
import Product from './Products/Product'

export default function ShoppingCart() {
    return (
        <div className="shopping__card block md:flex md:justify-between md:items-center md:h-screen mx-auto">
            <Product />
            <Cart />
        </div>
    )
}
