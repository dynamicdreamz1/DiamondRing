import React from 'react'
import { useSelector } from 'react-redux';
import { CertificateImage, ViewCertificate } from "../../Component/Common/ViewCertification"

const CompleteDetailsImagesInfo = () => {

  const { tabs: diamond } = useSelector((state) => state.getTabsProduct);

  return (
    <div className='customer-product-side-img-sec CustomProductGallery__container relative w-full overflow-hidden EnhancedProductGallery md:static lg:rounded-4xl lg:bg-white'>
      <div className='customer-product-side-img-sub lg:rounded-4xl bg-customGray-50 overflow-hidden relative hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr '>
        <div className='customer-product-zoom-img'>
          <img src={diamond?.ring?.images?.edges[0]?.node?.src} alt={diamond?.ring?.handle} width="100%" height={"100%"} />
        </div>

        <div className='customer-product-zoom-img'>
          {diamond.diamond?.diamond?.video ?
            <iframe
              src={diamond.diamond?.diamond?.video}
              width="100%" // Set the width to full
              height="100%" // Set the height to full
              frameBorder="0" // Removes the border
              allow="autoplay; fullscreen" // Allows autoplay and fullscreen
              allowFullScreen
              className="w-full h-full"
              title="Diamond video" // Descriptive title for the iframe
            >
              Your browser does not support iframes.
            </iframe>
            :
            <img src={diamond.diamond?.diamond?.image} alt='Diamondi-image'   className="w-full h-full" />
          }
        </div>
        <div className='customer-product-zoom-img relative overflow-hidden flex justify-center items-center flex-col text-center h-full'>
          <CertificateImage
            lab={diamond?.diamond?.diamond?.certificate.lab === "IGI" ? true : false}
            className="DiamondCertificate__Image w-full aspect-square fadeIn object-cover max-w-[8rem]"
          />
          <p className="text-[#937D67] mt-4 text-2xl leading-tight uppercase font-bold">{diamond?.diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</p>
          <ViewCertificate diamond={diamond?.diamond} className="cpcst-certificate-text" />
        </div>
        <div className='customer-product-zoom-img'>
          <img src={diamond?.ring?.images?.edges[1]?.node?.src} alt={diamond?.ring?.handle} width="100%" height={"100%"} />
        </div>

      </div>
    </div>
  )
}

export default CompleteDetailsImagesInfo