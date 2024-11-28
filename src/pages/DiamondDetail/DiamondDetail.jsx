import React from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import GetInTouch from '../../Component/Common/GetInTouch'
import OurWork from '../../Component/Common/OurWork'
import NewsletterFooter from '../../Component/Common/Footer/NewsletterFooter'
import BadgeComponent from '../../Component/Common/BadgeComponent'
import AccordianforDetail from '../../Component/Common/AccordianforDetail'

const DiamondDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>
      <TabComponent />
      <section className='customer-product-sec md:pt-8'>
        <div className='container mx-auto px-4'>
          <div className='customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8'>
            <div className='customer-product-side-img-sec'>
              <div className='customer-product-side-img-sub lg:rounded-4xl bg-customGray-50 overflow-hidden relative hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr '>
                <div className='customer-product-zoom-img custom-zoom-wrapper-scale pointer-events-none mix-blend-multiply transition-transform duration-300 ease-in-out'>
                  <img src="/lexie-side-img1.webp" />
                </div>
                <div className='customer-product-zoom-img'>
                  <img src="/lexie-side-img2.webp" />
                </div>
                <div className='customer-product-zoom-img'>
                  <img src="/lexie-side-img2.webp" />
                </div>
                <div className='customer-product-zoom-img'>
                  <img src="/lexie-side-img1.webp" />
                </div>
              </div>
            </div>
            <div className='customer-product-side-text-sec'>
              <div className='the-lexie-text-main flex justify-between gap-4 mb-4 md:mb-6 md:gap-1'>
                <div className='the-lexie-detail flex-1'>
                  <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>0.5 Carat F VVS2 Round Natural Diamond</h2>
                  <h3 className='tangiblee-price text-lg mb-1 leading-none text-black font-semibold md:text-1.5xl'>$1,146</h3>
                  <p className='text-customGray-300 mb-2 text-1.5sm leading-none'>With setting:<span>$2,096</span></p>
                </div>
                <div className="cpst-title-icon-container flex items-start gap-1 shrink-0">
                  <svg className="cpst-title-icon w-16 h-auto shrink-0" viewBox="0 0 81 77">
                    <svg width="81" height="77" viewBox="0 0 81 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M31.4922 40.5023L31.4523 37.147C31.4227 36.7135 31.3543 36.2851 31.2763 35.859C31.2757 35.8504 31.2706 35.843 31.2703 35.8342C31.27 35.8316 31.2717 35.8288 31.2717 35.8262C31.1629 35.242 31.0217 34.6647 30.8234 34.1027C30.3768 32.8449 29.8732 31.4184 28.7931 31.3546C28.7658 31.3546 28.7407 31.3524 28.7157 31.3524C27.8042 31.3524 27.2186 32.3572 26.6991 33.2459C26.5527 33.4966 26.447 33.7671 26.3294 34.0315C25.6025 32.3176 25.1929 30.4423 25.1342 28.4804C25.5104 28.6621 25.9223 28.7798 26.3983 28.7798C26.4461 28.7798 26.494 28.7798 26.5418 28.7775C28.1323 28.7205 29.0028 27.1961 29.2876 26.6971C29.5838 26.1821 29.6659 25.8175 29.8436 25.0223C29.9097 24.7306 29.9894 24.3706 30.1034 23.908C30.2788 23.1811 30.4474 22.5636 30.5796 22.0965L33.7651 21.5496C35.408 20.9617 36.4744 19.8315 36.4858 18.674C36.5018 17.2749 35.0549 16.4067 33.7743 15.6365C33.3236 15.3665 32.852 15.1346 32.3643 14.9387C34.7455 13.4393 37.5534 12.5581 40.5692 12.5581C44.0942 12.5581 47.3368 13.7569 49.9401 15.7505H46.3979C42.8615 15.7505 39.9858 18.6261 39.9858 22.1626L41.5914 26.2499H42.8227L41.1525 22.0532C41.2117 19.2117 43.5428 16.9171 46.3979 16.9171H51.3041C53.8115 19.343 55.5008 22.6046 55.9195 26.2499H56.0511C56.5151 26.2499 56.9603 26.4342 57.2884 26.7626L57.7365 27.211C57.3115 18.0975 49.7857 10.8081 40.5692 10.8081C31.0809 10.8081 23.3608 18.5281 23.3608 28.0164C23.3608 37.5047 31.0809 45.2248 40.5692 45.2248C40.7136 45.2248 40.8534 45.2065 40.997 45.2031L38.8964 43.3386C36.1532 43.0364 33.6159 42.0506 31.4922 40.5023H31.4922ZM31.159 15.7801C31.8636 15.992 32.5467 16.2629 33.1773 16.6392C34.1844 17.2453 35.326 17.9311 35.3192 18.6626C35.3124 19.3075 34.5126 20.0435 33.4735 20.4263L29.6613 21.0688L29.5588 21.4198C29.4152 21.9165 29.1987 22.6844 28.9686 23.6323C28.8547 24.1017 28.7726 24.4686 28.7066 24.7671C28.5402 25.5054 28.4833 25.7537 28.2759 26.116C28.0685 26.4783 27.4396 27.5767 26.4985 27.6108C25.9289 27.6339 25.4974 27.4701 25.1581 27.081C25.4353 22.4836 27.7216 18.4296 31.159 15.7801V15.7801ZM27.0437 35.4853C27.2001 34.9082 27.4055 34.3488 27.7085 33.8338C27.8976 33.508 28.4741 32.519 28.718 32.519C28.718 32.519 28.7202 32.5213 28.7225 32.5213C29.0324 32.5396 29.5519 34.0093 29.7251 34.4969C30.035 35.3742 30.2242 36.2948 30.2879 37.1948L30.3147 39.5527C29.0102 38.3917 27.8965 37.0234 27.0437 35.4853L27.0437 35.4853ZM56.0512 27.9999H40.8013L33.0195 35.7821L48.4197 49.4517L63.8077 35.8049H63.808L63.8333 35.7821L56.0512 27.9999ZM41.5262 29.7499H49.7721L54.0314 35.8504L48.32 47.0232L35.5701 35.7063L41.5262 29.7499H41.5262ZM50.5528 45.2208L55.3895 35.7593L51.1962 29.7499H55.3263L61.2821 35.7057L50.5528 45.2208ZM47.6848 42.9325L39.8195 35.951L43.794 31.9762L42.3197 35.6562L47.6848 42.9325Z" fill="black"></path>
                      <g>
                        <path d="M27.1852 73H26.0652L20.6192 65.552V73H19.4572V63.662H20.6472L26.0232 70.956V63.662H27.1852V73ZM34.6053 73H33.5553V72.23C32.986 72.8553 32.2393 73.168 31.3153 73.168C30.69 73.168 30.1393 72.9673 29.6633 72.566C29.1873 72.1647 28.9493 71.6187 28.9493 70.928C28.9493 70.2187 29.1827 69.6727 29.6493 69.29C30.1253 68.898 30.6807 68.702 31.3153 68.702C32.2767 68.702 33.0233 69.01 33.5553 69.626V68.408C33.5553 67.96 33.3967 67.61 33.0793 67.358C32.762 67.106 32.3513 66.98 31.8473 66.98C31.054 66.98 30.3633 67.2927 29.7753 67.918L29.2853 67.19C30.004 66.4433 30.9047 66.07 31.9873 66.07C32.762 66.07 33.392 66.2567 33.8773 66.63C34.3627 67.0033 34.6053 67.5773 34.6053 68.352V73ZM31.6933 72.412C32.5333 72.412 33.154 72.132 33.5553 71.572V70.298C33.154 69.738 32.5333 69.458 31.6933 69.458C31.208 69.458 30.8067 69.598 30.4893 69.878C30.1813 70.1487 30.0273 70.5033 30.0273 70.942C30.0273 71.3713 30.1813 71.726 30.4893 72.006C30.8067 72.2767 31.208 72.412 31.6933 72.412ZM38.4182 73.168C37.9235 73.168 37.5502 73.0327 37.2982 72.762C37.0462 72.4913 36.9202 72.0993 36.9202 71.586V67.162H35.8002V66.238H36.9202V64.39H37.9702V66.238H39.3422V67.162H37.9702V71.362C37.9702 71.6233 38.0262 71.8333 38.1382 71.992C38.2595 72.1507 38.4322 72.23 38.6562 72.23C38.9642 72.23 39.2022 72.1367 39.3702 71.95L39.6782 72.734C39.3702 73.0233 38.9502 73.168 38.4182 73.168ZM46.4394 73H45.3894V72.048C45.1094 72.3653 44.7547 72.6313 44.3254 72.846C43.9054 73.0607 43.4574 73.168 42.9814 73.168C41.5441 73.168 40.8254 72.4493 40.8254 71.012V66.238H41.8754V70.69C41.8754 71.25 42.0014 71.6467 42.2534 71.88C42.5147 72.1133 42.8927 72.23 43.3874 72.23C43.7794 72.23 44.1574 72.132 44.5214 71.936C44.8947 71.74 45.1841 71.4973 45.3894 71.208V66.238H46.4394V73ZM49.5863 73H48.5363V66.238H49.5863V67.33C50.2117 66.5087 50.963 66.098 51.8403 66.098V67.176C51.7097 67.148 51.5697 67.134 51.4203 67.134C51.103 67.134 50.7577 67.246 50.3843 67.47C50.011 67.694 49.745 67.9413 49.5863 68.212V73ZM58.4354 73H57.3854V72.23C56.8161 72.8553 56.0694 73.168 55.1454 73.168C54.5201 73.168 53.9694 72.9673 53.4934 72.566C53.0174 72.1647 52.7794 71.6187 52.7794 70.928C52.7794 70.2187 53.0128 69.6727 53.4794 69.29C53.9554 68.898 54.5108 68.702 55.1454 68.702C56.1068 68.702 56.8534 69.01 57.3854 69.626V68.408C57.3854 67.96 57.2268 67.61 56.9094 67.358C56.5921 67.106 56.1814 66.98 55.6774 66.98C54.8841 66.98 54.1934 67.2927 53.6054 67.918L53.1154 67.19C53.8341 66.4433 54.7348 66.07 55.8174 66.07C56.5921 66.07 57.2221 66.2567 57.7074 66.63C58.1928 67.0033 58.4354 67.5773 58.4354 68.352V73ZM55.5234 72.412C56.3634 72.412 56.9841 72.132 57.3854 71.572V70.298C56.9841 69.738 56.3634 69.458 55.5234 69.458C55.0381 69.458 54.6368 69.598 54.3194 69.878C54.0114 70.1487 53.8574 70.5033 53.8574 70.942C53.8574 71.3713 54.0114 71.726 54.3194 72.006C54.6368 72.2767 55.0381 72.412 55.5234 72.412ZM61.5902 73H60.5402V63.662H61.5902V73Z" fill="black"></path>
                      </g>
                    </svg>
                  </svg>
                </div>
              </div>
              <div className="DiamondInfo__container my-4 md:my-6">
                <div className="DiamondInfo__wrapper flex flex-wrap justify-center items-center text-center">
                  <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">0.5</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">Carat</p>
                  </div>
                  <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">F</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">Color</p>
                  </div>
                  <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">VVS2</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">Clarity</p>
                  </div>
                  <div className="DiamondInfoDivider hidden md:block"></div>
                  <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">Good</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">Cut</p>
                  </div>
                  <div className="DiamondInfo__block px-2 relative hidden w-1/3 md:block">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">1</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">Ratio</p>
                  </div>
                  <div className="DiamondInfo__block px-2 relative hidden w-1/3 md:block">
                    <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">4.9/4.88</p>
                    <p className="DiamondInfo__block-title" tabindex="-1">L/W (mm)</p>
                  </div>
                </div>
              </div>
              <div className='production-button mt-8'>
                <a href="#" className='w-full block bg-black py-4 px-8 leading-tight rounded-full text-sm font-semibold capitalize text-white md:leading-none md:py-[13px] relative overflow-hidden'>
                  <div className="transition-transform duration-500 text-ellipsis overflow-hidden flex items-center justify-between gap-2 md:gap-4 ">
                    <svg className="w-6 h-6" aria-hidden="true" focusable="false">
                      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8741 3.91081L14.2024 0.57251H21.2409L24.5692 3.91081L17.7183 10.0039L10.8741 3.91081Z" stroke="currentColor" stroke-miterlimit="10"></path>
                        <path d="M16.2128 5.73338L14.2544 3.93149L15.547 2.63538" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                        <path d="M17.7188 9.91987L20.7672 3.94029L18.4297 0.58252" stroke="currentColor" stroke-miterlimit="10"></path>
                        <path d="M11.4913 4.461L17.7217 10.0077L23.9581 4.461" stroke="currentColor" stroke-miterlimit="10"></path>
                        <path d="M23.0797 9.99799C25.4403 11.2008 27.3273 13.1634 28.4365 15.5695C29.5458 17.9756 29.8126 20.685 29.1941 23.2613C28.5756 25.8376 27.1078 28.1306 25.0271 29.7708C22.9464 31.4111 20.3741 32.3031 17.7247 32.3031C15.0752 32.3031 12.5029 31.4111 10.4222 29.7708C8.34157 28.1305 6.87373 25.8375 6.25523 23.2613C5.63672 20.685 5.90358 17.9756 7.01281 15.5695C8.12203 13.1634 10.009 11.2008 12.3697 9.99799" stroke="currentColor" stroke-linecap="round"></path>
                      </svg>
                    </svg>
                    Complete your ring
                    <svg className="w-6 h-6 p-1" aria-hidden="true" focusable="false">
                      <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" stroke-width="2.5"></path>
                      </svg>
                    </svg>
                  </div>
                </a>
                {/* <a href="#" className='w-full block bg-white py-2 px-8 text-center rounded-full leading-none text-black border-2 border-black mt-2'>
                          <div className="text-sm leading-tight font-semibold">Buy Setting Only*</div>
                          <div className="text-1.5xs leading-tight">*center stone not included</div>
                        </a> */}
                <h5 className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 12 interest-free installments of <span>$95.50</span> <button type="button" className="underline cursor-pointer">Learn more</button></h5>
              </div>
              <div className="hidden lg:block mt-6 text-center">
                <a href="#" type="button" className="WishlistButton  stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 md:w-7 md:h-7 ">
                      <svg className="WishlistHeartIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                        <mask id="wishlist-heart-mask">
                          <path d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z" fill="white" stroke="white"></path>
                        </mask>
                        <g mask="url(#wishlist-heart-mask)">
                          <polygon className="heart-bg-fill" fill="#fff" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                          <path className="heart-right" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                          <path className="heart-bottom" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                          <path className="heart-left" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                          <rect className="heart-bright-left" fill="rgba(255,255,255,0.2)" x="-4.9" y="-5" width="26.5" height="12.2" shape-rendering="crispEdges"></rect>
                          <rect className="heart-bright-right" fill="rgba(255,255,255,0.2)" x="10.1" y="-2.8" width="11.8" height="22.3" shape-rendering="crispEdges"></rect>
                          <polygon className="heart-outline" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                        </g>
                      </svg>
                    </div>
                    <p className="text-base leading-tight" tabindex="-1">Add to wish list</p>
                  </div>
                </a>
              </div>
              <BadgeComponent />

              <div className="StoneProductInfo rounded-2.5xl p-3 bg-customGray-150 mt-4 mb-4">
                <h3 className="StoneProductInfo__title flex items-center gap-2 mb-2" tabindex="-1">
                  <svg className="w-8 h-8 p-1.5 rounded-full bg-white" aria-hidden="true" focusable="false">
                    <svg viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.01367 4.89352L4.89544 1H13.1046L16.9864 4.89352L8.99616 12L1.01367 4.89352Z" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
                      <path d="M7.2402 7.01938L4.95605 4.9178L6.46358 3.40613" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path>
                      <path d="M8.99658 11.9023L12.5521 4.92818L9.82583 1.01196" stroke="currentColor" stroke-width="0.75" stroke-miterlimit="10"></path>
                    </svg>
                  </svg>
                  Your  Diamond Info
                </h3>
                <div className='cpcst-info-container'>
                  <div className='cpcst-details-wrapper grid grid-cols-2 gap-2 items-stretch'>
                    <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="carat">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
                        <div className="StoneDetailBlock__title-container flex items-center gap-1">
                          <svg className="w-4 h-4" aria-hidden="true" focusable="false">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.91838 7.2041H5.77426C5.77426 8.22221 4.93648 9.05998 3.91838 9.05998C2.90028 9.05998 2.0625 8.22221 2.0625 7.2041H3.91838Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                              <path d="M3.9185 3.59375L2.1626 7.2042H5.6744L3.9185 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M11.082 7.2041H12.9378C12.9378 8.22221 12.1001 9.05998 11.082 9.05998C10.0639 9.05998 9.22607 8.2222 9.22607 7.2041H11.082V7.2041Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                              <path d="M11.0816 3.59375L9.32568 7.2042H12.8375L11.0816 3.59375Z" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M3.91846 3.59375H11.0815" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                              <path d="M7.49951 2.8125V9.87541" stroke="#EF8D33" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M7.49978 9.87549L4.23486 12.1876H10.7647L7.49978 9.87549Z" stroke="#EF8D33" stroke-width="0.75" stroke-linejoin="round"></path>
                            </svg>
                          </svg>
                          <p className="cpcst-detail-title" tabindex="-1">Carat</p>
                        </div>
                      </div>
                      <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
                        <p className="StoneDetailBlock__content-value" tabindex="-1">0.5</p>
                      </div>
                      <div className="StoneDetailBlock__desc">Universal measurement unit for diamonds</div>
                    </div>
                    <div className='StoneDetailBlock p-3 flex flex-col justify-between' data-current-block="color">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2"><div className="StoneDetailBlock__title-container flex items-center gap-1"><svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65441 8.86331C5.85951 8.86331 6.03403 8.78887 6.17799 8.63998C6.32195 8.49109 6.39393 8.31902 6.39393 8.12379C6.39393 7.92856 6.32195 7.7565 6.17799 7.60761C6.03403 7.45872 5.8595 7.38428 5.65441 7.38428C5.45918 7.38428 5.28959 7.45872 5.14562 7.60761C5.00166 7.7565 4.92969 7.92856 4.92969 8.12379C4.92969 8.31902 5.00166 8.49109 5.14562 8.63998C5.28959 8.78887 5.45919 8.86331 5.65441 8.86331Z" fill="#B71B9E"></path><path d="M6.86648 6.37464C7.06171 6.37464 7.23106 6.30267 7.37452 6.1587C7.51849 6.01524 7.59046 5.84589 7.59046 5.65066C7.59046 5.44507 7.51849 5.2703 7.37452 5.12634C7.23106 4.98287 7.06171 4.91113 6.86648 4.91113C6.66089 4.91113 6.48612 4.98287 6.34216 5.12634C6.19869 5.2703 6.12695 5.44507 6.12695 5.65066C6.12695 5.84589 6.19869 6.01524 6.34216 6.1587C6.48612 6.30267 6.66089 6.37464 6.86648 6.37464Z" fill="#B71B9E"></path><path d="M9.73376 5.98743C9.929 5.98743 10.1011 5.91546 10.2499 5.7715C10.3988 5.62803 10.4733 5.45868 10.4733 5.26345C10.4733 5.05787 10.4015 4.88309 10.2581 4.73913C10.1141 4.59566 9.93933 4.52393 9.73375 4.52393C9.53851 4.52393 9.36917 4.59566 9.2257 4.73913C9.08174 4.88309 9.00977 5.05787 9.00977 5.26345C9.00977 5.45869 9.08174 5.62803 9.2257 5.7715C9.36917 5.91546 9.53852 5.98743 9.73375 5.98743H9.73376Z" fill="#B71B9E"></path><path d="M11.1047 8.22366C11.3 8.22366 11.4696 8.14922 11.6135 8.00033C11.7575 7.85144 11.8295 7.67937 11.8295 7.48414C11.8295 7.28892 11.7575 7.11685 11.6135 6.96796C11.4696 6.81907 11.3 6.74463 11.1047 6.74463C10.8997 6.74463 10.7251 6.81907 10.5812 6.96796C10.4372 7.11685 10.3652 7.28892 10.3652 7.48414C10.3652 7.67937 10.4372 7.85144 10.5812 8.00033C10.7251 8.14922 10.8997 8.22366 11.1047 8.22366Z" fill="#B71B9E"></path><path d="M8.48364 13C8.6135 13 8.71376 12.954 8.78441 12.8621C8.85453 12.7696 8.8896 12.6857 8.8896 12.6104C8.8896 12.4369 8.81116 12.2907 8.65428 12.1717C8.49741 12.0528 8.41897 11.7985 8.41897 11.4089C8.41897 10.9975 8.55974 10.6458 8.84128 10.3539C9.1223 10.0615 9.46307 9.91522 9.86357 9.91522H10.9677C11.725 9.91522 12.3364 9.6555 12.8018 9.13604C13.2673 8.61659 13.5 8.01609 13.5 7.33458C13.5 6.10087 13.0237 5.07001 12.071 4.24201C11.1188 3.41401 9.97733 3 8.64649 3C7.20708 3 5.98948 3.48699 4.99368 4.46097C3.9979 5.43494 3.5 6.61462 3.5 8C3.5 9.38538 3.98699 10.5651 4.96097 11.539C5.93494 12.513 7.10917 13 8.48364 13V13Z" stroke="#B71B9E" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                      <p className="cpcst-detail-title" tabindex="-1">Color</p></div><button type="button" data-container=".cped-container" className="cpcst-details-item-tip cursor-pointer" data-click="colorRange" title="details">
                        <svg class="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button></div>
                      <div className='StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3'>
                        <p className='StoneDetailBlock__content-value'>F</p>
                        <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                          <img className='StoneDetailBlock__content-image' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneColorBG-HNKUR277.png" alt="" />
                        </div>
                      </div>
                      <div className="StoneDetailBlock__desc">Completely colorless</div>
                    </div>
                    <div className='StoneDetailBlock p-3 flex flex-col justify-between' data-current-block="clarity">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
                        <div className="StoneDetailBlock__title-container flex items-center gap-1">
                          <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.65441 8.86331C5.85951 8.86331 6.03403 8.78887 6.17799 8.63998C6.32195 8.49109 6.39393 8.31902 6.39393 8.12379C6.39393 7.92856 6.32195 7.7565 6.17799 7.60761C6.03403 7.45872 5.8595 7.38428 5.65441 7.38428C5.45918 7.38428 5.28959 7.45872 5.14562 7.60761C5.00166 7.7565 4.92969 7.92856 4.92969 8.12379C4.92969 8.31902 5.00166 8.49109 5.14562 8.63998C5.28959 8.78887 5.45919 8.86331 5.65441 8.86331Z" fill="#B71B9E"></path><path d="M6.86648 6.37464C7.06171 6.37464 7.23106 6.30267 7.37452 6.1587C7.51849 6.01524 7.59046 5.84589 7.59046 5.65066C7.59046 5.44507 7.51849 5.2703 7.37452 5.12634C7.23106 4.98287 7.06171 4.91113 6.86648 4.91113C6.66089 4.91113 6.48612 4.98287 6.34216 5.12634C6.19869 5.2703 6.12695 5.44507 6.12695 5.65066C6.12695 5.84589 6.19869 6.01524 6.34216 6.1587C6.48612 6.30267 6.66089 6.37464 6.86648 6.37464Z" fill="#B71B9E"></path><path d="M9.73376 5.98743C9.929 5.98743 10.1011 5.91546 10.2499 5.7715C10.3988 5.62803 10.4733 5.45868 10.4733 5.26345C10.4733 5.05787 10.4015 4.88309 10.2581 4.73913C10.1141 4.59566 9.93933 4.52393 9.73375 4.52393C9.53851 4.52393 9.36917 4.59566 9.2257 4.73913C9.08174 4.88309 9.00977 5.05787 9.00977 5.26345C9.00977 5.45869 9.08174 5.62803 9.2257 5.7715C9.36917 5.91546 9.53852 5.98743 9.73375 5.98743H9.73376Z" fill="#B71B9E"></path><path d="M11.1047 8.22366C11.3 8.22366 11.4696 8.14922 11.6135 8.00033C11.7575 7.85144 11.8295 7.67937 11.8295 7.48414C11.8295 7.28892 11.7575 7.11685 11.6135 6.96796C11.4696 6.81907 11.3 6.74463 11.1047 6.74463C10.8997 6.74463 10.7251 6.81907 10.5812 6.96796C10.4372 7.11685 10.3652 7.28892 10.3652 7.48414C10.3652 7.67937 10.4372 7.85144 10.5812 8.00033C10.7251 8.14922 10.8997 8.22366 11.1047 8.22366Z" fill="#B71B9E"></path><path d="M8.48364 13C8.6135 13 8.71376 12.954 8.78441 12.8621C8.85453 12.7696 8.8896 12.6857 8.8896 12.6104C8.8896 12.4369 8.81116 12.2907 8.65428 12.1717C8.49741 12.0528 8.41897 11.7985 8.41897 11.4089C8.41897 10.9975 8.55974 10.6458 8.84128 10.3539C9.1223 10.0615 9.46307 9.91522 9.86357 9.91522H10.9677C11.725 9.91522 12.3364 9.6555 12.8018 9.13604C13.2673 8.61659 13.5 8.01609 13.5 7.33458C13.5 6.10087 13.0237 5.07001 12.071 4.24201C11.1188 3.41401 9.97733 3 8.64649 3C7.20708 3 5.98948 3.48699 4.99368 4.46097C3.9979 5.43494 3.5 6.61462 3.5 8C3.5 9.38538 3.98699 10.5651 4.96097 11.539C5.93494 12.513 7.10917 13 8.48364 13V13Z" stroke="#B71B9E" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg><p class="cpcst-detail-title" tabindex="-1">CLARITY</p></div><button type="button" data-container=".cped-container" class="cpcst-details-item-tip cursor-pointer" data-click="colorRange" title="details"><svg class="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button></div>
                      <div className='StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3'>
                        <p className='StoneDetailBlock__content-value'>VVS2</p>
                        <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                          <img className='StoneDetailBlock__content-image' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneClarityBG-EISDTFPI.png" alt="" />
                        </div>
                      </div>
                      <div className="StoneDetailBlock__desc">Hard to see inclusions even under 10x magnification</div>
                    </div>
                    <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="cut">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
                        <div className="StoneDetailBlock__title-container flex items-center gap-1">
                          <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.50781 7.30243L4.37667 4.43262H10.4437L13.3126 7.30243L7.40733 12.5404L1.50781 7.30243Z" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.17558 7.23696L7.10057 10.3052L3.81494 7.38886L5.47519 5.72852L5.17558 7.23696Z" fill="#1A93C7"></path><path d="M7.40771 12.4684L10.0354 7.32795L8.02057 4.44141" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M15.2645 9.25526L7.71191 1.7002" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.42334 14.3001L15.4926 5.36865" stroke="#1A93C7" stroke-width="0.75" stroke-miterlimit="10"></path></g></svg></svg>
                          <p className="cpcst-detail-title" tabindex="-1">cut</p>
                        </div>
                        <button type="button" data-container=".cped-container" className="cpcst-details-item-tip cursor-pointer" data-click="cutRange" title="details"><svg className="cpcst-details-item-tip-icon cursor-pointer text-inherit opacity-30 w-4 h-4" aria-hidden="true" focusable="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none"><g><path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path></g></svg></svg></button>
                      </div>
                      <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
                        <p className="StoneDetailBlock__content-value" tabindex="-1">Good</p>
                      </div>
                      <div className="StoneDetailBlock__desc">Decent fire and sparkle</div>
                    </div>
                    <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="dimensions (mm)">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
                        <div className="StoneDetailBlock__title-container flex items-center gap-1">
                          <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                          <p className="cpcst-detail-title" tabindex="-1">DIMENSIONS (MM)</p>
                        </div>

                      </div>
                      <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
                        <p className="StoneDetailBlock__content-value" tabindex="-1">4.9x4.88</p>
                        <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                          <img className="StoneDetailBlock__content-image" src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/stoneDimensions-V2IG3DFU.png" alt="" />
                        </div>
                      </div>
                      <div className="StoneDetailBlock__desc">Ratio: 1</div>
                    </div>
                    <div className="StoneDetailBlock p-3 flex flex-col justify-between" data-current-block="dimensions (mm)">
                      <div className="StoneDetailBlock__header-container flex items-center justify-between gap-2 text-customGray-500 mb-2">
                        <div className="StoneDetailBlock__title-container flex items-center gap-1">
                          <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4203 5.07471H3.57971C3.25955 5.07471 3 5.43744 3 5.8849V10.1384C3 10.5859 3.25955 10.9486 3.57971 10.9486H12.4203C12.7405 10.9486 13 10.5859 13 10.1384V5.8849C13 5.43744 12.7405 5.07471 12.4203 5.07471Z" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M8 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M10.5 5.05176V7.99292" stroke="#0E98A0" stroke-width="0.75" stroke-miterlimit="10"></path></svg></svg>
                          <p className="cpcst-detail-title" tabindex="-1">CERTIFICATION</p>
                        </div>

                      </div>
                      <div className="StoneDetailBlock__content-container flex-1 mb-2 lg:mb-3">
                        <p className="StoneDetailBlock__content-value" tabindex="-1">GIA</p>
                        <div className='StoneDetailBlock__content-image-container mt-2.5 relative flex items-center gap-1'>
                          <img className="StoneDetailBlock__content-image" src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-icon-gia-crt-N3UI7WNQ.svg" alt="" />
                          <div className="StoneDetailBlock__certificate-title whitespace-pre-line">Natural Diamond</div>
                        </div>
                      </div>
                      <div className="StoneDetailBlock__desc">
                        <a href="#">View Certificate</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <AccordianforDetail />
            </div>
          </div>
          <div className='diamond-quality-main-sec pb-8'>
            <h2 className="text-3.25xl leading-1.1 font-light capitalize mb-4 md:mb-8 md:text-4xl md:leading-none md:font-semibold" tabindex="-1">Understand Your Diamond Qualities</h2>
            <div className='StoneEducationItems__Wrapper md:flex md:flex-wrap md:justify-center md:gap-4'>
              <div className='colorRangeBlock  md:flex md:flex-col md:justify-between md:w-1/2-gap-4 md:p-3 xl:w-1/3-gap-4 md:bg-customGray-50 md:rounded-2.5xl'>
                <div className='hidden md:block mb-2'>
                  <div className='flex flex-wrap gap-2 items-center whitespace-nowrap'>
                    <div className='flex items-center gap-2 text-base leading-none rounded-lg justify-between py-2 pl-3 pr-2 text-customGray-600 bg-white shadow shrink-0 font-semibold'>
                      <span className="uppercase">Color</span>
                      <span className="text-black font-bold py-1.5 px-2 bg-borders rounded-sm">F</span>
                    </div>
                  </div>
                </div>
                <div className='StoneEducationItem__Content w-full bg-white p-4 pb-3 rounded-lg  shadow'>
                  <div className='StoneEducationItem__ImageContainer mb-2 w-full'>
                    <div className='StoneEducationItem__ImageWrapper relative pt-[60%]  '>
                      <img className='absolute w-full h-full object-contain top-0 left-0 z-10' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-stone-6BRHTXNY.svg" alt="" />
                      <img className='absolute w-full h-full object-contain transition-opacity duration-300 top-0 left-0' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-solid-WWFSS453.svg" alt="" />
                    </div>
                  </div>
                  <div className='mb-2 diamond-quality-shape-sec'>
                    <div className='grid-with-variables bg-customGray-75 border-borders border rounded-lg h-10 relative'>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black font-proximaNovaCondensed"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                    </div>
                  </div>
                  <div className="px-1 min-h-[3.25rem] "><div className="text-1.5sm text-black font-semibold leading-tight">Completely colorless, these diamonds are rare and highly sought after. A good choice when money is no object.</div></div>

                </div>
                <div className="StoneEducationItem__PopupFooter pt-2 pb-3 px-1  "><div className="text-xs leading-tight text-customGray-250">Color refers to the natural tint of a diamond. The closer the diamond is to “colorless” the rarer it is. The industry standard to grading color in a diamond is to assign a letter grade from D (colorless) to J (nearly colorless)</div></div>
              </div>
              <div className='colorRangeBlock  md:flex md:flex-col md:justify-between md:w-1/2-gap-4 md:p-3 xl:w-1/3-gap-4 md:bg-customGray-50 md:rounded-2.5xl'>
                <div className='hidden md:block mb-2'>
                  <div className='flex flex-wrap gap-2 items-center whitespace-nowrap'>
                    <div className='flex items-center gap-2 text-base leading-none rounded-lg justify-between py-2 pl-3 pr-2 text-customGray-600 bg-white shadow shrink-0 font-semibold'>
                      <span className="uppercase">Color</span>
                      <span className="text-black font-bold py-1.5 px-2 bg-borders rounded-sm">F</span>
                    </div>
                  </div>
                </div>
                <div className='StoneEducationItem__Content w-full bg-white p-4 pb-3 rounded-lg  shadow'>
                  <div className='StoneEducationItem__ImageContainer mb-2 w-full'>
                    <div className='StoneEducationItem__ImageWrapper relative pt-[60%]  '>
                      <img className='absolute w-full h-full object-contain top-0 left-0 z-10' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-stone-6BRHTXNY.svg" alt="" />
                      <img className='absolute w-full h-full object-contain transition-opacity duration-300 top-0 left-0' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-solid-WWFSS453.svg" alt="" />
                    </div>
                  </div>
                  <div className='mb-2 diamond-quality-shape-sec'>
                    <div className='grid-with-variables bg-customGray-75 border-borders border rounded-lg h-10 relative'>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black font-proximaNovaCondensed"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                    </div>
                  </div>
                  <div className="px-1 min-h-[3.25rem] "><div className="text-1.5sm text-black font-semibold leading-tight">Completely colorless, these diamonds are rare and highly sought after. A good choice when money is no object.</div></div>

                </div>
                <div className="StoneEducationItem__PopupFooter pt-2 pb-3 px-1  "><div className="text-xs leading-tight text-customGray-250">Color refers to the natural tint of a diamond. The closer the diamond is to “colorless” the rarer it is. The industry standard to grading color in a diamond is to assign a letter grade from D (colorless) to J (nearly colorless)</div></div>
              </div>
              <div className='colorRangeBlock  md:flex md:flex-col md:justify-between md:w-1/2-gap-4 md:p-3 xl:w-1/3-gap-4 md:bg-customGray-50 md:rounded-2.5xl'>
                <div className='hidden md:block mb-2'>
                  <div className='flex flex-wrap gap-2 items-center whitespace-nowrap'>
                    <div className='flex items-center gap-2 text-base leading-none rounded-lg justify-between py-2 pl-3 pr-2 text-customGray-600 bg-white shadow shrink-0 font-semibold'>
                      <span className="uppercase">Color</span>
                      <span className="text-black font-bold py-1.5 px-2 bg-borders rounded-sm">F</span>
                    </div>
                  </div>
                </div>
                <div className='StoneEducationItem__Content w-full bg-white p-4 pb-3 rounded-lg  shadow'>
                  <div className='StoneEducationItem__ImageContainer mb-2 w-full'>
                    <div className='StoneEducationItem__ImageWrapper relative pt-[60%]  '>
                      <img className='absolute w-full h-full object-contain top-0 left-0 z-10' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-stone-6BRHTXNY.svg" alt="" />
                      <img className='absolute w-full h-full object-contain transition-opacity duration-300 top-0 left-0' src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1161720/build/_assets/kzr-Color-solid-WWFSS453.svg" alt="" />
                    </div>
                  </div>
                  <div className='mb-2 diamond-quality-shape-sec'>
                    <div className='grid-with-variables bg-customGray-75 border-borders border rounded-lg h-10 relative'>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black font-proximaNovaCondensed"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                      <button type="button" className="px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-customGray-500 font-proximaNovaCondensed"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button>
                    </div>
                  </div>
                  <div className="px-1 min-h-[3.25rem] "><div className="text-1.5sm text-black font-semibold leading-tight">Completely colorless, these diamonds are rare and highly sought after. A good choice when money is no object.</div></div>

                </div>
                <div className="StoneEducationItem__PopupFooter pt-2 pb-3 px-1  "><div className="text-xs leading-tight text-customGray-250">Color refers to the natural tint of a diamond. The closer the diamond is to “colorless” the rarer it is. The industry standard to grading color in a diamond is to assign a letter grade from D (colorless) to J (nearly colorless)</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch />
      <OurWork />
      <NewsletterFooter />
    </div>
  )
}

export default DiamondDetail