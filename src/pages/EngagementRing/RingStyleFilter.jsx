import React from 'react'
import { ringStyles } from '../../Utility/Constant'
import { setFilter } from '../../store/slices/productFilterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const RingStyleFilter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.productFilter);

  const handleRingTypeSelection = (option) => {
    dispatch(setFilter({ key: 'ringType', value: option.name })); // Update metal filter
    dispatch(setFilter({ key: 'page', value: '' })); // Update metal filter
  };


  return (
    <div className="mb-8 md:mb-0 md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5  flex gap-2 md:gap-6 md:justify-center snap-center">
      {ringStyles.map((style) => (
        <div
          key={style.id}
          className={`text-center cursor-pointer ring-1 ${filters.ringType === style.name ? "ring-black" : '' } engagement-ring-shape  md:ring-2  shadow-none pt-1.25 p-2 pb-1.75 md:min-w-[6rem] md:p-3 md:pt-1.5 md:border-none text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75`}
          onClick={() => handleRingTypeSelection(style)}
        >
          <div className="mb-2"> {style.icon}</div>
          <div className="text-sm">{style.name}</div>
        </div>
      ))}
    </div>
  )
}

export default RingStyleFilter