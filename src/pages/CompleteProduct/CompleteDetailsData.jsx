import React from 'react'
import BadgeComponent from '../../Component/Common/BadgeComponent'
import AccordianforDetail from '../../Component/Common/AccordianforDetail'
import VirtualAppointment from '../../Component/Common/VirtualAppointment'
import DiamondDetailsImagesInfo from './CompleteDetailsImagesInfo'
import DiamondDetailsInfo from './CompleteDetailsInfo'
import { useSelector } from 'react-redux'
import SkeltoneDetailPage from '../../Component/Common/SkeltoneDetailPage'
import CompleteDetailsInfo from './CompleteDetailsInfo'
import CompleteDetailsImagesInfo from './CompleteDetailsImagesInfo'
import { Link, useNavigate } from "react-router-dom";


const CompleteDetailsData = () => {

    const { tabs: diamond, loading, error } = useSelector((state) => state.getTabsProduct);
    const diamondPrice = diamond?.diamond && parseFloat(diamond?.diamond?.price);
    const ringPrice = diamond?.ring && parseFloat(diamond?.ring?.variants.edges[0].node.price.amount);
    const TotalPrice = diamondPrice + ringPrice;

    if (error) return <p>Error: {error}</p>;

    if (loading)
        return (
            <SkeltoneDetailPage />
        );

    return (
        <div className='customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8'>

            <CompleteDetailsImagesInfo />

            <div className='customer-product-side-text-sec'>
                <div className='the-lexie-text-main flex justify-between gap-4 mb-4 md:mb-6 md:gap-1'>
                    <div className='the-lexie-detail flex-1'>
                        <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>
                            The  <span className='capitalize'>{diamond?.ring?.title}</span> {diamond?.diamond?.diamond?.certificate?.carats} Carat {diamond?.diamond?.diamond?.certificate?.color} {diamond?.diamond?.diamond?.certificate?.clarity} {diamond?.diamond?.diamond?.certificate?.shape} {diamond?.diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</h2>
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

                <div class="flex flex-col items-center justify-center ">
                    <div class="bg-white  rounded-lg w-full">
                        <div class="mt-0">
                            <div class="flex justify-between items-center cpst-complete-info-block cpst-complete-info-setting rounded-lg p-3 border transition duration-300 border-transparent bg-customGray-150">
                                <div>
                                    <h3 class="text-sm  font-medium">{diamond?.ring?.title}</h3>
                                    <p class="text-sm text-gray-500">{diamond?.ring?.handle}</p>

                                    <a href="#" class="text-xs leading-tight text-customGray-500 underline">Change</a> | 


                                    <Link
                                        className='text-xs leading-tight text-customGray-500 underline'
                                        to={`/ring-select/${diamond?.ring?.id?.split("/").pop()}`}
                                        aria-hidden="false"
                                    >
                                        View Details
                                    </Link>
                                </div>
                                <p class="text-2xl font-bold">${ringPrice}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="flex justify-between items-center cpst-complete-info-block cpst-complete-info-setting rounded-lg p-3 border transition duration-300 border-transparent bg-customGray-150">
                                <div>
                                    <h3 class="text-sm font-medium">Round</h3>
                                    <p class="text-sm text-gray-500">{diamond?.diamond?.diamond?.certificate?.carats} Carat {diamond?.diamond?.diamond?.certificate?.color} {diamond?.diamond?.diamond?.certificate?.clarity} {diamond?.diamond?.diamond?.certificate?.shape} {diamond?.diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}</p>
                                    <a href="#" class="text-xs leading-tight text-customGray-500 underline">Change</a> | 
                                    <Link
                                        className='text-xs leading-tight text-customGray-500 underline'
                                         to={`/diamond-list/${diamond?.diamond?.diamond?.certificate?.certNumber}`}
                                        aria-hidden="false"
                                    >
                                        View Details
                                    </Link>
                                </div>
                                <p class="text-2xl font-bold">${diamondPrice}</p>
                            </div>
                        </div>
                        <div class="mt-6 text-center ">
                            <p class="cpst-total-price-title text-customGray-300 mb-1.5">Total Price</p>
                            <p class="text-2xl font-bold">${TotalPrice}</p>
                            <p class="cpst-total-price-text text-1.5sm leading-none flex items-center justify-center gap-2 py-1.5 px-3 mx-auto mt-2 text-black bg-customGray-150 w-fit rounded-100">
                                <svg className="w-5 h-auto" aria-hidden="true" focusable="false" viewBox="0 0 19 12">
                                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#ReadyToShipNew)">
                                            <path d="M3.29395 1.74342V0.940002H12.9739V9.74H7.52626" stroke="black" stroke-miterlimit="10" stroke-linecap="round"></path>
                                            <path d="M4.74047 9.73999H3.29395V8.67578" stroke="black" stroke-miterlimit="10" stroke-linecap="round"></path>
                                            <path d="M14.1619 9.74002H12.9741V4.46002H16.9902L18.2541 7.23409V9.74002H16.8645" stroke="black" stroke-miterlimit="10"></path>
                                            <path d="M6.25896 11.06C6.98798 11.06 7.57897 10.469 7.57897 9.73998C7.57897 9.01097 6.98798 8.41998 6.25896 8.41998C5.52995 8.41998 4.93896 9.01097 4.93896 9.73998C4.93896 10.469 5.52995 11.06 6.25896 11.06Z" stroke="black" stroke-miterlimit="10"></path>
                                            <path d="M15.6139 11.06C16.343 11.06 16.9339 10.469 16.9339 9.73998C16.9339 9.01097 16.343 8.41998 15.6139 8.41998C14.8849 8.41998 14.2939 9.01097 14.2939 9.73998C14.2939 10.469 14.8849 11.06 15.6139 11.06Z" stroke="black" stroke-miterlimit="10"></path>
                                            <path d="M4.74035 7.31256H1.97119" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M6.80497 3.09613H2.47461" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M2.5979 5.26129H0.746094" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.73451 5.26129H4.05078" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                </svg>
                                Ships in 2-4 weeks
                            </p>
                        </div>
                        <div class="mt-4 space-y-2">
                            <button class="bg-black text-white px-4 py-2 rounded-md w-full">Secure Checkout</button>
                            <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md w-full">Add to Shopping Bag</button>
                        </div>
                        <div class="mt-4 text-center">
                            <p class="text-gray-500">Pay in 12 interest-free installments of $105 <a href="#" class="text-blue-500 hover:text-blue-700">Learn more</a></p>
                        </div>
                    </div>
                </div>


                <BadgeComponent />
                <CompleteDetailsInfo />

                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-4">Know your setting</h2>
                    <div class="flex items-center mb-4">
                        <span class="material-icons text-gray-500 mr-2">watercolor</span>
                        <span class="text-gray-700 font-medium">METAL</span>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">14k White Gold</h3>
                    <div class="flex items-center mb-2">
                        <div class="w-6 h-6 bg-yellow-500 rounded-full mr-2"></div>
                        <span class="text-gray-700">58.5% Gold</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="w-6 h-6 bg-orange-500 rounded-full mr-2"></div>
                        <span class="text-gray-700">25.4% Copper</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="w-6 h-6 bg-gray-400 rounded-full mr-2"></div>
                        <span class="text-gray-700">8.7% Zinc</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="w-6 h-6 bg-gray-500 rounded-full mr-2"></div>
                        <span class="text-gray-700">7.3% Nickel</span>
                    </div>
                    <p class="text-gray-500 text-sm mt-4">The secret sauce that makes this piece: All white gold pieces are Rhodium plated</p>
                </div>

                <AccordianforDetail />
                <VirtualAppointment />
            </div>

        </div>
    )
}

export default CompleteDetailsData