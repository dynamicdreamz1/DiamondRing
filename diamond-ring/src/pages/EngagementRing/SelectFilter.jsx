import React, { useState } from 'react'
import { ShapeFilter } from './FilterSection/ShapeFilter';
import MetalFilter from './FilterSection/MetalFilter';



const SelectFilter = ({ showPriceFilter, setShowPriceFilter }) => {

    const handlePriceSort = (sortOrder) => {

        console.log("sortOrder",sortOrder);
        if (sortOrder === "low-to-high") {
          // Implement logic for sorting by low-to-high
          console.log("Sorting: Low to High");
        } else if (sortOrder === "high-to-low") {
          // Implement logic for sorting by high-to-low
          console.log("Sorting: High to Low");
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
                        <option value="low-to-high">Price (low-to-high)</option>
                        <option value="high-to-low">Price (high-to-low)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export default SelectFilter