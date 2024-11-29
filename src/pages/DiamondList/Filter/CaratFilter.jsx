import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Range } from 'react-range';
import { updateFilter } from './actions'; // Your Redux action

const CaratFilter = () => {
  const dispatch = useDispatch();

  // Get initial values from Redux state
  const { carat_from, carat_to } = useSelector((state) => state.diamondFilter);

  // Local state for the slider
  const [values, setValues] = useState([carat_from || 1, carat_to || 10]);

  const handleSliderChange = (newValues) => {
    setValues(newValues);
  };

  const handleSliderFinalChange = (newValues) => {
    dispatch(updateFilter({ carat_from: newValues[0], carat_to: newValues[1] }));
  };

  const handleMinInputChange = (e) => {
    const newMin = parseFloat(e.target.value) || 0;
    if (newMin <= values[1]) {
      setValues([newMin, values[1]]);
    }
  };

  const handleMaxInputChange = (e) => {
    const newMax = parseFloat(e.target.value) || 0;
    if (newMax >= values[0]) {
      setValues([values[0], newMax]);
    }
  };

  const handleMinInputBlur = () => {
    if (values[0] > values[1]) {
      setValues([values[1], values[1]]);
    }
    dispatch(updateFilter({ carat_from: values[0], carat_to: values[1] }));
  };

  const handleMaxInputBlur = () => {
    if (values[1] < values[0]) {
      setValues([values[0], values[0]]);
    }
    dispatch(updateFilter({ carat_from: values[0], carat_to: values[1] }));
  };

  return (
    <div className="collection-range-item">
      <div className="mb-6">
        <div className="text-base font-bold text-black leading-none">Carat</div>
      </div>

      {/* Slider */}
      <div className="px-3.5">
        <Range
          step={0.01}
          min={0.5}
          max={15}
          values={values}
          onChange={handleSliderChange}
          onFinalChange={handleSliderFinalChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                background: '#ddd',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '100%',
                  background: '#0f834d',
                  left: `${((values[0] - 0.5) / (15 - 0.5)) * 100}%`,
                  right: `${100 - ((values[1] - 0.5) / (15 - 0.5)) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: '#0f834d',
                border: '2px solid white',
              }}
            />
          )}
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
              onBlur={handleMinInputBlur}
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
              onBlur={handleMaxInputBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaratFilter;
