import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiamondList } from '../../store/actions/diamondFilterAction';
import DiamondProductListCard from './DiamondProductListCard';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import DiamondFilter from './Filter/DiamondFilter';



const DiamondList = () => {
  const filters = useSelector((state) => state.diamondFilter);
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await dispatch(fetchDiamondList(filters));
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [dispatch, filters]);
  

  return (
    <div className="min-h-screen bg-white">
      <TabComponent />

      <div className="container mx-auto px-4">
        <div className="px-5 pb-6">
          <header className="max-w-7xl mx-auto text-center">
            <h1
              className="text-black font-semibold text-1.5lg leading-none mb-1.5 md:text-3xl md:mb-2.5"
              tabIndex="-1"
            >
              Select your Stone Shape and Quality
            </h1>
            <p
              className="leading-tighter text-black/50 text-1.5sm md:text-xl"
              tabIndex="-1"
            >
              Use the filters below to design your perfect engagement ring
            </p>
          </header>
        </div>
        <DiamondFilter />
        <DiamondProductListCard />
      </div>
      <div className="mt-8">
        <NewsletterFooter />
      </div>
    </div>
  )
}

export default DiamondList