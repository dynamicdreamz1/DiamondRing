import React from 'react'
import BadgeComponent from '../../Component/Common/BadgeComponent'
import AccordianforDetail from '../../Component/Common/AccordianforDetail'
import VirtualAppointment from '../../Component/Common/VirtualAppointment'
import DiamondDetailsImagesInfo from './DiamondDetailsImagesInfo'
import DiamondDetailsInfo from './DiamondDetailsInfo'
import { useSelector } from 'react-redux'
import SkeltoneDetailPage from '../../Component/Common/SkeltoneDetailPage'


const DiamondDetailData = () => {

  const { diamond, loading, error } = useSelector((state) => state.singleDiamond);

  if (error) return <p>Error: {error}</p>;

  if (loading)
    return (
      <SkeltoneDetailPage />
    );

  return (
    <div className='customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8'>

      <DiamondDetailsImagesInfo />

      <div className='customer-product-side-text-sec'>
        <div className='the-lexie-text-main flex justify-between gap-4 mb-4 md:mb-6 md:gap-1'>
          <div className='the-lexie-detail flex-1'>
            <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>
              {diamond?.diamond?.certificate?.carats} Carat {diamond?.diamond?.certificate?.color} {diamond?.diamond?.certificate?.clarity} {diamond?.diamond?.certificate?.shape} {diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</h2>
            <h3 className='tangiblee-price text-lg mb-1 leading-none text-black font-semibold md:text-1.5xl'>${diamond?.price}</h3>
            <p className='text-customGray-300 mb-2 text-1.5sm leading-none'>With setting:<span>${diamond?.markup_price}</span></p>
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
              <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">
                {diamond?.diamond?.certificate?.carats}
              </p>
              <p className="DiamondInfo__block-title" tabindex="-1">Carat</p>
            </div>
            <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
              <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">
                {diamond?.diamond?.certificate?.color}
              </p>
              <p className="DiamondInfo__block-title" tabindex="-1">Color</p>
            </div>
            <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
              <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">
                {diamond?.diamond?.certificate?.clarity}
              </p>
              <p className="DiamondInfo__block-title" tabindex="-1">Clarity</p>
            </div>
            <div className="DiamondInfoDivider hidden md:block"></div>
            <div className="DiamondInfo__block px-2 relative w-1/4 md:w-1/3">
              <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">
                {diamond?.diamond?.certificate?.cut}
              </p>
              <p className="DiamondInfo__block-title" tabindex="-1">Cut</p>
            </div>
            <div className="DiamondInfo__block px-2 relative hidden w-1/3 md:block">
              <p className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis" tabindex="-1">
                {(diamond?.diamond?.certificate?.length / diamond?.diamond?.certificate?.width).toFixed(2)}
              </p>
              <p className="DiamondInfo__block-title" tabindex="-1">Ratio</p>
            </div>
            <div className="DiamondInfo__block px-2 relative hidden w-1/3 md:block">
              <p
                className="DiamondInfo__block-value whitespace-nowrap overflow-hidden text-ellipsis"
                tabIndex="-1"
              >
                {diamond?.diamond?.certificate
                  ? `${parseFloat(diamond.diamond.certificate.length).toFixed(2)} / ${parseFloat(diamond.diamond.certificate.width).toFixed(2)}`
                  : "N/A"}
              </p>
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
        <DiamondDetailsInfo />
        <AccordianforDetail />
        <VirtualAppointment />
      </div>

    </div>
  )
}

export default DiamondDetailData