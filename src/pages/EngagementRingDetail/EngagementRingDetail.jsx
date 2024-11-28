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
import GetInTouch from '../../Component/Common/GetInTouch';
import OurWork from '../../Component/Common/OurWork';




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
      <GetInTouch />
      <OurWork />
      <EngagementRingDetailSlider />
      <NewsletterFooter />
    </div>
  )
}

export default EngagementRingDetail