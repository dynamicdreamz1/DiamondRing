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

  console.log("products", products);


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

        sasa

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
