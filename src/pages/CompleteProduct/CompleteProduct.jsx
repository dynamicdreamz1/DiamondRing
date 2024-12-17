import React from 'react'
import "./CompleteProductStyle.css";
import TabComponent from '../../Component/Common/TabComponent';
import GetInTouch from '../../Component/Common/GetInTouch';
import OurWork from '../../Component/Common/OurWork';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import CompleteDetailsData from './CompleteDetailsData';
import completeproductleftimg1 from '../../assets/Images/complete-product-left-img1.webp';
import completeproductleftimg2 from '../../assets/Images/complete-product-left-img2.webp';
import completeproductleftimg3 from '../../assets/Images/complete-product-left-img3.webp';
import completeproductleftimg4 from '../../assets/Images/complete-product-left-img4.webp';

const CompleteProduct = () => {
  return (
    <>
      <TabComponent />

      <section className='customer-product-sec md:pt-8'>
        <div className='container mx-auto px-4'>
          <CompleteDetailsData />
        </div>
      </section>

      <section className='complete-product-ib-box-sec'>
        <div className='container mx-auto px-4'>
          <div className='in-the-box-des'>
            <h2 className="text-base font-semibold leading-tight mb-2 md:text-4xl md:mb-0">In The Box</h2>
            <p className='text-base leading-tight'>Inside you will find the diamond certificate, appraisal, and the ring box.</p>
          </div>
          <div className='InTheBox__content mt-2 md:mt-8'>
            <div className='in-the-box-left-img'>
              <div className='InTheBox__block relative'>
                <img src={completeproductleftimg1} alt="completeproductleftimg" />
              </div>
              <div className='InTheBox__block relative'>
                <img src={completeproductleftimg2} alt="completeproductleftimg" />
              </div>
              <div className='InTheBox__block relative'>
                <img src={completeproductleftimg3} alt="completeproductleftimg" />
              </div>
            </div>
            <div className='in-the-box-right-img'>
              <div className='InTheBox__block relative'>
                <img src={completeproductleftimg4} alt="completeproductleftimg" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <GetInTouch />
      <OurWork />
      <NewsletterFooter />

    </>
  )
}

export default CompleteProduct