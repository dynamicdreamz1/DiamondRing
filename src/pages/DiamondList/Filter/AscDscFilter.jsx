import React, { useState } from 'react';
import { updateFilter } from '../../../store/slices/diamondFilterSlice';
import { useDispatch } from 'react-redux';

const SortDropdown = () => {
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('price-low-to-high');

    const handleSort = (field, order) => {
        setSelectedSort(`${field}-${order}`);
        dispatch(updateFilter({ order_by: field }));
        dispatch(updateFilter({ order: order === 'low-to-high' ? 'ASC' : 'DESC' }));
        setIsDropdownOpen(false);
    };

    const getDisplayText = (sortValue) => {
        const [field, direction] = sortValue.split('-');
        return `${field.charAt(0).toUpperCase() + field.slice(1)} (${direction.replace(/-/g, ' ')})`;
    };

    return (
        <div className="ml-auto inline-block">
            <div className="FilterRelativeContainer relative">
                <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md transition-shadow duration-300 whitespace-nowrap"
                >
                    <div className="flex-1">
                        <div className="text-black text-sm leading-none">
                            {getDisplayText(selectedSort)}
                        </div>
                    </div>
                    <div
                        className={`relative w-6 h-6 text-black transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
                            }`}
                    >
                        <svg
                            className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </button>
                {isDropdownOpen && (
                    <div className="pt-2 absolute top-full right-0 z-[60]">
                        <div className="border-2 border-solid border-customGray-50 rounded-md bg-white overflow-hidden w-max">
                            {[
                                { field: 'price', label: 'Price' },
                                { field: 'carat', label: 'Carat' },
                                { field: 'color', label: 'Color' },
                                { field: 'clarity', label: 'Clarity' },
                                { field: 'cut', label: 'Cut' }
                            ].map((item) => (
                                <React.Fragment key={item.field}>
                                    <button
                                        onClick={() => handleSort(item.field, 'low-to-high')}
                                        className={`block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 whitespace-nowrap ${selectedSort === `${item.field}-low-to-high` ? "bg-customGray-50" : ""
                                            }`}
                                    >
                                        {item.label} (low-to-high)
                                    </button>
                                    <button
                                        onClick={() => handleSort(item.field, 'high-to-low')}
                                        className={`block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 whitespace-nowrap ${selectedSort === `${item.field}-high-to-low` ? "bg-customGray-50" : ""
                                            }`}
                                    >
                                        {item.label} (high-to-low)
                                    </button>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortDropdown;