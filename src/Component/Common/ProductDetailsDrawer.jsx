import { Drawer } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { addProduct } from '../../store/slices/ringsSlice';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


const ProductDetailsDrawer = ({ open, toggleDrawer, productData }) => {
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

        {productData.type === 'ring' ?
          <>
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
                  onClick={() => handleRemoveRingClick({})}
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
                <Link
                  className="grow rounded-full text-base font-semibold leading-tight bg-black text-white p-3.5 text-center flex justify-center items-center md:w-full md:px-5 md:font-normal shadow-floating-button md:shadow-none"
                  to={`/ring-select/${productData?.id?.split("/").pop()}`}
                  aria-hidden="false"
                >
                  <div className="hidden md:block">View / Edit</div>
                  <div className="md:hidden">More Info</div>
                </Link>
              </div>
            </div>
          </>
          :
          <>
            <div className="relative pt-[70%] DiamondImageContainer">
              <img className='absolute w-full h-full top-0 left-0 object-cover'
                src={productData?.diamond?.v360?.url ? `${productData?.diamond?.v360?.url}/${productData?.diamond?.v360?.top_index ? productData?.diamond?.v360?.top_index : "0"}.jpg` : productData?.diamond?.image}
                alt="diamond"
              />
            </div>
            <div className="relative z-10 shadow-[0px_-2px_20px_rgba(0,0,0,0.15)] flex flex-col flex-grow overflow-auto">
              <div className="px-3 pt-2 pb-3 shrink-0 border-b">
                <div className="text-1.5xl text-black leading-tight">Diamond Details</div>
                <div className="mt-1 leading-tight flex items-center gap-1.5 flex-wrap">
                  <div className="text-lg leading-tight text-customGray-500">
                    {productData.price} INR
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-auto px-3 pt-3 pb-21">
                <div className="p-2 bg-customGray-50 rounded-2xl grid grid-cols-2 gap-2">

                  {/* Carat Weight */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path><path d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path><path d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.91846 3.59375H11.0815" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path><path d="M7.49951 2.8125V9.87541" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">Carat</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                      {productData.diamond.certificate.carats}
                    </div>
                  </div>

                  {/* Color */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65441 8.86331C5.85951 8.86331 6.03403 8.78887 6.17799 8.63998C6.32195 8.49109 6.39393 8.31902 6.39393 8.12379C6.39393 7.92856 6.32195 7.7565 6.17799 7.60761C6.03403 7.45872 5.8595 7.38428 5.65441 7.38428C5.45918 7.38428 5.28959 7.45872 5.14562 7.60761C5.00166 7.7565 4.92969 7.92856 4.92969 8.12379C4.92969 8.31902 5.00166 8.49109 5.14562 8.63998C5.28959 8.78887 5.45919 8.86331 5.65441 8.86331Z" fill="#B71B9E"></path><path d="M6.86648 6.37464C7.06171 6.37464 7.23106 6.30267 7.37452 6.1587C7.51849 6.01524 7.59046 5.84589 7.59046 5.65066C7.59046 5.44507 7.51849 5.2703 7.37452 5.12634C7.23106 4.98287 7.06171 4.91113 6.86648 4.91113C6.66089 4.91113 6.48612 4.98287 6.34216 5.12634C6.19869 5.2703 6.12695 5.44507 6.12695 5.65066C6.12695 5.84589 6.19869 6.01524 6.34216 6.1587C6.48612 6.30267 6.66089 6.37464 6.86648 6.37464Z" fill="#B71B9E"></path><path d="M9.73376 5.98743C9.929 5.98743 10.1011 5.91546 10.2499 5.7715C10.3988 5.62803 10.4733 5.45868 10.4733 5.26345C10.4733 5.05787 10.4015 4.88309 10.2581 4.73913C10.1141 4.59566 9.93933 4.52393 9.73375 4.52393C9.53851 4.52393 9.36917 4.59566 9.2257 4.73913C9.08174 4.88309 9.00977 5.05787 9.00977 5.26345C9.00977 5.45869 9.08174 5.62803 9.2257 5.7715C9.36917 5.91546 9.53852 5.98743 9.73375 5.98743H9.73376Z" fill="#B71B9E"></path><path d="M11.1047 8.22366C11.3 8.22366 11.4696 8.14922 11.6135 8.00033C11.7575 7.85144 11.8295 7.67937 11.8295 7.48414C11.8295 7.28892 11.7575 7.11685 11.6135 6.96796C11.4696 6.81907 11.3 6.74463 11.1047 6.74463C10.8997 6.74463 10.7251 6.81907 10.5812 6.96796C10.4372 7.11685 10.3652 7.28892 10.3652 7.48414C10.3652 7.67937 10.4372 7.85144 10.5812 8.00033C10.7251 8.14922 10.8997 8.22366 11.1047 8.22366Z" fill="#B71B9E"></path><path d="M8.48364 13C8.6135 13 8.71376 12.954 8.78441 12.8621C8.85453 12.7696 8.8896 12.6857 8.8896 12.6104C8.8896 12.4369 8.81116 12.2907 8.65428 12.1717C8.49741 12.0528 8.41897 11.7985 8.41897 11.4089C8.41897 10.9975 8.55974 10.6458 8.84128 10.3539C9.1223 10.0615 9.46307 9.91522 9.86357 9.91522H10.9677C11.725 9.91522 12.3364 9.6555 12.8018 9.13604C13.2673 8.61659 13.5 8.01609 13.5 7.33458C13.5 6.10087 13.0237 5.07001 12.071 4.24201C11.1188 3.41401 9.97733 3 8.64649 3C7.20708 3 5.98948 3.48699 4.99368 4.46097C3.9979 5.43494 3.5 6.61462 3.5 8C3.5 9.38538 3.98699 10.5651 4.96097 11.539C5.93494 12.513 7.10917 13 8.48364 13V13Z" stroke="#B71B9E" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">Color</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                      {productData.diamond.certificate.color}
                    </div>
                  </div>

                  {/* CLARITY */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.11768 6.83124L4.9992 3.94971H11.0008L13.8823 6.83124L7.99689 12.0501L2.11768 6.83124Z" stroke="#6948AF" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M7.99756 10.6996L12.3437 6.84491L10.5003 5.00146H7.99979L7.99756 10.6996Z" fill="#6948AF"></path></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">CLARITY</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                      {productData.diamond.certificate.clarity}
                    </div>
                  </div>

                  {/* CUT */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.50781 7.30243L4.37667 4.43262H10.4437L13.3126 7.30243L7.40733 12.5404L1.50781 7.30243Z" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.17558 7.23696L7.10057 10.3052L3.81494 7.38886L5.47519 5.72852L5.17558 7.23696Z" fill="#1A93C7"></path><path d="M7.40771 12.4684L10.0354 7.32795L8.02057 4.44141" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M15.2645 9.25526L7.71191 1.7002" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.42334 14.3001L15.4926 5.36865" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path></g></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">CUT</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                      {productData.diamond.certificate.cut}
                    </div>
                  </div>


                  {/* DIMENSIONS */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">DIMENSIONS (MM)</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                    {productData?.diamond?.certificate
                  ? `${parseFloat(productData.diamond.certificate.length).toFixed(2)} / ${parseFloat(productData.diamond.certificate.width).toFixed(2)}`
                  : "N/A"}
                    </div>
                  </div>

                  {/* CERTIFICATION */}
                  <div className="rounded-xl bg-white shadow-3sc-tile p-2.5 flex flex-col justify-between min-h-[5rem]">
                    <div className="flex items-center w-full gap-1">
                      <svg className="block w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 17 16"><svg viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93758 2.02284L9.9586 2.67902H11.1723L11.6765 3.78303L12.6975 4.4392L12.5248 5.64054L13.029 6.74455L12.2342 7.6618L12.0614 8.86314L10.8969 9.20508L10.1021 10.1223L8.93758 9.78039L7.77305 10.1223L6.97825 9.20508L5.81372 8.86314L5.641 7.6618L4.84619 6.74455L5.35038 5.64054L5.17765 4.4392L6.19868 3.78303L6.70287 2.67902H7.91655L8.93758 2.02284Z" stroke="#CEA100" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M9.82104 11.1904L10.8769 13.0228L11.4964 11.5972L13.0402 11.7736L12.009 9.98737" stroke="#CEA100" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8.05493 11.1889L6.99824 13.0228L6.37875 11.5972L4.83496 11.7736L5.86612 9.98737" stroke="#CEA100" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                      <div className="text-1.25xs leading-none text-customGray-400 uppercase font-semibold">CERTIFICATION</div>
                    </div>
                    <div className="text-black font-bold text-base leading-tight">
                      {productData.diamond.certificate.lab}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-2 flex-wrap p-3 fixed bottom-0 left-0 right-0 z-10 md:flex-col-reverse max-w-[300px]">
                <button
                  type="button"
                  className="w-12 h-12 md:h-auto md:w-full rounded-full text-base font-semibold leading-tight bg-white text-black md:p-2 text-center flex justify-center items-center border-2 border-black md:px-5 shadow-floating-button md:shadow-none"
                  onClick={() => handleRemoveRingClick({})}
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
                <Link
                  className="grow rounded-full text-base font-semibold leading-tight bg-black text-white p-3.5 text-center flex justify-center items-center md:w-full md:px-5 md:font-normal shadow-floating-button md:shadow-none"
                  to={`/diamond-list/${productData.diamond.certificate.certNumber}`}
                  aria-hidden="false"
                >
                  <div className="hidden md:block">View / Edit</div>
                  <div className="md:hidden">More Info</div>
                </Link>
              </div>
            </div></>
        }

      </div>
    </Drawer>
  );
};

export default ProductDetailsDrawer;