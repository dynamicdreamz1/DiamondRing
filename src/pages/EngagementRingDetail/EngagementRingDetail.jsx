import React, { useEffect, useState } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
// import ringImg from '../../public/lexie-side-img1.webp'
import "../EngagementRing/ringStyle.css";
import "./productRingStyle.css";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from '../../store/actions/singleProductAction';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import EngagementRingDetailSlider from './EngagementRingDetailSlider';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import EngagementRingDetailData from './EngagementRingDetailData';




const EngagementRingDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams(); // Get product ID from the URL
  
  useEffect(() => {
    if (productId) {
      // Reconstruct the full GraphQL ID
      const graphQLId = `gid://shopify/Product/${productId}`;
      console.log('productId');
      dispatch(fetchSingleProducts(graphQLId));
    }
  }, [dispatch, productId]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>
      <TabComponent />
      <EngagementRingDetailData />

      <section className='get-in-touch-sec product-common-sec flex items-center'>
        <div className='container mx-auto px-4'>
          <div className='product-common-text py-8 px-5'>
            <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6 text-black'>Get In Touch</h3>
            <p className='cfpb-fib-text'>We are here to help you find the one for you. Set a personal appointment with our experts.</p>
            <a href="#" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
              Book Now
              <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
            </a>
          </div>
        </div>
      </section>

      <section className='our-work-sec product-common-sec flex items-center mt-3'>
        <div className='container mx-auto px-4'>
          <div className='product-common-text py-8 px-5'>
            <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6'>OUR WORK</h3>
            <p className='cfpb-fib-text'>We want your jewelry to be flawless and perfect in every detail. That’s why we take the time to hand-craft it individually.</p>
            <a href="#" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
              Read More
              <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
            </a>
          </div>
        </div>
      </section>

      <EngagementRingDetailSlider />
      <NewsletterFooter />
    </div>
  )
}

export default EngagementRingDetail