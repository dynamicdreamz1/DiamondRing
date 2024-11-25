import React, { useState } from 'react'
import { ShapeFilter } from './FilterSection/ShapeFilter';
import MetalFilter from './FilterSection/MetalFilter';
import { setFilter } from '../../store/slices/productFilterSlice';
import { useDispatch } from 'react-redux';



const SelectFilter = ({ }) => {

    const dispatch = useDispatch();
    
    const handlePriceSort = (sortOrder) => {
        if (sortOrder === "low-to-high") {
            dispatch(setFilter({ key: "price", value: "PRICE" })); // Update shape filter
        } else if (sortOrder === "high-to-low") {
            dispatch(setFilter({ key: "price", value: "" })); // Update shape filter

        }
    };

    return (
        <div className="hidden md:flex gap-4 mb-8 mt-8 hidden md:flex gap-2 flex-wrap items-center pt-4 border-t border-borders col-span-2 w-full">

            <MetalFilter />
            <ShapeFilter />
            <div className="ml-auto">
                <div className="FilterRelativeContainer relative min-w-[10rem]">
                    <select
                        onChange={(e) => handlePriceSort(e.target.value)}
                        className="flex items-center w-full gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md text-black text-sm leading-none transition-shadow duration-300"
                    >
                        <option value="high-to-low">Price (high-to-low)</option>
                        <option value="low-to-high">Price (low-to-high)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export default SelectFilter