import React, { useEffect, useState } from "react";
import "./ringStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import TabComponent from "../../Component/Common/TabComponent";
import RingStyleFilter from "./RingStyleFilter";
import ProductCard from "./ProductCard";
import SelectFilter from "./SelectFilter";
import { metalOptions, ringStyles, shapeOptions } from "../../Utility/Constant";
import { resetFilters, setFilter } from "../../store/slices/productFilterSlice";

const RingSelector = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.productFilter);
  const { products, loading, pageInfo } = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters]);


  const handleLoadMore = () => {
    if (pageInfo?.hasNextPage) {
      dispatch(setFilter({ key: 'page', value: pageInfo.endCursor })); // Update metal filter
    }
  };

  const handleClearFilter = (type) => {
    dispatch(setFilter({ key: type, value: "" })); // Update shape filter
  }

  const handleResetFilters = () => {
    dispatch(resetFilters()); // Dispatch the reset action
  };

  if (!products?.edges) return null;

  const filteredOptions = metalOptions.filter(option => option.value === filters.selectedMetal)[0];
  const filteredShape = shapeOptions.filter(option => option.value === filters.selectShape)[0];
  const filteredRingType = ringStyles.filter(option => option.name === filters.ringType)[0];

  console.log("filteredRingType",filteredRingType,filteredShape);


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

        <SelectFilter />

        <div className="hidden md:block col-span-2 mb-10">
          <div className="flex gap-2 flex-wrap items-center col-span-2">

          {filteredRingType?.name &&
              <div className="flex bg-customGray-50 ring-1 ring-borders items-center md:gap-0.5 md:py-0.5 md:pl-0.5 md:pr-1 rounded-md text-xs leading-none md:text-sm md:leading-tight text-black">
                <button type="button" className="flex md:gap-0.5 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center overflow-hidden ">
                    {filteredRingType.icon}
                  </div>
                  <span>{filteredRingType?.name}</span>
                </button>
                <button onClick={() => handleClearFilter("ringType")} type="button" className="shrink-0">
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
            }


            {filteredOptions?.value &&
              <div className="flex bg-customGray-50 ring-1 ring-borders items-center md:gap-0.5 md:py-0.5 md:pl-0.5 md:pr-1 rounded-md text-xs leading-none md:text-sm md:leading-tight text-black">
                <button type="button" className="flex md:gap-0.5 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center overflow-hidden select-metal">
                    <p style={{ color: filteredOptions.color, border: `1px solid ${filteredOptions.color}` }} ></p>
                  </div>
                  <span>{filteredOptions.value}</span>
                </button>
                <button onClick={() => handleClearFilter("selectedMetal")} type="button" className="shrink-0">
                  <svg className="shrink-0 w-7 h-7 text-customGray-300" viewBox="0 0 36 36">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path>
                        <path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path>
                      </g>
                    </svg>
                  </svg>
                </button>
              </div>}

            {filteredShape?.name &&
              <div className="flex bg-customGray-50 ring-1 ring-borders items-center md:gap-0.5 md:py-0.5 md:pl-0.5 md:pr-1 rounded-md text-xs leading-none md:text-sm md:leading-tight text-black">
                <button type="button" className="flex md:gap-0.5 items-center">
                  <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 flex items-center justify-center overflow-hidden ">
                    {filteredShape.icon}
                  </div>
                  <span>{filteredShape?.name}</span>
                </button>
                <button onClick={() => handleClearFilter("selectShape")} type="button" className="shrink-0">
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
            }
            {(filteredShape?.name || filteredOptions?.value || filteredRingType?.name) ?
              <button onClick={()=>handleResetFilters()} className="hidden md:flex py-0 pl-px pr-0.5 border-0 border-b border-customGray-300 bg-transparent text-customGray-300 gap-1.5 items-center text-sm leading-tight ml-1.5">
                <span>Reset All</span>
                <svg className="block w-2.5 h-2.5" viewBox="0 0 14 14">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75736 11.2426C3.67726 12.1625 4.87123 12.7585 6.15934 12.9408C7.44745 13.1231 8.7599 12.8818 9.89892 12.2532C11.0379 11.6247 11.9418 10.6429 12.4743 9.45597C13.0068 8.26901 13.1391 6.94112 12.8513 5.67243C12.5634 4.40373 11.871 3.26296 10.8784 2.42203C9.88581 1.5811 8.64677 1.08556 7.34802 1.0101C6.04927 0.934642 4.76118 1.28335 3.67786 2.00366C2.59454 2.72398 1.77468 3.77689 1.34184 5.00371" stroke="currentColor"></path>
                    <path d="M1 1V5H5" stroke="currentColor"></path>
                  </svg>
                </svg>
              </button> : ""}
          </div>
        </div>

        {/* <div className="px-5 pb-3 mt-3 md:hidden">
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
        </div> */}

        {/* Ring Grid */}
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products?.edges?.length > 0 ?
              products?.edges?.map(({ node }) => {
                return (
                  <ProductCard node={node} />
                );
              })
              :
              <p>
                No Data Found Please reset Filter
              </p>
            }
          </div>
          {loading &&
            <div className="ring-loader-main-sec">
              <p>
                <div className="ring-loader">
                  <div className="ring-circel"></div>
                  <div className="diamond">
                    <svg className="w-13.5 h-13.5 md:w-11 md:h-11 block mx-auto" viewBox="0 0 48 48"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0261 21.7217L18.6439 15.8039L18.3498 21.597L18.3468 25.2554L17.0261 21.7217ZM29.3973 26.6255C29.291 26.9279 29.1647 27.2269 29.0218 27.5193C28.4271 28.742 27.6163 29.6391 27.1779 30.0777C27.0582 30.1973 26.9652 30.2837 26.912 30.3303C26.1312 31.0479 25.3071 31.5762 24.4998 31.965C22.6923 32.8322 20.9711 32.9983 19.9976 32.9983C19.0273 32.9983 17.3029 32.8322 15.4987 31.9617C14.6913 31.5762 13.8673 31.0446 13.0864 30.3303C13.0333 30.2804 12.9403 30.1973 12.8207 30.0777C12.3788 29.6358 11.568 28.7387 10.9766 27.5193C10.8336 27.2269 10.7074 26.9279 10.6011 26.6255C10.0463 25.1136 9.88 23.4856 10.0229 21.7777C10.1426 20.4155 10.4615 19.0232 10.9401 17.641C11.485 16.0661 12.2358 14.5011 13.1495 12.9627C14.0832 11.3911 15.1764 9.89258 16.3492 8.52698C17.1168 7.62989 17.9209 6.79254 18.7383 6.03168C19.2832 5.52661 19.765 5.17444 20.0008 5.00165C20.2335 5.17774 20.7186 5.52997 21.2601 6.03168C22.0775 6.79254 22.8817 7.62989 23.6459 8.52698C24.822 9.89258 25.9119 11.3911 26.8688 12.9993C27.7626 14.5011 28.5135 16.0661 29.055 17.641C29.537 19.0232 29.8558 20.4155 29.9789 21.8143C30.1183 23.4856 29.9523 25.1136 29.3973 26.6255ZM26.0094 13.5107C25.6033 12.8282 25.1582 12.163 24.6953 11.5087L23.2429 14.9786L25.2095 21.3947L28.4761 19.1594C28.3682 18.7649 28.2497 18.3687 28.1108 17.9703C27.6085 16.5095 26.902 15.0104 26.0094 13.5107V13.5107ZM24.6035 21.9803L22.5098 15.1454L19.999 12.2821L17.4902 15.1454L15.3965 21.9803L16.9268 26.0468L19.999 27.308L23.0732 26.0468L24.6035 21.9803ZM20.5787 6.76361C20.5063 6.69653 20.4441 6.64819 20.374 6.58673V11.578L22.7188 14.2889L24.1746 10.8108C23.7592 10.2573 23.3408 9.70502 22.8882 9.17956C22.1603 8.32501 21.3844 7.51361 20.5787 6.76361ZM15.8182 10.7929L17.269 14.2599L19.624 11.5724V6.58667C19.5535 6.64868 19.4917 6.69678 19.4181 6.76508C18.6191 7.50873 17.8418 8.32074 17.1091 9.17713C16.6559 9.70478 16.2296 10.2459 15.8182 10.7929H15.8182ZM11.8851 17.968C11.7466 18.3683 11.6284 18.7642 11.521 19.1575L14.7928 21.3962L16.7761 15.0234L15.3005 11.4973C14.8401 12.1472 14.4057 12.8061 14.0093 13.4735C13.1047 14.9965 12.39 16.5087 11.8851 17.968L11.8851 17.968ZM11.5398 26.281C11.6361 26.5544 11.7473 26.8189 11.875 27.0801C11.8857 27.1024 11.8988 27.121 11.9098 27.143L16.1354 26.0717L14.6903 22.2352L11.3243 19.9321C11.1768 20.5912 11.0742 21.2373 11.0192 21.8652C10.8837 23.483 11.0588 24.9701 11.5398 26.281V26.281ZM15.9294 31.0592C15.9927 31.0897 16.0544 31.1128 16.1173 31.1414L19.3419 27.8488L16.6055 26.7256L12.2876 27.8203C12.7065 28.4869 13.1711 29.014 13.5278 29.3706C13.6077 29.4504 13.6739 29.5115 13.7213 29.5552L13.771 29.6013C14.4164 30.1916 15.1459 30.6851 15.9294 31.0592ZM19.9976 31.9984C20.6406 31.9984 21.8071 31.9114 23.1294 31.446L19.999 28.2494L16.8691 31.4446C18.1896 31.9114 19.3547 31.9983 19.9976 31.9983L19.9976 31.9984ZM27.7108 27.8199L23.3945 26.7256L20.6563 27.8489L23.8821 31.1439C23.9441 31.1158 24.0049 31.0933 24.0671 31.0633C24.8604 30.6814 25.5902 30.1869 26.2352 29.594C26.297 29.5395 26.3728 29.4685 26.4707 29.3706C26.8267 29.0146 27.291 28.4876 27.7108 27.8199V27.8199ZM28.9823 21.8974C28.9258 21.2559 28.8218 20.5995 28.6728 19.9339L25.3097 22.2352L23.8646 26.0717L28.0889 27.1426C28.0995 27.1213 28.112 27.1035 28.1225 27.0819C28.2513 26.8182 28.3625 26.5536 28.454 26.2938C28.9394 24.9708 29.1157 23.496 28.9823 21.8974H28.9823Z" fill="black"></path></svg></svg>
                  </div>
                </div>
              </p>
            </div>}
        </div>

        {pageInfo?.hasNextPage && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="bg-white text-black leading-tight ring-1 ring-black md:ring-2 overflow-hidden whitespace-nowrap relative transition-all duration-300 text-center rounded-full min-h-[3rem] tangiblee-load-more py-3.5 px-8"
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
