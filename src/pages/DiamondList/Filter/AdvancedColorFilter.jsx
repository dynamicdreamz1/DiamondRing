import React, { useState } from 'react';

const AdvancedColorFilter = () => {
  const optionsColor = ["J", "I", "H", "G", "F", "E", "D"];

  const [selectedColor, setSelectedColor] = useState([...optionsColor]);

  const handleClickClarity = (clickedOption) => {
    const clickedIndex = optionsColor.indexOf(clickedOption);

    // If all options are selected
    if (selectedColor.length === optionsColor.length) {
      setSelectedColor([clickedOption]); // Select only the clicked option
      return;
    }

    // If only one option is selected
    if (selectedColor.length === 1) {
      const singleSelectedIndex = optionsColor.indexOf(selectedColor[0]);
      const newSelection = optionsColor.slice(
        Math.min(singleSelectedIndex, clickedIndex),
        Math.max(singleSelectedIndex, clickedIndex) + 1
      );
      setSelectedColor(newSelection);
      return;
    }

    // If two options are selected
    if (selectedColor.length === 2) {
      // If the clicked option is one of the selected options, deselect it and leave the other one selected
      if (selectedColor.includes(clickedOption)) {
        const newSelection = selectedColor.filter((opt) => opt !== clickedOption);
        setSelectedColor(newSelection);
        return;
      }
      // If the clicked option is not one of the selected options, reset to select only the clicked option
      setSelectedColor([clickedOption]);
      return;
    }

    const currentMinIndex = Math.min(...selectedColor.map((opt) => optionsColor.indexOf(opt)));
    const currentMaxIndex = Math.max(...selectedColor.map((opt) => optionsColor.indexOf(opt)));

    // If the clicked option is already selected
    if (selectedColor.includes(clickedOption)) {
      // If it's the last selected option, revert to all options
      if (selectedColor.length === 1) {
        setSelectedColor([...optionsColor]);
        return;
      }

      // Otherwise, deselect the clicked option
      const newSelection = selectedColor.filter((opt) => opt !== clickedOption);
      setSelectedColor(newSelection);
      return;
    }

    // If clicked option is adjacent to the current range
    if (clickedIndex === currentMinIndex - 1 || clickedIndex === currentMaxIndex + 1) {
      const newSelection = [...new Set([...selectedColor, clickedOption])].sort(
        (a, b) => optionsColor.indexOf(a) - optionsColor.indexOf(b)
      );
      setSelectedColor(newSelection);
      return;
    }

    // If clicked option is outside the current range, reset to the range between clicked and current selection
    if (clickedIndex < currentMinIndex || clickedIndex > currentMaxIndex) {
      const newSelection = optionsColor.slice(
        Math.min(currentMinIndex, clickedIndex),
        Math.max(currentMaxIndex, clickedIndex) + 1
      );
      setSelectedColor(newSelection);
    }
  };

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
