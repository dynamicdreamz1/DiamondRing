import React, { useEffect, useState } from 'react';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';
import { useDispatch } from 'react-redux';

const AdvancedColorFilter = () => {
  const optionsColor = ["J", "I", "H", "G", "F", "E", "D"];
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState([...optionsColor]);

  const handleClickClarity = (clickedOption) => {
    const clickedIndex = optionsColor.indexOf(clickedOption);

    // If all options are selected, reset to select only the clicked option
    if (selectedColor.length === optionsColor.length) {
      setSelectedColor([clickedOption]);
      return;
    }

    // If only one option is selected, select the range of clarity options between the first selected and the clicked one
    if (selectedColor.length === 1) {
      const newSelection = optionsColor.slice(
        Math.min(optionsColor.indexOf(selectedColor[0]), clickedIndex),
        Math.max(optionsColor.indexOf(selectedColor[0]), clickedIndex) + 1
      );
      setSelectedColor(newSelection);
      return;
    }

    // If multiple options are selected, toggle the clicked option
    if (selectedColor.length > 1) {
      // If the clicked option is already selected, deselect it
      if (selectedColor.includes(clickedOption)) {
        const newSelection = selectedColor.filter((opt) => opt !== clickedOption);
        setSelectedColor(newSelection);
      } else {
        // Otherwise, select the clicked option only
        setSelectedColor([clickedOption]);
      }
    }
  };


  useEffect(() => {
    if (selectedColor) {
      dispatch(updateFilter({ clarity: selectedColor })); // Update the Redux state with true/false
    }
  }, [selectedColor, dispatch])


  return (
    <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative">
      {optionsColor.map((option, idx) => (
        <button
          key={idx}
          type="button"
          className={`flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 `}
          onClick={() => handleClickClarity(option)}
        >
          <span>{option}</span>
          {idx < optionsColor.length - 1 && (
            <span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span>
          )}
        </button>
      ))}
      <div
        className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white"
        style={{
          left: `${(optionsColor.indexOf(selectedColor[0]) / optionsColor.length) * 100}%`,
          right: `${((optionsColor.length - 1 - optionsColor.indexOf(selectedColor[selectedColor.length - 1])) /
            optionsColor.length) *
            100}%`,
        }}
      >
        <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
      </div>
    </div>
  );
};

export default AdvancedColorFilter;
