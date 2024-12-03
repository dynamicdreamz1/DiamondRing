import React, { useState } from 'react'
import { colorTabsPanel } from '../../Utility/Constant';
import ClarityQuality from './ DiamondQualities/ClarityQuality';
import DiamondCutComponent from './ DiamondQualities/DiamondCutComponent';

const DiamondQualities = () => {

 

    return (
        <div className='diamond-quality-main-sec pb-8'>
            <h2 className="text-3.25xl leading-1.1 font-light capitalize mb-4 md:mb-8 md:text-4xl md:leading-none md:font-semibold" tabindex="-1">Understand Your Diamond Qualities</h2>
            <div className='StoneEducationItems__Wrapper md:flex md:flex-wrap md:justify-center md:gap-4'>
                <div className='colorRangeBlock  md:flex md:flex-col md:justify-between md:w-1/2-gap-4 md:p-3 xl:w-1/3-gap-4 md:bg-customGray-50 md:rounded-2.5xl'>
                    <div className='hidden md:block mb-2'>
                        <div className='flex flex-wrap gap-2 items-center whitespace-nowrap'>
                            <div className='flex items-center gap-2 text-base leading-none rounded-lg justify-between py-2 pl-3 pr-2 text-customGray-600 bg-white shadow shrink-0 font-semibold'>
                                <span className="uppercase">Color</span>
                                <span className="text-black font-bold py-1.5 px-2 bg-borders rounded-sm">F</span>
                            </div>
                        </div>
                    </div>
                    <div className='StoneEducationItem__Content w-full bg-white p-4 pb-3 rounded-lg  shadow'>
                        <div className='StoneEducationItem__ImageContainer mb-2 w-full'>
                            <div className='StoneEducationItem__ImageWrapper relative pt-[60%]  '>
                                <img className='absolute w-full h-full object-contain top-0 left-0 z-10' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-stone-6BRHTXNY.svg" alt="" />
                                <img className='absolute w-full h-full object-contain transition-opacity duration-300 top-0 left-0' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-solid-WWFSS453.svg" alt="" />
                            </div>
                        </div>
                        <div className='mb-2 diamond-quality-shape-sec'>
                            <div className='grid-with-variables bg-customGray-75 border-borders border rounded-lg h-10 relative'>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black font-proximaNovaCondensed"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                                <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                            </div>
                        </div>
                        <div className="px-1 min-h-[3.25rem] "><div className="text-1.5sm text-black font-semibold leading-tight">Completely colorless, these diamonds are rare and highly sought after. A good choice when money is no object.</div></div>

                    </div>
                    <div className="StoneEducationItem__PopupFooter pt-2 pb-3 px-1  "><div className="text-xs leading-tight text-customGray-250">Color refers to the natural tint of a diamond. The closer the diamond is to “colorless” the rarer it is. The industry standard to grading color in a diamond is to assign a letter grade from D (colorless) to J (nearly colorless)</div></div>
                </div>

                <ClarityQuality />
                <DiamondCutComponent />

            </div>
        </div>
    )
}

export default DiamondQualities