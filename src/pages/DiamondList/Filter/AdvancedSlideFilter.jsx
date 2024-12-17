import React, { useEffect, useState } from 'react'

const AdvancedSlideFilter = ({ setFilter }) => {
    const options = ["Good", "Very Good", "Excellent"];
    const [selected, setSelected] = useState([...options]); // Default: All selected

    const handleClick = (option) => {
        const isAllSelected = selected.length === options.length;

        if (isAllSelected) {
            // If all are selected, deselect all and select only the clicked option
            setSelected([option]);
        } else if (selected.includes(option)) {
            // If the clicked option is already selected, toggle it off
            const newSelection = selected.filter((item) => item !== option);
            if (newSelection.length === 0) {
                setSelected([...options]); // Select all if no option remains selected
            } else {
                setSelected(newSelection);
            }
        } else {
            if (selected.includes("Good") && selected.includes("Very Good") && option === "Excellent") {
                // If "Good" and "Very Good" are selected and "Excellent" is clicked
                setSelected([option]); // Select only "Excellent"
                return;
            }

            if (selected.includes("Very Good") && selected.includes("Excellent") && option === "Good") {
                // If "Very Good" and "Excellent" are selected and "Good" is clicked
                setSelected([option]); // Select only "Good"
                return;
            }

            if (selected.includes("Excellent") && option === "Good") {
                // If "Excellent" is selected and "Good" is clicked
                setSelected([...options]); // Select all
                return;
            }

            if (selected.includes("Good") && selected.length === 1 && option === "Excellent") {
                // If only "Good" is selected and "Excellent" is clicked
                setSelected([...options]); // Select all
                return;
            }

            // Add adjacent selection logic
            const newSelection = [...selected, option].sort(
                (a, b) => options.indexOf(a) - options.indexOf(b)
            );
            const isSequential = newSelection.every(
                (item, i, arr) =>
                    i === 0 || options.indexOf(item) - options.indexOf(arr[i - 1]) === 1
            );
            if (isSequential) {
                setSelected(newSelection); // Select if adjacent
            } else {
                setSelected([option]); // Otherwise, select only the clicked option
            }
        }
    };


    useEffect(() => {
        // Map selected shorthand to full names and set as filter
        const shorthandMap = {
            "Excellent": "EX",
            "Very Good": "VG",
            "Good": "GD"
        };
        const mappedFilter = selected.map(name => shorthandMap[name]);
        setFilter(mappedFilter);
    }, [selected]);


    return (
        <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
            {options.map((option, idx) => (
                <button
                    key={idx}
                    type="button"
                    className={`flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 ${selected.includes(option) ? "" : ""
                        }`}
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
                }}>
                <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
            </div>

        </div>
    )
}

export default AdvancedSlideFilter