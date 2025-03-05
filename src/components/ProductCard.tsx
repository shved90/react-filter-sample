import { ReactElement } from "react"
import { ProductType } from "./PaginationWrapper"

type ProductProps = {
    ProductList: ProductType[];
}

const ProductCard = ({ ProductList }: ProductProps): ReactElement => {
    return (
        <>
            {ProductList ? ProductList.map((product: ProductType) => (
                <div key={product.id} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col gap-1'>
                    <img src={product.image_src} className='rounded-t-lg w-full' />
                    <div className='px-4 py-2 flex justify-between flex-col h-full'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex justify-between text-xs text-navyBlue-light'>
                                <p className='uppercase'>{product.option_value}</p>
                                <p className='uppercase'>{product.sku}</p>
                            </div>
                            <h2 className='mb-2 text-2xl/[1.5rem] font-bold tracking-tight text-navyBlue dark:text-navyBlue'>{product.title}</h2>
                            {product.subscription?
                                <p className='text-navyBlue mb-2'>Subscribe for {product.subscription_discount}% discount</p>
                            :''}
                        </div>
                        <div className='mb-2'>
                            <p className='text-green text-2xl mb-2'><strong>£{product.price}</strong></p>
                            {product.tags?product.tags.map((tag: string) => (
                                <span className='mr-2 p-1 border border-navyBlue rounded-lg inline-block'>{tag}</span>
                            )):''}
                        </div>
                    </div>
                </div>
            )) : 'loading'}
        </>
    )
}

export { ProductCard }