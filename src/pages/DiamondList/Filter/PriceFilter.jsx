import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';

const PriceFilter = () => {
    const dispatch = useDispatch();
    const { price_from, price_to } = useSelector((state) => state.diamondFilter);

    // Define default min and max values
    const DEFAULT_MIN = 200;
    const DEFAULT_MAX = 100000;

    const [minPrice, setMinPrice] = useState(price_from ? String(price_from) : String(DEFAULT_MIN));
    const [maxPrice, setMaxPrice] = useState(price_to ? String(price_to) : String(DEFAULT_MAX));
    const [invalidInput, setInvalidInput] = useState(false);

    // Update the local state when the Redux store changes
    useEffect(() => {
      setMinPrice(price_from ? String(price_from) : String(DEFAULT_MIN));
      setMaxPrice(price_to ? String(price_to) : String(DEFAULT_MAX));
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
      let min = parseFloat(minPrice) || DEFAULT_MIN;
      let max = parseFloat(maxPrice) || DEFAULT_MAX;

      // Special handling when max is DEFAULT_MAX and min is the same
      if (max === DEFAULT_MAX && min === DEFAULT_MAX) {
        min = DEFAULT_MIN;
      }
  
      // Ensure min is not less than DEFAULT_MIN
      min = Math.max(min, DEFAULT_MIN);
      
      // Ensure max is not greater than DEFAULT_MAX
      max = Math.min(max, DEFAULT_MAX);
  
      // Ensure that the min price is not greater than the max price
      if (min > max) {
        // Set invalid input state
        setInvalidInput(true);
        setMinPrice(`-${Math.abs(min - max)}`);
        setMaxPrice(`-${Math.abs(min - max)}`);

        // Revert to correct values after 1 second
        setTimeout(() => {
          // Ensure values are within default range
          const correctMin = Math.max(DEFAULT_MIN, Math.min(min, max));
          const correctMax = Math.min(DEFAULT_MAX, Math.max(min, max));

          setMinPrice(String(correctMin));
          setMaxPrice(String(correctMax));
          setInvalidInput(false);

          // Dispatch the corrected filter values to the Redux store
          dispatch(updateFilter({ 
            price_from: correctMin, 
            price_to: correctMax 
          }));
        }, 1000);
      } else {
        // Dispatch the updated filter values to the Redux store
        dispatch(updateFilter({ price_from: min, price_to: max }));
        dispatch(updateFilter({ page: 0 }));

      }
    };

    return (
        <div className="collection-range-item">
            <div className="mb-2">
                <div className="text-base font-bold text-black leading-none">Budget</div>
            </div>
            <div className="flex justify-between gap-2 items-center pt-1">
                {/* Minimum Price Input */}
                <div className={`flex border ${invalidInput ? 'border-red-500' : 'border-borders'} bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]`}>
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
                <div className={`flex border ${invalidInput ? 'border-red-500' : 'border-borders'} bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]`}>
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