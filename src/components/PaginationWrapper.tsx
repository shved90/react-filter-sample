import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Product } from './Product'

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

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:3010/products?_sort=title&_order=ASC&_start=2&_end=6");
        return response.json();
    };

    const { isLoading, error, data } = useQuery<ProductType[]>({
        queryKey: ['repoData'],
        queryFn: fetchUsers,
    })

    if (isLoading) return <>'Loading...'</>

    if (error) return <>'An error has occurred: ' + error.message</>

    if (!data) return <></>

    return (
        <div className='grid grid-cols-4 gap-4'>
            <Product ProductList={data} />
        </div>
    )
}

export { PaginationWrapper, ProductType }
