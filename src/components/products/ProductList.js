import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductCard } from "./ProductCard"
import "./Product.css"

export const ProductList = () => {
    console.log("productlist")
    const { products, getProducts } = useContext(ProductContext)
    

    useEffect(() => {
        console.log("productList: useEffect - getProducts")
        getProducts()
    }, [])

    return (
        <div className="product">
            {console.log("ProductList: Render")}
            {
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
        </div>

    )
}