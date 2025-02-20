import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';

const CaratFilter = () => {
  const dispatch = useDispatch();

  // Get initial values from Redux state
  const { carat_from, carat_to } = useSelector((state) => state.diamondFilter);

  // Local state for slider values
  const [values, setValues] = useState([carat_from || 1, carat_to || 10]);

  const handleSliderChange = (event, newValue) => {
    setValues(newValue);
  };

  const handleSliderCommit = (event, newValue) => {
    dispatch(updateFilter({ carat_from: newValue[0], carat_to: newValue[1] }));
  };


  const handleBlur = () => {
    let [min, max] = values;
  
    // Check and reset minimum value
    if (!min || min < 1) {
      min = 1;
    }
  
    // Check and reset maximum value
    if (!max || max > 10) {
      max = 10;
    }
  
    // Ensure min is not greater than max
    if (min > max) {
      min = max;
    }
  
    setValues([min, max]);
  
    // Dispatch updates to Redux
    dispatch(updateFilter({ carat_from: min, carat_to: max }));
    dispatch(updateFilter({ page: 0 }));
  };
  
  const handleMinInputChange = (e) => {
    const newMin = parseFloat(e.target.value);
    if (!isNaN(newMin) && newMin <= values[1]) {
      setValues([newMin, values[1]]);
    } else if (e.target.value === '') {
      setValues(['', values[1]]);
    }
  };
  
  const handleMaxInputChange = (e) => {
    const newMax = parseFloat(e.target.value);
    if (!isNaN(newMax) && newMax >= values[0]) {
      setValues([values[0], newMax]);
    } else if (e.target.value === '') {
      setValues([values[0], '']);
    }
  };
  
  useEffect(() => {
    setValues([carat_from || 1, carat_to || 10]);
  }, [carat_from, carat_to]);

  return (
    <div className="collection-range-item">
      <div className="mb-6">
        <div className="text-base font-bold text-black leading-none">Carat</div>
      </div>

      {/* Material-UI Slider */}
      <div className="p-0">
        <Slider
          value={values}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderCommit}
          valueLabelDisplay="auto"
          min={1}
          max={10}
          step={0.01}
          sx={{
            color: '#0f834d',
            '& .MuiSlider-thumb': {
              backgroundColor: '#0f834d',
            },
          }}
        />
      </div>

      <div className="flex justify-between gap-2 items-center pt-2">
        <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
          <div className="relative flex-grow border-r border-borders">
            <div className="absolute top-3 right-10 md:left-3 xl:left-[100px]  text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Minimum
            </div>
            <input
              type="number"
              step="0.01"
              min={0.5}
              max={values[1]}
              className="reset-input reset-styles border-none p-3 py-2 md:py-6 xl:py-2 focus:shadow-none text-base leading-tight text-black tracking-wide w-full bg-transparent"
              value={values[0]}
              onChange={handleMinInputChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="flex-1 h-2 border-r border-l border-borders flex items-center">
          <div className="h-px w-full bg-borders"></div>
        </div>

        {/* Maximum Carat Input */}
        <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
          <div className="relative flex-grow border-r border-borders">
            <div className="absolute top-3 md:left-3 xl:left-[100px] right-10 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Maximum
            </div>
            <input
              type="number"
              step="0.01"
              min={values[0]}
              max={15}
              className="reset-input reset-styles border-none p-3 py-2 md:py-6 xl:py-2 text-base leading-tight text-black tracking-wide w-full bg-transparent"
              value={values[1]}
              onChange={handleMaxInputChange}
              onBlur={handleBlur}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaratFilter;
