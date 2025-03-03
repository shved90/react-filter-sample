import { ReactElement } from "react"
import { ProductType } from "./PaginationWrapper"

type PriceSliderProps = {
    buildSlug: (newParam: string) => void
}

const PriceSlider = ({buildSlug}: PriceSliderProps): ReactElement => {

    let priceValue = document.querySelector("#priceSelected")

    const sliderAction = (value:string) => {
        
        buildSlug(`price_lte=${value}`)
        return priceValue?priceValue.textContent = value:null
    }

    return (
        <div>
            <label htmlFor="priceRange" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select price limit:</label>
            <input onChange={event => sliderAction(event.target.value)} id="priceRange" type="range" min="0" max="150" defaultValue="150" step="5" list='priceValues' className="w-[95%] h-2 bg-gray-200 rounded-lg cursor-pointer" />
            <datalist id="priceValues" className='flex justify-between w-[95%]'>
                <option value="0" label="0"></option>
                <option value="30" label="30"></option>
                <option value="60" label="60"></option>
                <option value="90" label="90"></option>
                <option value="120" label="120"></option>
                <option value="150" label="150"></option>
            </datalist>
            <p>Price selected: <output id="priceSelected">150</output></p>
        </div>
    )
}

export { PriceSlider }