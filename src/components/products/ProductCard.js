import React from "react"
import "./Product.css"

export const ProductCard = ({product}) => (
    <section className="product">
        <div className="product__name">{product.name}</div>
        <div className="product__type">{product.productType.type}</div>
        <div className="product__price">{product.price}</div>
    </section>  
)