import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import "../EngagementRing/ringStyle.css";
import "./productRingStyle.css";
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from '../../store/actions/singleRingAction';
import EngagementRingDetailSlider from './EngagementRingDetailSlider';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import EngagementRingDetailData from './EngagementRingDetailData';
import GetInTouch from '../../Component/Common/GetInTouch';
import OurWork from '../../Component/Common/OurWork';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ReviewSlider from '../../Component/Common/ReviewSlider';

const EngagementRingDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams(); // Get product ID from the URL

  useEffect(() => {
    if (productId) {
      // Reconstruct the full GraphQL ID
      const graphQLId = `gid://shopify/Product/${productId}`;
      dispatch(fetchSingleProducts(graphQLId));
    }
  }, [dispatch, productId]);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>
      <TabComponent />
      <EngagementRingDetailData />
      <ReviewSlider />
      <GetInTouch />
      <OurWork />
      <EngagementRingDetailSlider />
      <NewsletterFooter />
    </div>
  )
}

export default EngagementRingDetail