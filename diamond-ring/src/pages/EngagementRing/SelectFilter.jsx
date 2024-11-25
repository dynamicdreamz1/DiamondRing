import React, { useState } from 'react'
import { ShapeFilter } from './FilterSection/ShapeFilter';
import MetalFilter from './FilterSection/MetalFilter';



const SelectFilter = ({ showPriceFilter, setShowPriceFilter }) => {

    return (
        <div className="hidden md:flex gap-4 mb-8 mt-8 hidden md:flex gap-2 flex-wrap items-center pt-4 border-t border-borders col-span-2 w-full">

            <MetalFilter />
            <ShapeFilter />
            <div className="ml-auto">
                <div className="FilterRelativeContainer relative min-w-[10-rem] ">
                    <button
                        onClick={() => setShowPriceFilter(!showPriceFilter)}
                        className="flex items-center w-full gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md transition-shadow duration-300 "
                    >
                        <div className="flex-1 ">
                            <div className="text-black text-sm leading-none">
                                Price (low-to-high)
                            </div>
                        </div>
                        <div className="relative w-6 h-6 text-black transition-transform duration-300 ">
                            <svg className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
                        </div>
                    </button>
                    <div className={`pt-2 absolute top-full left-0 right-0 z-[60] ${!showPriceFilter ? "invisible" : ""} `}>
                        <div className="border-2 border-solid border-customGray-50 rounded-md bg-white overflow-hidden">
                            <button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 bg-customGray-50">
                                Price (low-to-high)
                            </button>
                            <button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 ">
                                Price (high-to-low)
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default SelectFilter