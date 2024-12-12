import React from 'react'
import ClarityQuality from './DiamondQualities/ClarityQuality';
import CutQuality from './DiamondQualities/CutQuality';
import ColorQuality from './DiamondQualities/ColorQuality';

const DiamondQualities = () => {

 

    return (
        <div className='diamond-quality-main-sec pb-8'>
            <h2 className="text-3.25xl leading-1.1 font-light capitalize mb-4 md:mb-8 md:text-4xl md:leading-none md:font-semibold" tabIndex="-1">Understand Your Diamond Qualities</h2>
            <div className='StoneEducationItems__Wrapper md:flex md:flex-wrap md:justify-center md:gap-4'>
                <ColorQuality />
                <ClarityQuality />
                <CutQuality />

            </div>
        </div>
    )
}

export default DiamondQualities