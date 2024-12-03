import React from 'react'
import { useSelector } from 'react-redux';
import { CertificateImage, ViewCertificate } from "../../Component/Common/ViewCertification"

const DiamondDetailsImagesInfo = () => {

  const { diamond } = useSelector((state) => state.singleDiamond);

  console.log('diamond', diamond);


  return (
    <div className='customer-product-side-img-sec CustomProductGallery__container relative w-full overflow-hidden EnhancedProductGallery md:static lg:rounded-4xl lg:bg-white'>
      <div className='customer-product-side-img-sub lg:rounded-4xl bg-customGray-50 overflow-hidden relative hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr '>
        <div className="customer-product-zoom-img custom-zoom-wrapper-scale pointer-events-none mix-blend-multiply transition-transform duration-300 ease-in-out">
          <div className="bg-white md:bg-customGray-50 w-full relative pb-square flex justify-center items-center round stone-prop">
            {/* Vertical Size */}
            <div className="size ver absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">
              {diamond?.diamond?.certificate?.length ? `${parseFloat(diamond.diamond.certificate.length).toFixed(2)}mm` : "N/A"}
            </div>

            {/* Horizontal Size */}
            <div className="size hor absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">
              {diamond?.diamond?.certificate?.width ? `${parseFloat(diamond.diamond.certificate.width).toFixed(2)}mm` : "N/A"}
            </div>

            {/* Horizontal Property (e.g., Table %) */}
            <div className="prop hor absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">
              {diamond?.diamond?.certificate?.table ? `${parseFloat(diamond.diamond.certificate.table).toFixed(1)}%` : "N/A"}
            </div>

            {/* Vertical Property (e.g., Depth %) */}
            <div className="prop ver absolute bg-white md:bg-customGray-50 text-center text-base leading-[70%]">
              {diamond?.diamond?.certificate?.depthPercentage ? `${parseFloat(diamond.diamond.certificate.depthPercentage).toFixed(1)}%` : "N/A"}
            </div>
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
        <div className='customer-product-zoom-img relative overflow-hidden flex justify-center items-center flex-col text-center h-full'>
          <CertificateImage
            lab={diamond?.diamond?.certificate.lab === "IGI" ? true : false}
            className="DiamondCertificate__Image w-full aspect-square fadeIn object-cover max-w-[8rem]"
          />
          <p className="text-[#937D67] mt-4 text-2xl leading-tight uppercase font-bold">{diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</p>
          <ViewCertificate diamond={diamond} className="cpcst-certificate-text" />
        </div>
      </div>
    </div>
  )
}

export default DiamondDetailsImagesInfo