import { ReactElement } from "react"
import { ProductType } from "./PaginationWrapper"

type ProductProps = {
    ProductList: ProductType[];
}

const Product = ({ProductList}: ProductProps): ReactElement => {
    return (
        <>
            {ProductList.map((product: ProductType) => (
                <div key={product.title}>{product.title}</div>
            ))}
            </>
    )
}

export { Product }