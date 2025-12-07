'use client'
import { Product } from "../interfaces/ResponseApi";
import { InputComponent } from "./InputComponent"
import { NotFoundComponent } from "./NotFoundComponent";
import { ProductCard } from "./ProductCard"

interface ProductsComponentProps {
    products: Product[];
}

export const SearchProductsComponent = ({ products }: ProductsComponentProps) => {
  return (
    <>
        <InputComponent />
        <h3 className="title">Productos</h3>
        <main className="container">
            {
                products.length === 0 ? (
                    <NotFoundComponent/>
                ) : (
                    products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                )
            }
        </main>
    </>
  )
}