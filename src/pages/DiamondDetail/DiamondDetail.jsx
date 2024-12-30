import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import GetInTouch from '../../Component/Common/GetInTouch'
import OurWork from '../../Component/Common/OurWork'
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter'
import DiamondDetailData from './DiamondDetailData'
import { fetchSingleDiamondList } from '../../store/actions/singleDiamondAction'
import DiamondQualities from './DiamondQualities'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ReviewSlider from '../../Component/Common/ReviewSlider'

const DiamondDetail = () => {
  const dispatch = useDispatch();
  const { diamondId } = useParams(); // Get product ID from the URL

  useEffect(() => {
    if (diamondId) {
      dispatch(fetchSingleDiamondList({ certificate_numbers: diamondId }));
    }
  }, [dispatch, diamondId]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>
      <TabComponent />
      <section className='customer-product-sec md:pt-8'>
        <div className='container mx-auto px-4'>
          <DiamondDetailData />
          <DiamondQualities />
        </div>
      </section>
      <ReviewSlider />
      <GetInTouch />
      <OurWork />
      <NewsletterFooter />
    </div>
  )
}

export default DiamondDetail