import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiamondList } from '../../store/actions/diamondFilterAction';
import DiamondProductListCard from './DiamondProductListCard';
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter';
import DiamondFilter from './Filter/DiamondFilter';
import { updateFilter } from '../../store/slices/diamondFilterSlice';



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
        <div className="">
          {loading &&
            <div className="ring-loader-main-sec">
              <p>
                <div className="ring-loader">
                  <div className="ring-circel"></div>
                  <div className="diamond">
                    <svg className="w-13.5 h-13.5 md:w-11 md:h-11 block mx-auto" viewBox="0 0 48 48">
                      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0261 21.7217L18.6439 15.8039L18.3498 21.597L18.3468 25.2554L17.0261 21.7217ZM29.3973 26.6255C29.291 26.9279 29.1647 27.2269 29.0218 27.5193C28.4271 28.742 27.6163 29.6391 27.1779 30.0777C27.0582 30.1973 26.9652 30.2837 26.912 30.3303C26.1312 31.0479 25.3071 31.5762 24.4998 31.965C22.6923 32.8322 20.9711 32.9983 19.9976 32.9983C19.0273 32.9983 17.3029 32.8322 15.4987 31.9617C14.6913 31.5762 13.8673 31.0446 13.0864 30.3303C13.0333 30.2804 12.9403 30.1973 12.8207 30.0777C12.3788 29.6358 11.568 28.7387 10.9766 27.5193C10.8336 27.2269 10.7074 26.9279 10.6011 26.6255C10.0463 25.1136 9.88 23.4856 10.0229 21.7777C10.1426 20.4155 10.4615 19.0232 10.9401 17.641C11.485 16.0661 12.2358 14.5011 13.1495 12.9627C14.0832 11.3911 15.1764 9.89258 16.3492 8.52698C17.1168 7.62989 17.9209 6.79254 18.7383 6.03168C19.2832 5.52661 19.765 5.17444 20.0008 5.00165C20.2335 5.17774 20.7186 5.52997 21.2601 6.03168C22.0775 6.79254 22.8817 7.62989 23.6459 8.52698C24.822 9.89258 25.9119 11.3911 26.8688 12.9993C27.7626 14.5011 28.5135 16.0661 29.055 17.641C29.537 19.0232 29.8558 20.4155 29.9789 21.8143C30.1183 23.4856 29.9523 25.1136 29.3973 26.6255ZM26.0094 13.5107C25.6033 12.8282 25.1582 12.163 24.6953 11.5087L23.2429 14.9786L25.2095 21.3947L28.4761 19.1594C28.3682 18.7649 28.2497 18.3687 28.1108 17.9703C27.6085 16.5095 26.902 15.0104 26.0094 13.5107V13.5107ZM24.6035 21.9803L22.5098 15.1454L19.999 12.2821L17.4902 15.1454L15.3965 21.9803L16.9268 26.0468L19.999 27.308L23.0732 26.0468L24.6035 21.9803ZM20.5787 6.76361C20.5063 6.69653 20.4441 6.64819 20.374 6.58673V11.578L22.7188 14.2889L24.1746 10.8108C23.7592 10.2573 23.3408 9.70502 22.8882 9.17956C22.1603 8.32501 21.3844 7.51361 20.5787 6.76361ZM15.8182 10.7929L17.269 14.2599L19.624 11.5724V6.58667C19.5535 6.64868 19.4917 6.69678 19.4181 6.76508C18.6191 7.50873 17.8418 8.32074 17.1091 9.17713C16.6559 9.70478 16.2296 10.2459 15.8182 10.7929H15.8182ZM11.8851 17.968C11.7466 18.3683 11.6284 18.7642 11.521 19.1575L14.7928 21.3962L16.7761 15.0234L15.3005 11.4973C14.8401 12.1472 14.4057 12.8061 14.0093 13.4735C13.1047 14.9965 12.39 16.5087 11.8851 17.968L11.8851 17.968ZM11.5398 26.281C11.6361 26.5544 11.7473 26.8189 11.875 27.0801C11.8857 27.1024 11.8988 27.121 11.9098 27.143L16.1354 26.0717L14.6903 22.2352L11.3243 19.9321C11.1768 20.5912 11.0742 21.2373 11.0192 21.8652C10.8837 23.483 11.0588 24.9701 11.5398 26.281V26.281ZM15.9294 31.0592C15.9927 31.0897 16.0544 31.1128 16.1173 31.1414L19.3419 27.8488L16.6055 26.7256L12.2876 27.8203C12.7065 28.4869 13.1711 29.014 13.5278 29.3706C13.6077 29.4504 13.6739 29.5115 13.7213 29.5552L13.771 29.6013C14.4164 30.1916 15.1459 30.6851 15.9294 31.0592ZM19.9976 31.9984C20.6406 31.9984 21.8071 31.9114 23.1294 31.446L19.999 28.2494L16.8691 31.4446C18.1896 31.9114 19.3547 31.9983 19.9976 31.9983L19.9976 31.9984ZM27.7108 27.8199L23.3945 26.7256L20.6563 27.8489L23.8821 31.1439C23.9441 31.1158 24.0049 31.0933 24.0671 31.0633C24.8604 30.6814 25.5902 30.1869 26.2352 29.594C26.297 29.5395 26.3728 29.4685 26.4707 29.3706C26.8267 29.0146 27.291 28.4876 27.7108 27.8199V27.8199ZM28.9823 21.8974C28.9258 21.2559 28.8218 20.5995 28.6728 19.9339L25.3097 22.2352L23.8646 26.0717L28.0889 27.1426C28.0995 27.1213 28.112 27.1035 28.1225 27.0819C28.2513 26.8182 28.3625 26.5536 28.454 26.2938C28.9394 24.9708 29.1157 23.496 28.9823 21.8974H28.9823Z" fill="black">
                        </path>
                      </svg>
                    </svg>
                  </div>
                </div>
              </p>
            </div>}
        </div>
        <div className="load-more-btn-sec text-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="bg-white text-black leading-tight ring-1 ring-black md:ring-2 overflow-hidden whitespace-nowrap relative transition-all duration-300 text-center rounded-full min-h-[3rem] tangiblee-load-more py-3.5 px-8"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      </div>
      <div className="mt-8">
        <NewsletterFooter />
      </div>
    </div>
  )
}

export default DiamondList