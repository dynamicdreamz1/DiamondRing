import React from 'react'
import { useSelector } from 'react-redux';

const DiamondDetailsImagesInfo = () => {

  const { diamond, loading, error } = useSelector((state) => state.singleDiamond);

  return (
    <div className='customer-product-side-img-sec'>
      <div className='customer-product-side-img-sub lg:rounded-4xl bg-customGray-50 overflow-hidden relative hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr '>
        <div className='customer-product-zoom-img custom-zoom-wrapper-scale pointer-events-none mix-blend-multiply transition-transform duration-300 ease-in-out'>
          <div class="bg-white md:bg-customGray-50 w-full relative pb-square flex justify-center items-center round stone-prop ">
            <div class="size ver absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">5.12mm</div>
            <div class="size hor absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">5.09mm</div>
            <div class="prop hor absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">59%</div>
            <div class="prop ver absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">61.4%</div>
          </div>
        </div>
        <div className='customer-product-zoom-img'>
          <iframe
            src={diamond?.diamond?.video}
            width="100%" // Set the width to full
            height="100%" // Set the height to full
            frameBorder="0" // Removes the border
            allow="autoplay; fullscreen" // Allows autoplay and fullscreen
            allowFullScreen
            className="w-full h-full"
          >
            Your browser does not support iframes.
          </iframe>
        </div>

        <div className='customer-product-zoom-img'>
          <img src="/lexie-side-img2.webp" />
        </div>
        <div className='customer-product-zoom-img'>
          <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1164770/build/_assets/kzr-icon-gia-crt-N3UI7WNQ.svg" />
        </div>
      </div>
    </div>
  )
}

export default DiamondDetailsImagesInfo