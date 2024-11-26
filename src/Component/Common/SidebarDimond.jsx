import { Drawer } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { addProduct } from '../../store/slices/productSlice';
import { useDispatch } from 'react-redux';

const ProductDetailsDrawer = ({ open, toggleDrawer }) => {
  const { productData } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handleRemoveRingClick = (product) => {
    // 1. Dispatch the action to remove the product from Redux
    dispatch(addProduct(product));

    // 2. Remove the product from localStorage
    const savedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    const updatedProducts = savedProducts.filter(item => item.id !== product.id); // Filter out the product by ID
    localStorage.setItem('cartProducts', JSON.stringify(updatedProducts));
    toggleDrawer(false)
  };


  if (!productData) return null;

  // Extract product details
  const variant = productData.variants?.edges[0]?.node;
  const primaryImage = productData.images?.edges[0]?.node;

  return (
    <Drawer open={open} className='side-bar-main-sec' >
      <div id="sidebar" className='side-bar-main h-full w-full max-w-[300px] relative pointer-events-auto flex flex-col bg-white md:shadow-[0px_4px_32px_rgba(0,0,0,0.25)] md:shadow-[rgba(0,0,0,0.25)]' style={{ transform: "translateX(0px) translateZ(0px)" }}>
        <button
          onClick={() => toggleDrawer(false)}
          type="button"
          className="bg-transparent absolute top-1 right-1 z-10 border-none outline-none w-9 h-9 text-black"
        >
          <svg className="block w-full h-full" aria-hidden="true" focusable="false" viewBox="0 0 36 36">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path>
                <path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path>
              </g>
            </svg>
          </svg>
        </button>

        <div className="relative pt-[70%] DiamondImageContainer">
          <img
            className="w-full h-full absolute inset-0 object-contain"
            src={primaryImage?.src || ''}
            alt={primaryImage?.altText || productData.title}
          />
        </div>

        <div className="relative z-10 shadow-[0px_-2px_20px_rgba(0,0,0,0.15)] shadow-[rgba(0,0,0,0.15)] flex flex-col flex-grow overflow-auto hiddenScroll" data-scroll-lock-scrollable="true">
          <div className="px-3 pt-2 pb-3 shrink-0 border-borders border-b">
            <div className="text-1.5xl text-black leading-tight">{productData.title}</div>
            <div className="mt-1 leading-tight flex items-center gap-1.5 flex-wrap">
              <div className="text-lg leading-tight text-customGray-500">
                {variant?.price?.amount} {variant?.price?.currencyCode}
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto hiddenScroll px-3 pt-3 pb-21" data-scroll-lock-scrollable="true">
            <div className="p-2 bg-customGray-50 rounded-2xl grid grid-cols-2 gap-2">
              {/* Know your stone header */}
              <div className="flex items-center gap-2 col-span-2">
                <div className="w-8 h-8 rounded-full bg-white shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5" focusable="false">
                    <svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.01367 4.89352L4.89544 1H13.1046L16.9864 4.89352L8.99616 12L1.01367 4.89352Z" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
                      <path d="M7.2402 7.01938L4.95605 4.9178L6.46358 3.40613" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path>
                      <path d="M8.99658 11.9023L12.5521 4.92818L9.82583 1.01196" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
                    </svg>
                  </svg>
                </div>
                <div className="text-black text-base leading-tight font-medium">Product Details</div>
              </div>

              {/* Product Attributes Grid */}
              <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                <div className="flex items-center w-full gap-1">
                  <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path>
                      <path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path>
                      <path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path>
                      <path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path>
                    </svg>
                  </svg>
                  <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">SKU</div>
                </div>
                <div className="text-black font-bold text-base leading-tight">{variant?.sku || 'N/A'}</div>
              </div>

              {/* Add more attribute tiles as needed, parsing from productData */}

              {/* Vendor */}
              <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                <div className="flex items-center w-full gap-1">
                  <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">Vendor</div>
                </div>
                <div className="text-black font-bold text-base leading-tight">{productData.vendor || 'N/A'}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 flex-wrap p-3 fixed bottom-0 left-0 right-0 z-10 md:flex-col-reverse max-w-[300px]">
            <button
              type="button"
              className="w-12 h-12 md:h-auto md:w-full rounded-full text-base font-semibold leading-tight bg-white text-black md:p-2 text-center flex justify-center items-center border-2 border-black md:px-5 shadow-floating-button md:shadow-none"
              onClick={()=>handleRemoveRingClick({})}
            >
              <svg className="block w-7 h-7 text-black" aria-hidden="true" focusable="false" viewBox="0 0 25 24">
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8.43604" y="6.53" width="8.06" height="11.94" stroke="currentColor"></rect>
                  <rect x="10.4717" y="8.5" width="1" height="8" fill="currentColor"></rect>
                  <rect x="13.4092" y="8.5" width="1" height="8" fill="currentColor"></rect>
                  <rect x="6.9375" y="7.03" width="1" height="11" transform="rotate(-90 6.9375 7.03)" fill="currentColor"></rect>
                  <rect x="9.9375" y="6.03" width="1" height="5" transform="rotate(-90 9.9375 6.03)" fill="currentColor"></rect>
                </svg>
              </svg>
              <span className="hidden md:block">Remove</span>
            </button>
            <a
              className="grow rounded-full text-base font-semibold leading-tight bg-black text-white p-3.5 text-center flex justify-center items-center md:w-full md:px-5 md:font-normal shadow-floating-button md:shadow-none"
              href={`/products/${productData.handle}`}
              aria-hidden="false"
            >
              <div className="hidden md:block">View / Edit</div>
              <div className="md:hidden">More Info</div>
            </a>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ProductDetailsDrawer;