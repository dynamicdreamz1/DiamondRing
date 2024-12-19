import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';

const PriceFilter = () => {
  const dispatch = useDispatch();
  const { price_from, price_to } = useSelector((state) => state.diamondFilter);

  const DEFAULT_MIN = 200;
  const DEFAULT_MAX = 100000;

  const [minPrice, setMinPrice] = useState(price_from || DEFAULT_MIN);
  const [maxPrice, setMaxPrice] = useState(price_to || DEFAULT_MAX);

  useEffect(() => {
    setMinPrice(price_from || DEFAULT_MIN);
    setMaxPrice(price_to || DEFAULT_MAX);
  }, [price_from, price_to]);

  const handlePriceChange = (value, isMin) => {
    const sanitizedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    const numericValue = sanitizedValue ? parseInt(sanitizedValue, 10) : null;

    if (isMin) {
      setMinPrice(numericValue !== null ? numericValue : '');
    } else {
      setMaxPrice(numericValue !== null ? numericValue : '');
    }
  };

  const handleBlur = () => {
    let min = minPrice || DEFAULT_MIN;
    let max = maxPrice || DEFAULT_MAX;

    if (min > max) {
      [min, max] = [max, min]; // Swap to ensure min is less than max
    }

    min = Math.max(min, DEFAULT_MIN);
    max = Math.min(max, DEFAULT_MAX);

    setMinPrice(min);
    setMaxPrice(max);

    dispatch(updateFilter({ price_from: min, price_to: max }));
    dispatch(updateFilter({ page: 0 }));
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
            <div className="absolute top-3 left-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Minimum
            </div>
            <input
              type="text"
              inputMode="numeric"
              className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5"
              value={minPrice ? `$${minPrice}` : ''}
              onChange={(e) => handlePriceChange(e.target.value, true)}
              onBlur={handleBlur}
              placeholder={`$${DEFAULT_MIN}`}
            />
          </div>
        </div>

        <div className="flex-1 h-2 border-r border-l border-borders flex items-center">
          <div className="h-px w-full bg-borders"></div>
        </div>

        {/* Maximum Price Input */}
        <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
          <div className="relative flex-grow border-r border-borders">
            <div className="absolute top-3 left-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Maximum
            </div>
            <input
              type="text"
              inputMode="numeric"
              className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5"
              value={maxPrice ? `$${maxPrice}` : ''}
              onChange={(e) => handlePriceChange(e.target.value, false)}
              onBlur={handleBlur}
              placeholder={`$${DEFAULT_MAX}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
