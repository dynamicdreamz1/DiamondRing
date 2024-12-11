import React, { useState } from 'react';

const ClaritySelection = () => {
  const optionsClarity = ["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"];

  const [selectedClarity, setSelectedClarity] = useState([...optionsClarity]);

  const handleClickClarity = (clickedOption) => {
    const clickedIndex = optionsClarity.indexOf(clickedOption);
  
    // If all options are currently selected
    if (selectedClarity.length === optionsClarity.length) {
      setSelectedClarity([clickedOption]);
      return;
    }
  
    // If the clicked option is already selected
    if (selectedClarity.includes(clickedOption)) {
      // If it's the last selected option, revert to all selected
      if (selectedClarity.length === 1) {
        setSelectedClarity([...optionsClarity]);
        return;
      }
  
      // Otherwise, remove the clicked option
      const newSelection = selectedClarity.filter((opt) => opt !== clickedOption);
      setSelectedClarity(newSelection);
      return;
    }
  
    const currentMinIndex = Math.min(...selectedClarity.map((opt) => optionsClarity.indexOf(opt)));
    const currentMaxIndex = Math.max(...selectedClarity.map((opt) => optionsClarity.indexOf(opt)));
  
    // Handle adjacent clicks or clicks within the current range
    if (
      clickedIndex === currentMinIndex - 1 ||
      clickedIndex === currentMaxIndex + 1 ||
      (clickedIndex >= currentMinIndex && clickedIndex <= currentMaxIndex)
    ) {
      const newSelection = [...new Set([...selectedClarity, clickedOption])]
        .sort((a, b) => optionsClarity.indexOf(a) - optionsClarity.indexOf(b));
      setSelectedClarity(newSelection);
      return;
    }
  
    // Handle clicks outside the current range
    if (
      clickedIndex < currentMinIndex - 1 || 
      clickedIndex > currentMaxIndex + 1
    ) {
      setSelectedClarity([clickedOption]);
      return;
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