import React from 'react'
import "./CompleteProductStyle.css";
import TabComponent from '../../Component/Common/TabComponent';
import GetInTouch from '../../Component/Common/GetInTouch';
import OurWork from '../../Component/Common/OurWork';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import { useSelector } from 'react-redux';
import CompleteDetailsQuality from './CompleteDetailsQuality';
import CompleteDetailsData from './CompleteDetailsData';

const CompleteProduct = () => {
  const { tabs } = useSelector((state) => state.getTabsProduct);

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
            <h2 class="text-base font-semibold leading-tight mb-2 md:text-4xl md:mb-0">In The Box</h2>
            <p className='text-base leading-tight'>Inside you will find the diamond certificate, appraisal, and the ring box.</p>
          </div>
          <div className='InTheBox__content mt-2 md:mt-8'>
            <div className='in-the-box-left-img'>
              <div className='InTheBox__block relative'>
                <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1178499/build/_assets/in-the-box-1-RZBQU2VJ.png" alt="" />
              </div>
              <div className='InTheBox__block relative'>
                <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1178499/build/_assets/in-the-box-2-344RVWWW.png" alt="" />
              </div>
              <div className='InTheBox__block relative'>
                <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1178499/build/_assets/in-the-box-3-OTCBUBMF.png" alt="" />
              </div>
            </div>
            <div className='in-the-box-right-img'>
              <div className='InTheBox__block relative'>
                <img src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1178499/build/_assets/in-the-box-4-KOBOPSIL.png" alt="" />
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