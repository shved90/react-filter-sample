import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react"
import { ProductType } from "./PaginationWrapper"
import { PriceSlider } from "./PriceSlider"

type ProductProps = {
    ProductData: ProductType[]
    SetSlug: Dispatch<SetStateAction<string>>
    slug: string
}

const ProductFilter = ({ ProductData, SetSlug, slug }: ProductProps): ReactElement => {

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
        setAllTags([...new Set(ProductData.flatMap(product => product.tags))])
    }, [])

    return (
        <div className=''>
            <h3 className='text-xl font-bold my-3'>Product name</h3>
            <input type='text' onChange={(event) => buildSlug(`title_like=${event.target.value}`)} />
            <h3 className='text-xl font-bold my-3'>Tags</h3>
            {allTags.map((tag) => (
                <button onClick={() => buildSlug(`tags_like=${tag}`)} key={tag} className={`py-2 px-4 border-navyBlue font-semibold border rounded mr-2 mb-2 ${
                    activeParams.getAll("tags_like").includes(tag)
                        ? "bg-navyBlue text-white hover:bg-navyBlue-light"
                        : "bg-transparent text-navyBlue hover:bg-navyBlue hover:text-white"
                }`}>{tag}</button>
            ))}

            <h3 className='text-xl font-bold my-3'>Price</h3>
            <PriceSlider buildSlug={buildSlug} />

            <h3 className='text-xl font-bold my-3'>Subscription</h3>
            <button onClick={() => buildSlug(`subscription=true`)} className={`py-2 px-4 border-navyBlue font-semibold border rounded mr-2 mb-2 ${
                    activeParams.get("subscription") === "true"
                        ? "bg-navyBlue text-white hover:bg-navyBlue-light"
                        : "bg-transparent text-navyBlue hover:bg-navyBlue hover:text-white"
                }`}>Yes</button>
            <button onClick={() => buildSlug(`subscription=false`)} className={`py-2 px-4 border-navyBlue font-semibold border rounded mr-2 mb-2 ${
                    activeParams.get("subscription") === "false"
                        ? "bg-navyBlue text-white hover:bg-navyBlue-light"
                        : "bg-transparent text-navyBlue hover:bg-navyBlue hover:text-white"
                }`}>No</button>
        </div>
    )
}

export { ProductFilter }