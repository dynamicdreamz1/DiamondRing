import React from 'react'
import { ringStyles } from '../../Utility/Constant'

const RingStyleFilter = () => {
  return (
    <div className="md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5  flex gap-6 md:justify-center snap-center">
          {ringStyles.map((style) => (
            <div
              key={style.id}
              className="text-center cursor-pointer ring-1 ring-black md:ring-2 pt-1.25 p-2 pb-1.75 md:min-w-[6rem] md:p-3 md:pt-1.5 md:border-none text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"
            >
              <div className="mb-2"> {style.icon}</div>
              <div className="text-sm">{style.name}</div>
            </div>
          ))}
        </div>
  )
}

export default RingStyleFilter