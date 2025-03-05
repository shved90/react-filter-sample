import { ReactElement, useState, useEffect } from "react"

type PriceSliderProps = {
    buildSlug: (newParam: string) => void
    resetFilters: boolean
}

const PriceSlider = ({ buildSlug, resetFilters }: PriceSliderProps): ReactElement => {
    const defaultValue = 150
    const [sliderValue, setSliderValue] = useState(defaultValue);

    const sliderAction = (value: string) => {
        setSliderValue(Number(value))
        buildSlug(`price_lte=${value}`)
    };

    useEffect(() => {
        setSliderValue(defaultValue)
    }, [resetFilters])

    return (
        <div>
            <label htmlFor="priceRange" className="block mb-2 text-sm font-medium text-gray-900 dark:text-offwhite">
                Select price limit:
            </label>
            <input
                onChange={(event) => sliderAction(event.target.value)}
                id="priceRange"
                type="range"
                min="0"
                max="150"
                value={sliderValue}
                step="5"
                list="priceValues"
                className="w-[95%] h-2 bg-gray-200 rounded-lg cursor-pointer"
            />
            <datalist id="priceValues" className="flex justify-between w-[95%]">
                {[0, 30, 60, 90, 120, 150].map((price) => (
                    <option className='p-0 w-[20px] dark:text-offwhite' key={price} value={price} label={price.toString()}></option>
                ))}
            </datalist>
            <p className='dark:text-offwhite'>Price selected: <output id="priceSelected">{sliderValue}</output></p>
        </div>
    );
}

export { PriceSlider }