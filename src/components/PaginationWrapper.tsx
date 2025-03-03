import { ReactElement, useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductCard } from './ProductCard'
import { ProductFilter } from './ProductFilter'
import { ProductPagination } from './ProductPagination'

type ProductType = {
    id: number,
    slug: string,
    title: string,
    vendor: string,
    tags: string[],
    published: boolean,
    url: string,
    image_src: string,
    option_value: string,
    sku: string,
    price: number,
    subscription_discount: number,
    subscription: boolean
}

const PaginationWrapper = ({ }): ReactElement => {

    const [slug, setSlug] = useState('http://localhost:3010/products')

    const fetchProduct = async () => {
        const response = await fetch(slug);
        return response.json();
    };

    const { isLoading, error, data, refetch } = useQuery<ProductType[]>({
        queryKey: ['productData'],
        queryFn: fetchProduct,
    })

    useEffect(() => {
        console.log(slug)
        console.log(data)
        refetch()

    }, [slug])

    if (isLoading) return <>'Loading...'</>

    if (error) return <>'An error has occurred: ' + error.message</>

    if (!data) return <></>

    return (
        <div className='grid grid-cols-8 gap-4'>
            <div className='col-span-6 relative m-4 mb-20'>
                <h1 className='text-3xl font-bold mb-6 mx-4'>Product Collection</h1>
                {data.length ?
                    <><div className='grid grid-cols-4 gap-4'>
                        <ProductCard ProductList={data} />
                    </div>
                        <ProductPagination number={data.length} /></>
                    :
                    <div>
                        <p>Either no data was returned or your filters are too specific</p>
                        <button>reset filters</button>
                    </div>
                }
            </div>
            <aside className='col-span-2' aria-label='Sidebar'>
                <h2 className='text-2xl font-bold my-6'>Filter by:</h2>
                <ProductFilter ProductData={data} SetSlug={setSlug} slug={slug} />
            </aside>
        </div>
    )
}

export { PaginationWrapper, ProductType }
