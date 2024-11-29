import React from 'react';
import { ShapeFilter } from './FilterSection/ShapeFilter';
import MetalFilter from './FilterSection/MetalFilter';
import { setFilter } from '../../store/slices/ringsFilterSlice';
import { useDispatch, useSelector } from 'react-redux';

const SelectFilter = () => {
    const filters = useSelector((state) => state.productFilter);
    const dispatch = useDispatch();

    // Handle price sorting
    const handlePriceSort = (sortOrder) => {
        if (sortOrder === "low-to-high") {
            dispatch(setFilter({ key: "price", value: "PRICE" })); // Set price filter to "PRICE" for low-to-high
        } else if (sortOrder === "high-to-low") {
            dispatch(setFilter({ key: "price", value: "" })); // Remove price filter for high-to-low
        }
        dispatch(setFilter({ key: 'page', value: '' })); // Reset to first page when changing price filter
    };

    return (
        <div className="hidden md:flex gap-4 mb-8 mt-8 hidden md:flex gap-2 flex-wrap items-center pt-4 border-t border-borders col-span-2 w-full">
            <MetalFilter />
            <ShapeFilter />
            <div className="ml-auto">
                <div className="FilterRelativeContainer relative min-w-[10rem]">
                    <select
                        value={filters?.price} // Ensure the select value is tied to the Redux state
                        onChange={(e) => handlePriceSort(e.target.value)}
                        className="flex items-center w-full gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md text-black text-sm leading-none transition-shadow duration-300"
                    >
                        {/* Conditionally render the options based on price filter */}
                        {filters?.price === "PRICE" ? (
                            <>
                                <option value="low-to-high">Price (low-to-high)</option>
                                <option value="high-to-low">Price (high-to-low)</option>
                            </>
                        ) : (
                            <>
                                <option value="high-to-low">Price (high-to-low)</option>
                                <option value="low-to-high">Price (low-to-high)</option>
                            </>
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SelectFilter;
