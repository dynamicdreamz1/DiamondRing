import React, { useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useSelector } from 'react-redux';
import BadgeComponent from '../../Component/Common/BadgeComponent';
import AccordianforDetail from '../../Component/Common/AccordianforDetail';
import VirtualAppointment from '../../Component/Common/VirtualAppointment';
import SkeltoneDetailPage from '../../Component/Common/SkeltoneDetailPage';
import { addProductTabs } from '../../store/slices/TabProductSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LeftSideModal from '../EngagementRing/FilterSection/LeftSideModal';
import DiamondSelector from './DiamondSelector';
import CheckoutDrawer from '../../Component/Common/CheckoutDrawer';
import EngagementProductDetails from './EngagementProductDetails';


const EngagementRingDetailData = () => {
    const { product, loading, error } = useSelector((state) => state.singleProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getTabsProduct = useSelector((state) => state.getTabsProduct);
    const [selectedVariant] = useState(0);
    const variants = product?.variants?.edges;
    const images = product?.images?.edges.map((edge) => edge.node);
    const [selectedProductModel, setselectedProductModel] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const firstVariant = variants && variants[selectedVariant]?.node;
    const price = firstVariant?.price?.amount || "0.00";
    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency", currency: firstVariant?.price?.currencyCode || "USD",
    }).format(price);

    const compareAtPrice = firstVariant?.compareAtPrice;
    const formattedCompareAtPrice = compareAtPrice ? new Intl.NumberFormat("en-US", {
        style: "currency", currency: firstVariant?.price?.currencyCode || "USD",
    }).format(compareAtPrice)
        : null;


    const handleAddRingClick = (product) => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            const productWithType = {
                ring: { ...product, type: 'ring' },
                diamond: getTabsProduct?.tabs?.diamond,
                currentStep: getTabsProduct?.tabs?.diamond ? 2 : 1
            };

            dispatch(addProductTabs(productWithType));
            setselectedProductModel(true);

            if (getTabsProduct?.tabs?.diamond && product) {
                dispatch(addProductTabs({
                    ...productWithType,
                    finelProduct: { price: "", type: 'finelProduct' },
                    currentStep: 3
                }));
                navigate('/complete-product');
            }
        }, 2000); // Delay for 2 seconds
    };

    const handleOpenDrawer = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsOpen(true)
        }, 2000); // Delay for 2 seconds
    }

    if (error) return <p>Error: {error}</p>;

    if (loading)
        return (
            <SkeltoneDetailPage />
        );

    return (
        <section className='customer-product-sec md:pt-8'>
            <div className='container mx-auto px-4'>
                <div className='customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8'>
                    <div className='customer-product-side-img-sec'>
                        <div className='customer-product-side-img-sub lg:rounded-4xl bg-customGray-50 overflow-hidden relative hidden lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr '>
                            {images?.map((image) => (
                                <div key={image.id}>
                                    <InnerImageZoom
                                        src={image.src}
                                        alt={image.altText || product.title}
                                        zoomType="click" // Enable zoom on click only
                                        zoomScale={1} // Scale the zoom level
                                        className="custom-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='customer-product-side-text-sec'>
                        <div className='the-lexie-text-main flex justify-between gap-4 mb-4 md:mb-6 md:gap-1'>
                            <div className='the-lexie-detail flex-1'>
                                <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>{product?.title}</h2>
                                <h3 className='tangiblee-price text-lg mb-1 leading-none text-black font-semibold md:text-1.5xl'>{formattedPrice}</h3>
                                <p className='text-customGray-300 mb-2 text-1.5sm leading-none'>With stone:<span>{formattedCompareAtPrice}</span></p>
                                <div href="#" className='ExtrasButton inline-flex items-center gap-1'>
                                    Extras
                                    <span className="ExtrasButton-circle rounded-full bg-white flex items-center justify-center"><svg className="svg-icon" viewBox="0 0 5 5"><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.125" width="0.75" height="5" fill="currentColor"></rect><rect y="2.875" width="0.75" height="5" transform="rotate(-90 0 2.875)" fill="currentColor"></rect></svg></svg></span>
                                </div>
                            </div>
                            <div className="tangiblee-wrapper pdp">
                                <div className="tangiblee-cta font-medium" data-click-and-touch-bound="true" role="button" tabIndex="0" aria-label="tangiblee cta" aria-hidden="false">Try-On</div>
                            </div>
                            <div className='drop-hint'>
                                <div href="#" className='inline-block rounded font-medium text-center py-3 px-6 bg-primary text-contrast w-auto DropAHint-button flex flex-col items-center justify-center gap-1 p-0 ml-2 mt-1'>
                                    <svg className="block w-8 h-auto" aria-hidden="true" focusable="false" viewBox="0 0 53 40"><svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.9778 1.02103H3.02218C1.90536 1.02103 1 1.92639 1 3.04321V17.9568C1 19.0736 1.90536 19.979 3.02218 19.979H24.9778C26.0946 19.979 27 19.0736 27 17.9568V3.04321C27 1.92639 26.0946 1.02103 24.9778 1.02103Z" stroke="black" stroke-linejoin="round"></path><path d="M20.0291 8.04699L26.2125 1.81387" stroke="black" stroke-linejoin="round"></path><path d="M1.78687 1.81387L7.97045 8.04716" stroke="black" stroke-linejoin="round"></path><path d="M6.51971 9.45243L10.1554 5.93039H17.8442L21.4799 9.45243L13.9962 15.8809L6.51971 9.45243Z" stroke="black" stroke-miterlimit="10"></path><path d="M10.5456 9.45032L13.0569 12.6644L9.44366 9.55854L11.5477 7.52084L10.5456 9.45032Z" fill="black">
                                        </path>
                                        <path d="M13.9963 15.7924L17.3264 9.48366L14.773 5.94107" stroke="black" stroke-miterlimit="10">
                                        </path>
                                    </svg>
                                    </svg>
                                    <span className="text-1.5xs leading-tight whitespace-nowrap text-black">Drop a Hint</span>
                                </div>
                            </div>
                        </div>
                        <div className='cpst-description-container md:mb-8 hidden md:block'>
                            <p className='cpst-description text-customGray-500'>{product.description}</p>
                        </div>
                        <DiamondSelector handleAddRingClick={handleAddRingClick} />

                        <div className='production-button mt-8'>
                            <div className='w-full block bg-black py-4 px-8 leading-tight rounded-full text-sm font-semibold capitalize text-white md:leading-none md:py-[13px] relative overflow-hidden'>
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

                                    <button onClick={() => handleAddRingClick(product)} className="rounded-full text-sm font-semibold leading-tight text-white text-center  flex justify-center items-center border-2 border-black bg-black" aria-hidden="false">
                                        {isLoading ? (
                                            <span className="loaders">Loading...</span> // Add a loader component or animation here
                                        ) : (
                                            <span>{getTabsProduct?.tabs?.diamond ? "Complete your ring" : "Add Diamond"}</span>
                                        )}
                                    </button>
                                    <svg className="w-6 h-6 p-1" aria-hidden="true" focusable="false">
                                        <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" stroke-width="2.5"></path>
                                        </svg>
                                    </svg>
                                </div>
                            </div>
                            <button onClick={() => handleOpenDrawer()} className='w-full block bg-white py-2 px-8 text-center rounded-full leading-none text-black border-2 border-black mt-2'>
                                {isLoading ? (
                                    <span className="loaders">Loading...</span> // Add a loader component or animation here
                                )
                                    :
                                    (
                                        <>
                                            <div className="text-sm leading-tight font-semibold">Buy Setting Only*</div>
                                            <div className="text-1.5xs leading-tight">*center stone not included</div>
                                        </>
                                    )
                                }
                            </button>
                            <h5 className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of
                                <span>$187.50</span>
                                <button type="button" className="underline cursor-pointer">Learn more</button>
                            </h5>
                        </div>
                        <div className="hidden lg:block mt-6 text-center">
                            <button type="button" className="WishlistButton  stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
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
                                    <p className="text-base leading-tight" tabIndex="-1">Add to wish list</p>
                                </div>
                            </button>
                        </div>
                        <BadgeComponent />
                        <EngagementProductDetails product={product} />
                        <AccordianforDetail ring={"Ring"}  ringData={product} />
                        <VirtualAppointment />
                        <LeftSideModal setselectedProductModel={setselectedProductModel} selectedProductModel={selectedProductModel} />
                        <CheckoutDrawer setIsOpen={setIsOpen} isOpen={isOpen} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagementRingDetailData