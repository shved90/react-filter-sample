import { ReactElement } from "react"

type ProductProps = {
    buildSlug: (newParam: string) => void
    activeParams: URLSearchParams
    newParam?: string
    buttonText: string
}

const ProductButton = ({ buildSlug, activeParams, newParam, buttonText }: ProductProps): ReactElement => {
    const [newKey, newValue] = newParam?.split("=") ?? [];
    const buttonStyles = {
        constant: 'py-2 px-4 font-semibold border rounded mr-2 mb-2',
        default: 'border-navyBlue',
        defaultHover: 'bg-transparent text-navyBlue hover:bg-navyBlue hover:text-white',
        defaultActive: 'bg-navyBlue text-white hover:bg-navyBlue-light',
        dark: 'dark:text-offwhite dark:border-offwhite',
        darkHover: 'dark:hover:bg-navyBlue-light dark:hover:text-white ',
        darkActive: 'dark:bg-navyBlue-lighter'
    }

    const allStyles = Object.values(buttonStyles).join(" ").trim();

    const activeStyles = Object.keys(buttonStyles)
        .filter((key) => key.includes("Active") && key !== "constant")
        .map((key) => buttonStyles[key as keyof typeof buttonStyles]).join(" ").trim();

    const nonActiveStyles = Object.keys(buttonStyles)
        .filter((key) => !key.includes("Active") && key !== "constant")
        .map((key) => buttonStyles[key as keyof typeof buttonStyles]).join(" ").trim();

    return (
        <>
            {newParam &&
                <button onClick={() => buildSlug(newParam)} className={`${buttonStyles.constant} ${activeParams.get(newKey) === newValue
                    ? activeStyles
                    : nonActiveStyles
                    }`}>{buttonText}</button>
            }
            {!newParam &&
                <button className={allStyles}>
                    {buttonText}
                </button>
            }
        </>
    )
}

export { ProductButton }