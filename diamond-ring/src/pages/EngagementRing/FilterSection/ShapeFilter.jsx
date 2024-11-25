import React, { useState } from 'react'
import { shapeOptions } from '../../../Utility/Constant'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/actions/productActions';
import { openFilter, closeFilter } from '../../../store/slices/productSlice';

export const ShapeFilter = () => {
    const dispatch = useDispatch();
    const { activeFilter } = useSelector((state) => state.products);
    const [selectedIndex, setSelectedIndex] = useState(null); // state to track selected button

    const handleShapeSelectionSelection = (option, index) => {
        setSelectedIndex(index)
        fetchProducts({ first: 250, selectShape: option })(dispatch);
        dispatch(closeFilter({ shape :"" }));
    };


    const toggleFilter = (filter) => {
        dispatch(openFilter({ filter }));
    };

    const toggleClose = (filter) => {
        dispatch(closeFilter({ filter }));
    };

    return (
        <div aria-expanded="true">
            <div className="relative z-10">
                <button
                    onClick={() => toggleFilter('shape')}
                    type="button"
                    className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-md border transition-colors duration-300 text-black cursor-pointer text-sm leading-none border-borders"
                >
                    <span>Select Shape</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300">
                        <svg
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </svg>
                </button>
                <div className={`absolute top-full left-0 w-[22.5rem] pt-3 ${activeFilter === 'shape' ? "" : "invisible"} `}>
                    <div className="p-5.5 bg-white rounded-2xl shadow-filter-dropdown">
                        <button
                            onClick={() => toggleClose("")}
                            type="button"
                            className="p-0 border-0 bg-transparent text-black opacity-50 absolute top-4 right-1 z-10"
                            title="Preview"
                        >
                            <svg className="block relative w-9 h-9">
                                <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            d="M12.6201 12.62L23.3799 23.3798"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M12.6201 23.3798L23.3799 12.62"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                        ></path>
                                    </g>
                                </svg>
                            </svg>
                        </button>
                        <div className="flex gap-0.5 items-center mb-4">
                            <div className="text-base font-bold text-black leading-none">
                                Metal
                            </div>
                            <div className="text-base font-bold text-black leading-none ">
                                :
                            </div>
                            <div className="text-base text-customGray-500 leading-none ml-0.5 ">
                                White Gold
                            </div>
                        </div>
                        <div className="relative">
                            <div className="md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5 flex md:grid md:grid-cols-4 md:justify-center md:snap-center">
                                {shapeOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleShapeSelectionSelection(option, index)}                                            // Set the selected button's index
                                        className={`min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors 
                                            ${option.color === 'gold' ? 'bg-customGold' : 'bg-customSilver'} 
                                            ${selectedIndex === index ? 'border-4 border-black text-sm ring-black border-black' : 'border-1'} 
                                            ring-1 border-borders`} // Conditional styles based on selection
                                    >
                                        <div className="mb-2"> {option.icon}</div>
                                        <div className={`-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight 
                                                electedIndex === index ? 'text-sm' : 'text-base'}`}> {/* Adjust text size */}
                                            {option.name}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
