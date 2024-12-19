import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiamondList } from '../../store/actions/diamondFilterAction';
import DiamondProductListCard from './DiamondProductListCard';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import DiamondFilter from './Filter/DiamondFilter';
import { updateFilter } from '../../store/slices/diamondFilterSlice';
import Loading from '../../Component/Common/Loading';
import LoadMoreButton from '../../Component/Common/LoadMoreButton';
import HeaderContain from '../../Component/Common/HeaderContain';



const DiamondList = () => {
  const filters = useSelector((state) => state.diamondFilter);
  const { loading } = useSelector((state) => state.diamond);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await dispatch(fetchDiamondList(filters, filters.page));
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [dispatch, filters]);


  const handleLoadMore = () => {
    dispatch(updateFilter({ page: filters.page + 1 }));
  };

  return (
    <div className="min-h-screen bg-white">
      <TabComponent />

      <div className="container mx-auto px-4">
        <HeaderContain title={"Select your Stone Shape and Quality"} desc={"Use the filters below to design your perfect engagement ring"} />
        <DiamondFilter />
        <DiamondProductListCard />

        <div className="">
          {loading &&
            <Loading />
          }
        </div>
        <LoadMoreButton handleLoadMore={handleLoadMore} loading={loading} />
      </div>
      <div className="mt-8">
        <NewsletterFooter />
      </div>
    </div>
  )
}

export default DiamondList