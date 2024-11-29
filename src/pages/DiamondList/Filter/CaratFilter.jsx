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

  const handleMinInputChange = (e) => {
    const newMin = parseFloat(e.target.value) || 0.5;
    if (newMin <= values[1]) {
      setValues([newMin, values[1]]);
    }
  };

  const handleMaxInputChange = (e) => {
    const newMax = parseFloat(e.target.value) || 15;
    if (newMax >= values[0]) {
      setValues([values[0], newMax]);
    }
  };

  const handleBlur = () => {
    if (values[0] > values[1]) {
      setValues([values[1], values[1]]);
    }
    dispatch(updateFilter({ carat_from: values[0], carat_to: values[1] }));
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

      {/* Input Fields */}
      <div className="flex justify-between gap-2 items-center pt-6">
        {/* Minimum Carat Input */}
        <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
          <div className="relative flex-grow border-r border-borders">
            <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Minimum
            </div>
            <input
              type="number"
              step="0.01"
              min={0.5}
              max={values[1]}
              className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent"
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
            <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none">
              Maximum
            </div>
            <input
              type="number"
              step="0.01"
              min={values[0]}
              max={15}
              className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent"
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
