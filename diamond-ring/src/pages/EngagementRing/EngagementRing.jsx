import React, { useEffect, useState } from "react";
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import "./ringStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import TabComponent from "../../Component/Common/TabComponent";
import RingStyleFilter from "./RingStyleFilter";
import ProductCard from "./ProductCard";
import SelectFilter from "./SelectFilter";

const RingSelector = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState(null);

  const dispatch = useDispatch();
  const { products, loading, error, pageInfo } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handleLoadMore = () => {
    if (pageInfo?.hasNextPage) {
      dispatch(fetchProducts(pageInfo.endCursor));
    }
  };

  if (!products?.edges) return null;

  return (
    <div className="min-h-screen bg-white">
      <TabComponent />
      <div className="container mx-auto px-4">
        <div class="px-5 pb-6">
          <header class="max-w-7xl mx-auto text-center">
            <h1
              class="text-black font-semibold text-1.5lg leading-none mb-1.5 md:text-3xl md:mb-2.5"
              tabindex="-1"
            >
              Engagement Rings
            </h1>
            <p
              class="leading-tighter text-black/50 text-1.5sm md:text-xl"
              tabindex="-1"
            >
              Discover our collection of made to order engagement rings and
              customize it to your preference
            </p>
          </header>
        </div>

        <RingStyleFilter />

        <SelectFilter showFilter={showFilter} setShowFilter={setShowFilter} showPriceFilter={showPriceFilter} setShowPriceFilter={setShowPriceFilter} />

        <div className="hidden md:block col-span-2 mb-10">
              <div className="flex gap-2 flex-wrap items-center col-span-2">
                  <div className="flex bg-customGray-50 ring-1 ring-borders items-center md:gap-0.5 md:py-0.5 md:pl-0.5 md:pr-1 rounded-md text-xs leading-none md:text-sm md:leading-tight text-black">
                    <button type="button" className="flex md:gap-0.5 items-center">
                        <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center overflow-hidden">
                          <svg className="w-5.5 h-5.5 md:w-7 md:h-7" viewBox="0 0 48 48">
                              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6106 16.6207L24.9478 19.8792L22.9533 17.3525L20.1205 15.1672L23.6106 16.6207ZM15.08 19.2144L16.434 23.5455L20.447 25.1138L17.2612 22.3985L15.08 19.2144V19.2144ZM31.458 19.9999C31.458 26.3182 26.3184 31.4584 20 31.4584C13.6816 31.4584 8.54199 26.3182 8.54199 19.9999C8.54199 13.6815 13.6816 8.54138 20 8.54138C26.3184 8.54138 31.458 13.6815 31.458 19.9999ZM26.8402 22.4269L29.8658 23.6801C30.2957 22.5323 30.542 21.2958 30.542 19.9999C30.542 18.704 30.2957 17.4674 29.8658 16.3196L26.8444 17.5711L26.8402 22.4269V22.4269ZM24.3744 10.4208L23.1221 13.4433L26.5526 16.8796L29.5796 15.6259C28.5256 13.3275 26.6729 11.4747 24.3744 10.4208ZM26.0898 22.5292L26.0947 17.4818L22.5293 13.9105L17.4824 13.9052L13.9101 17.4711L13.9053 22.518L17.4707 26.0897L22.5176 26.0946L26.0898 22.5292V22.5292ZM20 9.45838C18.704 9.45838 17.4673 9.70478 16.3193 10.1346L17.5711 13.1555L22.4271 13.1602L23.6807 10.1345C22.5327 9.70473 21.296 9.45839 20 9.45839L20 9.45838ZM10.4204 15.6259L13.4426 16.8777L16.8794 13.447L15.6256 10.4208C13.3272 11.4747 11.4744 13.3276 10.4204 15.6259H10.4204ZM9.45801 19.9999C9.45801 21.2958 9.70435 22.5324 10.1342 23.6801L13.1556 22.4287L13.1598 17.5728L10.1342 16.3197C9.70435 17.4674 9.45801 18.704 9.45801 19.9999V19.9999ZM15.6257 29.579L16.8779 26.5569L13.4473 23.1201L10.4204 24.3738C11.4744 26.6722 13.3272 28.525 15.6257 29.579ZM20 30.5414C21.2959 30.5414 22.5327 30.295 23.6807 29.8652L22.4288 26.8442L17.5729 26.8401L16.3193 29.8652C17.4673 30.295 18.704 30.5414 20 30.5414H20ZM29.5796 24.3738L26.5577 23.1223L23.1204 26.5529L24.3743 29.579C26.6729 28.525 28.5256 26.6722 29.5796 24.3738V24.3738Z" fill="black"></path>
                              </svg>
                          </svg>
                        </div>
                        <span>Round</span>
                    </button>
                    <button type="button" className="shrink-0">
                        <svg className="shrink-0 w-7 h-7 text-customGray-300" viewBox="0 0 36 36">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path>
                                <path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path>
                              </g>
                          </svg>
                        </svg>
                    </button>
                  </div>
                  <div className="flex bg-customGray-50 ring-1 ring-borders items-center md:gap-0.5 md:py-0.5 md:pl-0.5 md:pr-1 rounded-md text-xs leading-none md:text-sm md:leading-tight text-black">
                    <button type="button" className="flex md:gap-0.5 items-center">
                        <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center overflow-hidden">
                          <svg className="w-5.5 h-5.5 md:w-7 md:h-7" viewBox="0 0 48 48">
                              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6106 16.6207L24.9478 19.8792L22.9533 17.3525L20.1205 15.1672L23.6106 16.6207ZM15.08 19.2144L16.434 23.5455L20.447 25.1138L17.2612 22.3985L15.08 19.2144V19.2144ZM31.458 19.9999C31.458 26.3182 26.3184 31.4584 20 31.4584C13.6816 31.4584 8.54199 26.3182 8.54199 19.9999C8.54199 13.6815 13.6816 8.54138 20 8.54138C26.3184 8.54138 31.458 13.6815 31.458 19.9999ZM26.8402 22.4269L29.8658 23.6801C30.2957 22.5323 30.542 21.2958 30.542 19.9999C30.542 18.704 30.2957 17.4674 29.8658 16.3196L26.8444 17.5711L26.8402 22.4269V22.4269ZM24.3744 10.4208L23.1221 13.4433L26.5526 16.8796L29.5796 15.6259C28.5256 13.3275 26.6729 11.4747 24.3744 10.4208ZM26.0898 22.5292L26.0947 17.4818L22.5293 13.9105L17.4824 13.9052L13.9101 17.4711L13.9053 22.518L17.4707 26.0897L22.5176 26.0946L26.0898 22.5292V22.5292ZM20 9.45838C18.704 9.45838 17.4673 9.70478 16.3193 10.1346L17.5711 13.1555L22.4271 13.1602L23.6807 10.1345C22.5327 9.70473 21.296 9.45839 20 9.45839L20 9.45838ZM10.4204 15.6259L13.4426 16.8777L16.8794 13.447L15.6256 10.4208C13.3272 11.4747 11.4744 13.3276 10.4204 15.6259H10.4204ZM9.45801 19.9999C9.45801 21.2958 9.70435 22.5324 10.1342 23.6801L13.1556 22.4287L13.1598 17.5728L10.1342 16.3197C9.70435 17.4674 9.45801 18.704 9.45801 19.9999V19.9999ZM15.6257 29.579L16.8779 26.5569L13.4473 23.1201L10.4204 24.3738C11.4744 26.6722 13.3272 28.525 15.6257 29.579ZM20 30.5414C21.2959 30.5414 22.5327 30.295 23.6807 29.8652L22.4288 26.8442L17.5729 26.8401L16.3193 29.8652C17.4673 30.295 18.704 30.5414 20 30.5414H20ZM29.5796 24.3738L26.5577 23.1223L23.1204 26.5529L24.3743 29.579C26.6729 28.525 28.5256 26.6722 29.5796 24.3738V24.3738Z" fill="black"></path>
                              </svg>
                          </svg>
                        </div>
                        <span>Round</span>
                    </button>
                    <button type="button" className="shrink-0">
                        <svg className="shrink-0 w-7 h-7 text-customGray-300" viewBox="0 0 36 36">
                          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path>
                                <path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path>
                              </g>
                          </svg>
                        </svg>
                    </button>
                  </div>
                  <button className="hidden md:flex py-0 pl-px pr-0.5 border-0 border-b border-customGray-300 bg-transparent text-customGray-300 gap-1.5 items-center text-sm leading-tight ml-1.5">
                    <span>Reset All</span>
                    <svg className="block w-2.5 h-2.5" viewBox="0 0 14 14">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.75736 11.2426C3.67726 12.1625 4.87123 12.7585 6.15934 12.9408C7.44745 13.1231 8.7599 12.8818 9.89892 12.2532C11.0379 11.6247 11.9418 10.6429 12.4743 9.45597C13.0068 8.26901 13.1391 6.94112 12.8513 5.67243C12.5634 4.40373 11.871 3.26296 10.8784 2.42203C9.88581 1.5811 8.64677 1.08556 7.34802 1.0101C6.04927 0.934642 4.76118 1.28335 3.67786 2.00366C2.59454 2.72398 1.77468 3.77689 1.34184 5.00371" stroke="currentColor"></path>
                          <path d="M1 1V5H5" stroke="currentColor"></path>
                        </svg>
                    </svg>
                  </button>
              </div>
            </div>

        <div className="px-5 pb-3 mt-3 md:hidden">
          <div className="flex justify-start items-center flex-wrap gap-2 relative">
            <button className="flex items-center justify-center gap-1.5 bg-white text-black text-xs leading-[0.875rem] py-1.25 px-2.5 rounded-md border border-borders">
              <svg className="block w-2.5 h-2.5">
                <svg
                  viewBox="0 0 16 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 9C5 8.58579 5.33579 8.25 5.75 8.25H10.25C10.6642 8.25 11 8.58579 11 9C11 9.41421 10.6642 9.75 10.25 9.75H5.75C5.33579 9.75 5 9.41421 5 9Z"></path>
                  <path d="M2 5C2 4.58579 2.33579 4.25 2.75 4.25H13.25C13.6642 4.25 14 4.58579 14 5C14 5.41421 13.6642 5.75 13.25 5.75H2.75C2.33579 5.75 2 5.41421 2 5Z"></path>
                  <path d="M0 1C0 0.585786 0.335786 0.25 0.75 0.25H15.25C15.6642 0.25 16 0.585786 16 1C16 1.41421 15.6642 1.75 15.25 1.75H0.75C0.335786 1.75 0 1.41421 0 1Z"></path>
                </svg>
              </svg>
              <span>Filters</span>
            </button>
            <div className="FilterRelativeContainer relative shrink-0 min-w-[8.75rem]">
              <button className="flex items-center w-full gap-2 text-left py-px pr-0.5 pl-2 bg-white rounded-md transition-all duration-300 border border-borders">
                <div className="flex-1">
                  <div className="text-black text-xs leading-none">
                    Price (low-to-high)
                  </div>
                </div>
                <div className="relative w-6 h-6 text-black transition-transform duration-300 ">
                  <svg className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>
                </div>
              </button>
            </div>
            <div className="ml-auto flex bg-white rounded-md border-borders border overflow-hidden relative md:hidden">
              <button
                type="button"
                className="p-2 grid grid-cols-2 gap-0.5 w-6.5 h-6.5"
              >
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
              </button>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3.5 bg-[#D1D1D1]"></div>
              <button
                type="button"
                className="p-2 grid grid-cols-1 gap-0.5 w-6.5 h-6.5"
              >
                <div className="border border-black transition-colors duration-300 h-full bg-transparent"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-transparent"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Ring Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.edges?.length > 0 && products?.edges?.map(({ node }) => {
              return (
                <ProductCard node={node} />
              );
            })}
          </div>
        </div>
        {pageInfo?.hasNextPage && (
        <div className="mt-8 text-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}    
        </div>
    </div>
  );
};

export default RingSelector;
