import React, { useEffect, useCallback, useRef } from "react";
import "./ringStyle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/ringActions";
import TabComponent from "../../Component/Common/TabComponent";
import RingStyleFilter from "./RingStyleFilter";
import ProductCard from "./ProductCard";
import SelectFilter from "./SelectFilter";
import { metalOptions, ringStyles, shapeOptions } from "../../Utility/Constant";
import { resetFilters, setFilter } from "../../store/slices/ringsFilterSlice";
import NewsletterFooter from "../../Component/Common/Footer/NewsletterFooter";
import Loading from "../../Component/Common/Loading";
import LoadMoreButton from "../../Component/Common/LoadMoreButton";
import HeaderContain from "../../Component/Common/HeaderContain";
import debounce from 'lodash/debounce';

const RingSelector = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.productFilter);
  const { products, loading, pageInfo } = useSelector((state) => state.products);
  const isInitialMount = useRef(true);

  const getInitialFilters = () => {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      return JSON.parse(savedFilters);
    }
    return {
      selectedMetal: '',
      selectShape: '',
      price: '',
      ringType: '',
      activeFilter: ''
    };
  };

  const debouncedFetchProducts = useCallback(
    debounce((filters) => {
      dispatch(fetchProducts(filters));
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    if (isInitialMount.current) {
      // On initial mount, load from localStorage
      const initialFilters = getInitialFilters();
      
      if (Object.keys(initialFilters).some(key => initialFilters[key])) {
        Object.keys(initialFilters).forEach((key) => {
          if (initialFilters[key]) {
            dispatch(setFilter({ key, value: initialFilters[key] }));
          }
        });
      } else {
        // If no saved filters, fetch initial products
        dispatch(fetchProducts({}));
      }
      
      isInitialMount.current = false;
    } else {
      // On filter updates
      if (filters && Object.keys(filters).length > 0) {
        const { page, ...filtersToSave } = filters;
        
        localStorage.setItem('filters', JSON.stringify(filtersToSave));
        
        debouncedFetchProducts(filters);
      }
    }

    // Cleanup
    return () => {
      debouncedFetchProducts.cancel();
    };
  }, [filters, dispatch, debouncedFetchProducts]);

  const handleLoadMore = useCallback(() => {
    if (pageInfo?.hasNextPage) {
      dispatch(setFilter({ key: 'page', value: pageInfo.endCursor }));
    }
  }, [pageInfo, dispatch]);

  const handleClearFilter = useCallback((type) => {
    dispatch(setFilter({ key: type, value: "" }));
  }, [dispatch]);

  const handleResetFilters = useCallback(() => {
    localStorage.removeItem('filters');
    dispatch(resetFilters());
  }, [dispatch]);

  if (!products?.edges) return null;

  const filteredOptions = metalOptions.filter(option => option.value === filters.selectedMetal)[0];
  const filteredShape = shapeOptions.filter(option => option.value === filters.selectShape)[0];
  const filteredRingType = ringStyles.filter(option => option.name === filters.ringType)[0];

  return (
    <div className="min-h-screen bg-white">
      <TabComponent />
      <div className="container mx-auto px-4">
        <HeaderContain title={"Engagement Rings"} desc={"Discover our collection of made to order engagement rings and customize it to your preference"} />

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
              </div>}

            {(filteredShape?.name || filteredOptions?.value || filteredRingType?.name) ?
              <button onClick={() => handleResetFilters()} className="hidden md:flex py-0 pl-px pr-0.5 border-0 border-b border-customGray-300 bg-transparent text-customGray-300 gap-1.5 items-center text-sm leading-tight ml-1.5">
                <span>Reset All</span>
                <svg className="block w-2.5 h-2.5" viewBox="0 0 14 14">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75736 11.2426C3.67726 12.1625 4.87123 12.7585 6.15934 12.9408C7.44745 13.1231 8.7599 12.8818 9.89892 12.2532C11.0379 11.6247 11.9418 10.6429 12.4743 9.45597C13.0068 8.26901 13.1391 6.94112 12.8513 5.67243C12.5634 4.40373 11.871 3.26296 10.8784 2.42203C9.88581 1.5811 8.64677 1.08556 7.34802 1.0101C6.04927 0.934642 4.76118 1.28335 3.67786 2.00366C2.59454 2.72398 1.77468 3.77689 1.34184 5.00371" stroke="currentColor"></path>
                    <path d="M1 1V5H5" stroke="currentColor"></path>
                  </svg>
                </svg>
              </button> : ("")}
          </div>
        </div>

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
            <Loading />
          }
        </div>

        {pageInfo?.hasNextPage && (
          <LoadMoreButton handleLoadMore={handleLoadMore} loading={loading} />
        )}
      </div>
      <div className="mt-8">
        <NewsletterFooter />
      </div>
    </div>
  );
};

export default RingSelector;