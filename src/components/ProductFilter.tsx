import { Dispatch, ReactElement, SetStateAction } from "react"
import { ProductType } from "./PaginationWrapper"

type ProductProps = {
    ProductData: ProductType[]
    SetSlug: Dispatch<SetStateAction<string>>
    slug: string
}

const ProductFilter = ({ ProductData, SetSlug, slug }: ProductProps): ReactElement => {

    const parseUrlQueries = (url: string, newParam: string): string => {
        const urlObj = new URL(url);
        const searchParams = new URLSearchParams(urlObj.search);
        const [newKey, newValue] = newParam.split("=");
    
        const existingValues = searchParams.getAll(newKey);
    
        newKey === "tags_like"
            ? existingValues.includes(newValue)
                ? searchParams.delete(newKey, newValue)
                : searchParams.append(newKey, newValue)
            : existingValues.includes(newValue)
                ? searchParams.delete(newKey)
                : searchParams.set(newKey, newValue)
    
        urlObj.search = searchParams.toString();
        return urlObj.toString();
    };
    
    const getUniqueTags = (ProductData: ProductType[]) => {
        return [...new Set(ProductData.flatMap(product => product.tags))];
    }
    let tags: string[] = getUniqueTags(ProductData)

    const buildSlug = (newParam: string) => {
        parseUrlQueries(slug, newParam)
        SetSlug(parseUrlQueries(slug, newParam))
    }


    return (
        <div>
            <h4>Tags</h4>
            {tags.map((tag) => (
                <button onClick={() => buildSlug(`tags_like=${tag}`)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{tag}</button>
            ))}
            <h4>Price</h4>
            <h4>Subscription</h4>
            <button onClick={() => buildSlug(`subscription=true`)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>true</button>
            <button onClick={() => buildSlug(`subscription=false`)} className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>false</button>
            <button onClick={() => SetSlug('http://localhost:3010/products?tags_like=Dog&_sort=title&_order=ASC&tags_like=Cat&subscription=false')}>press me</button>
        </div>
    )
}

export { ProductFilter }