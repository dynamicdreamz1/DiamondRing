import React, { useEffect, useState } from 'react';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';
import { useDispatch } from 'react-redux';

const FilterSlide = ({ label, options }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([...options]);

  const handleClick = (clickedOption) => {
    const clickedIndex = options.indexOf(clickedOption);

    // If all options are selected, reset to select only the clicked option
    if (selected.length === options.length) {
      setSelected([clickedOption]);
      return;
    }

    // If only one option is selected
    if (selected.length === 1) {
      // If the clicked option is the same as the currently selected option
      if (selected[0] === clickedOption) {
        // Reset to just this single option
        setSelected([clickedOption]);
        return;
      }

      // Select range between the current selection and the clicked option
      const newSelection = options.slice(
        Math.min(options.indexOf(selected[0]), clickedIndex),
        Math.max(options.indexOf(selected[0]), clickedIndex) + 1
      );
      setSelected(newSelection);
      return;
    }

    // If multiple options are selected
    if (selected.includes(clickedOption)) {
      // If the clicked option is already in the selection
      // Remove it from the selection
      const newSelection = selected.filter((opt) => opt !== clickedOption);

      // If only one option remains after removal, keep that single option
      if (newSelection.length === 1) {
        setSelected(newSelection);
        return;
      }

      // Otherwise, reset to the clicked option
      setSelected([clickedOption]);
      return;
    }

    // If the clicked option is not in the selection
    // Reset to the clicked option
    setSelected([clickedOption]);
  };


  useEffect(() => {
    if (selected) {
      dispatch(updateFilter({ [label]: selected })); // Use a dynamic key
      dispatch(updateFilter({ page: 0 }));

    }
  }, [selected, dispatch])


  return (
    <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative">
      {options.map((option, idx) => (
        <button
          key={idx}
          type="button"
          className={`flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 `}
          onClick={() => handleClick(option)}
        >
          <span>{option}</span>
          {idx < options.length - 1 && (
            <span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span>
          )}
        </button>
      ))}
      <div
        className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white"
        style={{
          left: `${(options.indexOf(selected[0]) / options.length) * 100}%`,
          right: `${((options.length - 1 - options.indexOf(selected[selected.length - 1])) /
            options.length) *
            100}%`,
        }}
      >
        <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
      </div>
    </div>
  );
};

export default FilterSlide;
