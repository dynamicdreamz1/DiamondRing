import React from 'react'
import TabComponent from '../../Component/Common/TabComponent'
// import ringImg from '../../public/lexie-side-img1.webp'

const EngagementRingDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>

      {/* Navigation */}

      {/* <section className='grid grid-cols-1 gap-0 custom-product-container mx-auto md:pt-8 md:pb-12 md:px-5'>
        <div className='CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8'>
          <div className='cpts-desktop-content hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr'>
            <div className='CustomProductGallery__image--block min-w-full bg-customGray-50 overflow-hidden relative'>
              <div className='custom-zoom-wrapper-scale pointer-events-none mix-blend-multiply transition-transform duration-300 ease-in-out'>
                <img src="/lexie-side-img1.webp" />
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <TabComponent />


      <section className='customer-product-sec md:pt-8'>
          <div className='container mx-auto px-4'>
            <div className='customer-product-side-img-text'>
                <div className='customer-product-side-img-sec'>
                  <div className='customer-product-side-img-sub'>
                      <div className='customer-product-zoom-img'>
                        <img src="/lexie-side-img1.webp" />
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </section>


    </div>
  )
}

export default EngagementRingDetail