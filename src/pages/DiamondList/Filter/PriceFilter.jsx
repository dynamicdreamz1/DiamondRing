import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';

const PriceFilter = () => {
    const dispatch = useDispatch();
    const { price_from, price_to } = useSelector((state) => state.diamondFilter);

    const [minPrice, setMinPrice] = useState(price_from ? String(price_from) : '');
    const [maxPrice, setMaxPrice] = useState(price_to ? String(price_to) : '');
  
    // Update the local state when the Redux store changes
    useEffect(() => {
      setMinPrice(price_from ? String(price_from) : '');
      setMaxPrice(price_to ? String(price_to) : '');
    }, [price_from, price_to]);
  
    const handlePriceFromChange = (e) => {
      const value = e.target.value.replace('$', '').replace(',', '').trim();
      setMinPrice(value);
    };
  
    const handlePriceToChange = (e) => {
      const value = e.target.value.replace('$', '').replace(',', '').trim();
      setMaxPrice(value);
    };
  
    const handleBlur = () => {
      const min = parseFloat(minPrice) || 0; // Default to 0 if invalid
      const max = parseFloat(maxPrice) || 0; // Default to 0 if invalid
  
      // Ensure that the min price is not greater than the max price
      if (min > max) {
        setMinPrice(String(max));
        setMaxPrice(String(min));
      }
  
      // Dispatch the updated filter values to the Redux store
      dispatch(updateFilter({ price_from: min, price_to: max }));
    };

    return (
        <div className="collection-range-item">
            <div className="mb-2">
                <div className="text-base font-bold text-black leading-none">Budget</div>
            </div>
            <div className="flex justify-between gap-2 items-center pt-1">
                {/* Minimum Price Input */}
                <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                    <div className="relative flex-grow border-r border-borders">
                        <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">Minimum</div>
                        <input
                            type="text"
                            inputMode="decimal"
                            className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5"
                            value={`$ ${minPrice}`}
                            onChange={handlePriceFromChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>

                <div className="flex-1 h-2 border-r border-l border-borders flex items-center">
                    <div className="h-px w-full bg-borders"></div>
                </div>

                {/* Maximum Price Input */}
                <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                    <div className="relative flex-grow border-r border-borders">
                        <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">Maximum</div>
                        <input
                            type="text"
                            inputMode="decimal"
                            className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5"
                            value={`$ ${maxPrice}`}
                            onChange={handlePriceToChange}
                            onBlur={handleBlur}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceFilter