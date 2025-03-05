import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react"
import { ProductType } from "./PaginationWrapper"
import { PriceSlider } from "./PriceSlider"
import { ProductButton } from "./ProductButton"
type ProductProps = {
    ProductData: ProductType[]
    SetSlug: Dispatch<SetStateAction<string>>
    slug: string,
    resetFilters: boolean
}

const ProductFilter = ({ ProductData, SetSlug, slug, resetFilters }: ProductProps): ReactElement => {

    let [allTags, setAllTags] = useState([] as string[])
    const [activeParams, setActiveParams] = useState(new URLSearchParams(window.location.search));

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

    const buildSlug = (newParam: string) => {
        const newUrl = parseUrlQueries(slug, newParam);
        SetSlug(newUrl);
        setActiveParams(new URLSearchParams(new URL(newUrl).search))
    }

    useEffect(() => {
        setActiveParams(new URLSearchParams())
    }, [resetFilters]);

    useEffect(() => {
        setAllTags([...new Set(ProductData.flatMap(product => product.tags))])
    }, [])

    return (
        <div className='grid divide-y divide-offwhite gap-8'>
            <div className=''>
                <h3 className='text-xl font-bold my-4 dark:text-offwhite'>Product name</h3>
                <input type="text" onChange={(event) => buildSlug(`title_like=${event.target.value}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="product name" />
            </div>
                
            <div>
                <h3 className='text-xl font-bold my-4 dark:text-offwhite'>Tags</h3>
                {allTags.map((tag) => (
                    <ProductButton key={tag}  buildSlug={buildSlug} activeParams={activeParams} newParam={`tags_like=${tag}`} buttonText={tag} />
                ))}
            </div>

            <div>
                <h3 className='text-xl font-bold my-4 dark:text-offwhite'>Price</h3>
                <PriceSlider buildSlug={buildSlug} resetFilters={resetFilters} />
            </div>

            <div>
                <h3 className='text-xl font-bold my-4 dark:text-offwhite'>Subscription</h3>
                <ProductButton buildSlug={buildSlug} activeParams={activeParams} newParam={'subscription=true'} buttonText={'Yes'} />
                <ProductButton buildSlug={buildSlug} activeParams={activeParams} newParam={'subscription=false'} buttonText={'No'} />
            </div>
        </div>
    )
}

export { ProductFilter }