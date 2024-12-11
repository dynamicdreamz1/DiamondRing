import React, { useState } from 'react';

const ClaritySelection = () => {
  const optionsClarity = ["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"];

  const [selectedClarity, setSelectedClarity] = useState([...optionsClarity]);

  const handleClickClarity = (clickedOption) => {
    const clickedIndex = optionsClarity.indexOf(clickedOption);

    // If all options are selected
    if (selectedClarity.length === optionsClarity.length) {
      setSelectedClarity([clickedOption]); // Select only the clicked option
      return;
    }

    // If only one option is selected
    if (selectedClarity.length === 1) {
      const singleSelectedIndex = optionsClarity.indexOf(selectedClarity[0]);
      const newSelection = optionsClarity.slice(
        Math.min(singleSelectedIndex, clickedIndex),
        Math.max(singleSelectedIndex, clickedIndex) + 1
      );
      setSelectedClarity(newSelection);
      return;
    }

    // If two options are selected
    if (selectedClarity.length === 2) {
      // If the clicked option is one of the selected options, deselect it and leave the other one selected
      if (selectedClarity.includes(clickedOption)) {
        const newSelection = selectedClarity.filter((opt) => opt !== clickedOption);
        setSelectedClarity(newSelection);
        return;
      }
      // If the clicked option is not one of the selected options, reset to select only the clicked option
      setSelectedClarity([clickedOption]);
      return;
    }

    const currentMinIndex = Math.min(...selectedClarity.map((opt) => optionsClarity.indexOf(opt)));
    const currentMaxIndex = Math.max(...selectedClarity.map((opt) => optionsClarity.indexOf(opt)));

    // If the clicked option is already selected
    if (selectedClarity.includes(clickedOption)) {
      // If it's the last selected option, revert to all options
      if (selectedClarity.length === 1) {
        setSelectedClarity([...optionsClarity]);
        return;
      }

      // Otherwise, deselect the clicked option
      const newSelection = selectedClarity.filter((opt) => opt !== clickedOption);
      setSelectedClarity(newSelection);
      return;
    }

    // If clicked option is adjacent to the current range
    if (clickedIndex === currentMinIndex - 1 || clickedIndex === currentMaxIndex + 1) {
      const newSelection = [...new Set([...selectedClarity, clickedOption])].sort(
        (a, b) => optionsClarity.indexOf(a) - optionsClarity.indexOf(b)
      );
      setSelectedClarity(newSelection);
      return;
    }

    // If clicked option is outside the current range, reset to the range between clicked and current selection
    if (clickedIndex < currentMinIndex || clickedIndex > currentMaxIndex) {
      const newSelection = optionsClarity.slice(
        Math.min(currentMinIndex, clickedIndex),
        Math.max(currentMaxIndex, clickedIndex) + 1
      );
      setSelectedClarity(newSelection);
    }
  };

  return (
    <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative">
      {optionsClarity.map((option, idx) => (
        <button
          key={idx}
          type="button"
          className={`flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 `}
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
