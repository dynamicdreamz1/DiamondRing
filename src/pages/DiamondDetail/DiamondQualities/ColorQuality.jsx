import React, { useState } from 'react';
import { colorTabsPanel } from '../../../Utility/Constant';
import colorqualityimg1 from "../../../assets/Images/color-quality-img1.svg";
import colorqualityimg2 from "../../../assets/Images/color-quality-img2.svg";


const ColorQuality = () => {
  const [activeTab, setActiveTab] = useState(colorTabsPanel[0]);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab index

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);
    setActiveIndex(index);
  };

  return (
    <div className='colorRangeBlock md:flex md:flex-col md:justify-between md:w-1/2-gap-4 md:p-3 xl:w-1/3-gap-4 md:bg-customGray-50 md:rounded-2.5xl'>
      <div className='hidden md:block mb-2'>
        <div className='flex flex-wrap gap-2 items-center whitespace-nowrap'>
          <div className='flex items-center gap-2 text-base leading-none rounded-lg justify-between py-2 pl-3 pr-2 text-customGray-600 bg-white shadow shrink-0 font-semibold'>
            <span className="uppercase">Color</span>
            <span className="text-black font-bold py-1.5 px-2 bg-borders rounded-sm">{activeTab.name}</span>
          </div>
        </div>
      </div>

      <div className='StoneEducationItem__Content w-full bg-white p-4 pb-3 rounded-lg shadow'>
        <div className='StoneEducationItem__ImageContainer mb-2 w-full'>
          <div className='StoneEducationItem__ImageWrapper relative pt-[60%]'>
            <img
              className='absolute w-full h-full object-contain top-0 left-0 z-20'
              src={colorqualityimg1}
              alt={`${activeTab.name} color diamond stone`}
            />
            <img
              className="absolute w-full h-full object-contain top-0 left-0 z-10 transition-opacity duration-500 ease-in-out"
              style={{
                opacity:
                  activeTab.name === 'D' ? 0 :
                    activeTab.name === 'E' ? 0 :
                      activeTab.name === 'F' ? 0 :
                        activeTab.name === 'G' ? 0.50 :
                          activeTab.name === 'H' ? 0.50 :
                            activeTab.name === 'I' ? 1 :
                              activeTab.name === 'J' ? 1 : 1,
              }}
              src={colorqualityimg2}
              alt={`${activeTab.name} color diamond solid`}
            />

          </div>
        </div>

        <div className='mb-2 diamond-quality-shape-sec'>
          <div className='grid-with-variables bg-customGray-75 border-borders border rounded-lg h-10 relative flex'>
            <div
              className="absolute top-0 left-0 h-full w-full rounded-lg border-2 border-black transition-transform duration-300 bg-white"
              style={{
                width: `${100 / colorTabsPanel.length}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            ></div>
            {colorTabsPanel.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabClick(tab, index)}
                className={`
                flex-1 px-2 h-10 transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative font-proximaNovaCondensed
                ${activeTab.id === tab.id ? 'font-bold text-black' : 'text-customGray-500 hover:text-black'}
              `}
              >
                <span>{tab.name}</span>
                <span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-1 min-h-[3.25rem]">
          <div className="text-1.5sm text-black font-semibold leading-tight transition-all duration-300 ease-in-out">
            {activeTab.des}
          </div>
        </div>
      </div>

      <div className="StoneEducationItem__PopupFooter pt-2 pb-3 px-1">
        <div className="text-xs leading-tight text-customGray-250">
          Color refers to the natural tint of a diamond. The closer the diamond is to "colorless" the rarer it is. The industry standard to grading color in a diamond is to assign a letter grade from D (colorless) to J (nearly colorless)
        </div>
      </div>
    </div>
  );
};

export default ColorQuality;