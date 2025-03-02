import { ReactElement } from "react"
import { ProductType } from "./PaginationWrapper"

type ProductProps = {
    ProductList: ProductType[];
}

const ProductCard = ({ProductList}: ProductProps): ReactElement => {
    return (
        <>
            {ProductList ? ProductList.map((product: ProductType) => (
                <div key={product.id}>
                    <img src={product.image_src} />
                    <h2>{product.title}</h2>
                    <sub>{product.option_value}</sub>
                    <p>{product.price}</p>
                    <p>{product.subscription?'yes':'no'}</p>
                    <p>{product.tags}</p>
                </div>
            )) : 'loading'}
            </>
    )
}

export { ProductCard }