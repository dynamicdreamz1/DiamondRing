import React, { useEffect, useState } from 'react';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';
import { useDispatch } from 'react-redux';

const ClaritySelection = () => {
  const optionsClarity = ["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"];
  const dispatch = useDispatch();

  const [selectedClarity, setSelectedClarity] = useState([...optionsClarity]);

  const handleClickClarity = (clickedOption) => {
    const clickedIndex = optionsClarity.indexOf(clickedOption);

    // If all options are selected, reset to select only the clicked option
    if (selectedClarity.length === optionsClarity.length) {
      setSelectedClarity([clickedOption]);
      return;
    }

    // If only one option is selected
    if (selectedClarity.length === 1) {
      // If the clicked option is the same as the currently selected option
      if (selectedClarity[0] === clickedOption) {
        // Reset to just this single option
        setSelectedClarity([clickedOption]);
        return;
      }

      // Select range between the current selection and the clicked option
      const newSelection = optionsClarity.slice(
        Math.min(optionsClarity.indexOf(selectedClarity[0]), clickedIndex),
        Math.max(optionsClarity.indexOf(selectedClarity[0]), clickedIndex) + 1
      );
      setSelectedClarity(newSelection);
      return;
    }

    // If multiple options are selected
    if (selectedClarity.includes(clickedOption)) {
      // If the clicked option is already in the selection
      // Remove it from the selection
      const newSelection = selectedClarity.filter((opt) => opt !== clickedOption);

      // If only one option remains after removal, keep that single option
      if (newSelection.length === 1) {
        setSelectedClarity(newSelection);
        return;
      }

      // Otherwise, reset to the clicked option
      setSelectedClarity([clickedOption]);
      return;
    }

    // If the clicked option is not in the selection
    // Reset to the clicked option
    setSelectedClarity([clickedOption]);
  };

  useEffect(() => {
    if (selectedClarity) {
      dispatch(updateFilter({ clarity: selectedClarity })); // Update the Redux state with true/false
      dispatch(updateFilter({ page: 0 }));

    }
  }, [selectedClarity, dispatch])


  return (
    <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative">
      {optionsClarity.map((option, idx) => (
        <button
          key={idx}
          type="button"
          className={`flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10`}
          onClick={() => handleClickClarity(option)}
        >
          <span>{option}</span>
          {idx < optionsClarity.length - 1 && (
            <span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span>
          )}
        </button>
      ))}
      <div
        className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white"
        style={{
          left: `${(optionsClarity.indexOf(selectedClarity[0]) / optionsClarity.length) * 100}%`,
          right: `${((optionsClarity.length - 1 - optionsClarity.indexOf(selectedClarity[selectedClarity.length - 1])) /
            optionsClarity.length) *
            100}%`,
        }}
      >
        <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
      </div>
    </div>
  );
};

export default ClaritySelection;
