import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const [priceOptions, setPriceOptions] = useState([]);
    useEffect(() => {
        fetch('price-option.json')
            .then(res => res.json())
            .then(data => setPriceOptions(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl bg-orange-400 py-6">Best Prices In town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {
                    priceOptions.map(priceOption => <PriceOption key={priceOption.id} priceOption={priceOption}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;