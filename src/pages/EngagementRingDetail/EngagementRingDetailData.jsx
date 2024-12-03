import React, { useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useSelector } from 'react-redux';
import BadgeComponent from '../../Component/Common/BadgeComponent';
import AccordianforDetail from '../../Component/Common/AccordianforDetail';
import VirtualAppointment from '../../Component/Common/VirtualAppointment';
import { Link } from "react-router-dom"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const EngagementRingDetailData = () => {
    const { product, loading, error } = useSelector((state) => state.singleProduct);
    const [selectedVariant] = useState(0);
    const variants = product?.variants?.edges;
    const images = product?.images?.edges.map((edge) => edge.node);


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


    if (error) return <p>Error: {error}</p>;

    if (!loading)
        return (
            <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
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
                        <div className='made-in-heaven-sec EngagementCompleteYourLook lg:pt-8 lg:pb-0 grid gap-2.5 grid-cols-1 py-6 bg-white mx-auto w-full relative md:gap-4 xl:gap-8'>
                            <h2 className='CustomProduct__section-title'>Match Made in Heaven</h2>
                            <div className='made-in-heaven-img-box-main grid grid-cols-3 w-full items-center gap-3'>
                                <div className='made-in-heaven-img-box hidden md:block rounded-lg overflow-hidden border border-borders w-full relative'>
                                    <img src="/lexie-side-img1.webp" />
                                </div>
                                <div className='made-in-heaven-img-box hidden md:block rounded-lg overflow-hidden border border-borders w-full relative'>
                                    <img src="/lexie-side-img1.webp" />
                                </div>
                                <div className='made-in-heaven-img-box hidden md:block rounded-lg overflow-hidden border border-borders w-full relative'>
                                    <img src="/lexie-side-img1.webp" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='customer-product-side-text-sec'>
                        <div className='the-lexie-text-main flex justify-between gap-4 mb-4 md:mb-6 md:gap-1'>
                            <div className='the-lexie-detail flex-1'>
                                <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>{product?.title}</h2>
                                <h3 className='tangiblee-price text-lg mb-1 leading-none text-black font-semibold md:text-1.5xl'>{formattedPrice}</h3>
                                <p className='text-customGray-300 mb-2 text-1.5sm leading-none'>With stone:<span>{formattedCompareAtPrice}</span></p>
                                <a href="#" className='ExtrasButton inline-flex items-center gap-1'>
                                    Extras
                                    <span className="ExtrasButton-circle rounded-full bg-white flex items-center justify-center"><svg className="svg-icon" viewBox="0 0 5 5"><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.125" width="0.75" height="5" fill="currentColor"></rect><rect y="2.875" width="0.75" height="5" transform="rotate(-90 0 2.875)" fill="currentColor"></rect></svg></svg></span>
                                </a>
                            </div>
                            <div className="tangiblee-wrapper pdp">
                                <div className="tangiblee-cta font-medium" data-click-and-touch-bound="true" role="button" tabindex="0" aria-label="tangiblee cta" aria-hidden="false">Try-On</div>
                            </div>
                            <div className='drop-hint'>
                                <a href="#" className='inline-block rounded font-medium text-center py-3 px-6 bg-primary text-contrast w-auto DropAHint-button flex flex-col items-center justify-center gap-1 p-0 ml-2 mt-1'>
                                    <svg className="block w-8 h-auto" aria-hidden="true" focusable="false" viewBox="0 0 53 40"><svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9778 1.02103H3.02218C1.90536 1.02103 1 1.92639 1 3.04321V17.9568C1 19.0736 1.90536 19.979 3.02218 19.979H24.9778C26.0946 19.979 27 19.0736 27 17.9568V3.04321C27 1.92639 26.0946 1.02103 24.9778 1.02103Z" stroke="black" stroke-linejoin="round"></path><path d="M20.0291 8.04699L26.2125 1.81387" stroke="black" stroke-linejoin="round"></path><path d="M1.78687 1.81387L7.97045 8.04716" stroke="black" stroke-linejoin="round"></path><path d="M6.51971 9.45243L10.1554 5.93039H17.8442L21.4799 9.45243L13.9962 15.8809L6.51971 9.45243Z" stroke="black" stroke-miterlimit="10"></path><path d="M10.5456 9.45032L13.0569 12.6644L9.44366 9.55854L11.5477 7.52084L10.5456 9.45032Z" fill="black"></path><path d="M13.9963 15.7924L17.3264 9.48366L14.773 5.94107" stroke="black" stroke-miterlimit="10"></path></svg></svg>
                                    <span className="text-1.5xs leading-tight whitespace-nowrap text-black">Drop a Hint</span>
                                </a>
                            </div>
                        </div>
                        <div className='cpst-description-container md:mb-8 hidden md:block'>
                            <p className='cpst-description text-customGray-500'>{product.description}</p>
                        </div>
                        <div className='production-option-main'>
                            <div className='production-option-heading-img'>
                                <h3 className='py-1 px-2 cmsi-item-options-header-title text-customGray-500 md:text-black md:font-bold md:p-0 md:mb-1.5'>Center Stone Shape: <span className='text-customGray-500 font-normal ml-1'>Round</span></h3>
                                <div className='production-item-option -mx-1 flex overflow-auto ccfi-round-buttons-wrapper lg:-mx-1 lg:overflow-hidden lg:flex-wrap gap-2'>
                                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative'>
                                        <div className="hidden md:block w-full pb-square"></div>
                                        <a className="shrink-0 basis-22 text-center w-22 h-22 px-2 pt-2 pb-2.5 rounded-lg transition-colors relative block md:rounded-lg cmsi-item-option-button group md:pb-0 md:absolute md:top-0 md:left-0 md:h-full md:w-full md:min-h-0 md:p-0 bg-customGray-150 md:border md:bg-white md:border-customGray-350 md:hover:bg-customGray-150 cursor-pointer" href="/products/the-lexie-setting-oval-14k-white-gold-solitaire" aria-hidden="false">
                                            <div className="mb-1 relative w-12 h-12 mx-auto cmsi-item-option-icon-container shape p-0.5 md:mb-0">
                                                <svg className="w-full h-full cmsi-item-option-icon" aria-hidden="true" focusable="false" data-test="Oval">
                                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5923 15.1672L23.9519 20.5252L20 14.0347L22.5923 15.1672H22.5923ZM30.5 20C30.5 27.732 25.799 34 20 34C14.201 34 9.5 27.732 9.5 20C9.5 12.268 14.201 6 20 6C25.799 6 30.5 12.268 30.5 20ZM23.9814 25.7606L25.6885 19.9999L23.9814 14.2396L20 11.9335L16.0186 14.2396L14.3115 19.9999L16.0186 25.7606L20 28.0668L23.9814 25.7606ZM15.2859 14.0709L13.0123 11.2233C11.5161 13.4522 10.5818 16.389 10.5139 19.6249H13.6414L15.2859 14.0709V14.0709ZM10.5139 20.3749C10.5818 23.6108 11.5161 26.5476 13.0122 28.7766L15.2859 25.9293L13.6414 20.3749H10.5139ZM24.7141 25.9293L26.9878 28.7766C28.4839 26.5476 29.4182 23.6108 29.4861 20.3749H26.3587L24.7141 25.9293ZM29.4861 19.6249C29.4182 16.3892 28.484 13.4526 26.988 11.2238L24.7141 14.0709L26.3586 19.6249H29.4861L29.4861 19.6249ZM24.0477 8.25654L20.6271 11.4296L24.2075 13.5038L26.5353 10.5891C25.8059 9.64027 24.9673 8.85267 24.0477 8.25654ZM20 7.00001C18.8118 7.00001 17.6783 7.3133 16.6289 7.86103L20 10.9882L23.3713 7.86122C22.3219 7.31337 21.1885 7.00001 20 7.00001ZM13.4651 10.5887L15.7926 13.5038L19.3731 11.4296L15.9526 8.25635C15.033 8.85236 14.1943 9.63996 13.4651 10.5887H13.4651ZM15.8887 31.7015L19.3665 28.5665L15.7926 26.4964L13.465 29.4111C14.1772 30.3378 14.9941 31.1104 15.8887 31.7015V31.7015ZM20 33C21.1884 33 22.3218 32.6867 23.3713 32.1389L19.9961 29.0082L16.5608 32.1047C17.6289 32.6751 18.7861 33 20 33H20ZM26.535 29.4111L24.2074 26.4964L20.6271 28.5702L24.0476 31.7435C24.9672 31.1475 25.8057 30.3599 26.535 29.4111Z" fill="black"></path>
                                                    </svg>
                                                </svg>
                                            </div>
                                            <div className="cmsi-item-option-title font-proximaNovaCondensed mx-auto text-customGray-500 md:text-black">
                                                <div>Oval</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative'>
                                        <div className="hidden md:block w-full pb-square"></div>
                                        <a className="shrink-0 basis-22 text-center w-22 h-22 px-2 pt-2 pb-2.5 rounded-lg transition-colors relative block md:rounded-lg cmsi-item-option-button group md:pb-0 md:absolute md:top-0 md:left-0 md:h-full md:w-full md:min-h-0 md:p-0 bg-customGray-150 md:border md:bg-white md:border-customGray-350 md:hover:bg-customGray-150 cursor-pointer" href="/products/the-lexie-setting-oval-14k-white-gold-solitaire" aria-hidden="false">
                                            <div className="mb-1 relative w-12 h-12 mx-auto cmsi-item-option-icon-container shape p-0.5 md:mb-0">
                                                <svg className="w-full h-full cmsi-item-option-icon" aria-hidden="true" focusable="false" data-test="Oval">
                                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5923 15.1672L23.9519 20.5252L20 14.0347L22.5923 15.1672H22.5923ZM30.5 20C30.5 27.732 25.799 34 20 34C14.201 34 9.5 27.732 9.5 20C9.5 12.268 14.201 6 20 6C25.799 6 30.5 12.268 30.5 20ZM23.9814 25.7606L25.6885 19.9999L23.9814 14.2396L20 11.9335L16.0186 14.2396L14.3115 19.9999L16.0186 25.7606L20 28.0668L23.9814 25.7606ZM15.2859 14.0709L13.0123 11.2233C11.5161 13.4522 10.5818 16.389 10.5139 19.6249H13.6414L15.2859 14.0709V14.0709ZM10.5139 20.3749C10.5818 23.6108 11.5161 26.5476 13.0122 28.7766L15.2859 25.9293L13.6414 20.3749H10.5139ZM24.7141 25.9293L26.9878 28.7766C28.4839 26.5476 29.4182 23.6108 29.4861 20.3749H26.3587L24.7141 25.9293ZM29.4861 19.6249C29.4182 16.3892 28.484 13.4526 26.988 11.2238L24.7141 14.0709L26.3586 19.6249H29.4861L29.4861 19.6249ZM24.0477 8.25654L20.6271 11.4296L24.2075 13.5038L26.5353 10.5891C25.8059 9.64027 24.9673 8.85267 24.0477 8.25654ZM20 7.00001C18.8118 7.00001 17.6783 7.3133 16.6289 7.86103L20 10.9882L23.3713 7.86122C22.3219 7.31337 21.1885 7.00001 20 7.00001ZM13.4651 10.5887L15.7926 13.5038L19.3731 11.4296L15.9526 8.25635C15.033 8.85236 14.1943 9.63996 13.4651 10.5887H13.4651ZM15.8887 31.7015L19.3665 28.5665L15.7926 26.4964L13.465 29.4111C14.1772 30.3378 14.9941 31.1104 15.8887 31.7015V31.7015ZM20 33C21.1884 33 22.3218 32.6867 23.3713 32.1389L19.9961 29.0082L16.5608 32.1047C17.6289 32.6751 18.7861 33 20 33H20ZM26.535 29.4111L24.2074 26.4964L20.6271 28.5702L24.0476 31.7435C24.9672 31.1475 25.8057 30.3599 26.535 29.4111Z" fill="black"></path>
                                                    </svg>
                                                </svg>
                                            </div>
                                            <div className="cmsi-item-option-title font-proximaNovaCondensed mx-auto text-customGray-500 md:text-black">
                                                <div>Oval</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative'>
                                        <div className="hidden md:block w-full pb-square"></div>
                                        <a className="shrink-0 basis-22 text-center w-22 h-22 px-2 pt-2 pb-2.5 rounded-lg transition-colors relative block md:rounded-lg cmsi-item-option-button group md:pb-0 md:absolute md:top-0 md:left-0 md:h-full md:w-full md:min-h-0 md:p-0 bg-customGray-150 md:border md:bg-white md:border-customGray-350 md:hover:bg-customGray-150 cursor-pointer" href="/products/the-lexie-setting-oval-14k-white-gold-solitaire" aria-hidden="false">
                                            <div className="mb-1 relative w-12 h-12 mx-auto cmsi-item-option-icon-container shape p-0.5 md:mb-0">
                                                <svg className="w-full h-full cmsi-item-option-icon" aria-hidden="true" focusable="false" data-test="Oval">
                                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5923 15.1672L23.9519 20.5252L20 14.0347L22.5923 15.1672H22.5923ZM30.5 20C30.5 27.732 25.799 34 20 34C14.201 34 9.5 27.732 9.5 20C9.5 12.268 14.201 6 20 6C25.799 6 30.5 12.268 30.5 20ZM23.9814 25.7606L25.6885 19.9999L23.9814 14.2396L20 11.9335L16.0186 14.2396L14.3115 19.9999L16.0186 25.7606L20 28.0668L23.9814 25.7606ZM15.2859 14.0709L13.0123 11.2233C11.5161 13.4522 10.5818 16.389 10.5139 19.6249H13.6414L15.2859 14.0709V14.0709ZM10.5139 20.3749C10.5818 23.6108 11.5161 26.5476 13.0122 28.7766L15.2859 25.9293L13.6414 20.3749H10.5139ZM24.7141 25.9293L26.9878 28.7766C28.4839 26.5476 29.4182 23.6108 29.4861 20.3749H26.3587L24.7141 25.9293ZM29.4861 19.6249C29.4182 16.3892 28.484 13.4526 26.988 11.2238L24.7141 14.0709L26.3586 19.6249H29.4861L29.4861 19.6249ZM24.0477 8.25654L20.6271 11.4296L24.2075 13.5038L26.5353 10.5891C25.8059 9.64027 24.9673 8.85267 24.0477 8.25654ZM20 7.00001C18.8118 7.00001 17.6783 7.3133 16.6289 7.86103L20 10.9882L23.3713 7.86122C22.3219 7.31337 21.1885 7.00001 20 7.00001ZM13.4651 10.5887L15.7926 13.5038L19.3731 11.4296L15.9526 8.25635C15.033 8.85236 14.1943 9.63996 13.4651 10.5887H13.4651ZM15.8887 31.7015L19.3665 28.5665L15.7926 26.4964L13.465 29.4111C14.1772 30.3378 14.9941 31.1104 15.8887 31.7015V31.7015ZM20 33C21.1884 33 22.3218 32.6867 23.3713 32.1389L19.9961 29.0082L16.5608 32.1047C17.6289 32.6751 18.7861 33 20 33H20ZM26.535 29.4111L24.2074 26.4964L20.6271 28.5702L24.0476 31.7435C24.9672 31.1475 25.8057 30.3599 26.535 29.4111Z" fill="black"></path>
                                                    </svg>
                                                </svg>
                                            </div>
                                            <div className="cmsi-item-option-title font-proximaNovaCondensed mx-auto text-customGray-500 md:text-black">
                                                <div>Oval</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative'>
                                        <div className="hidden md:block w-full pb-square"></div>
                                        <a className="shrink-0 basis-22 text-center w-22 h-22 px-2 pt-2 pb-2.5 rounded-lg transition-colors relative block md:rounded-lg cmsi-item-option-button group md:pb-0 md:absolute md:top-0 md:left-0 md:h-full md:w-full md:min-h-0 md:p-0 bg-customGray-150 md:border md:bg-white md:border-customGray-350 md:hover:bg-customGray-150 cursor-pointer" href="/products/the-lexie-setting-oval-14k-white-gold-solitaire" aria-hidden="false">
                                            <div className="mb-1 relative w-12 h-12 mx-auto cmsi-item-option-icon-container shape p-0.5 md:mb-0">
                                                <svg className="w-full h-full cmsi-item-option-icon" aria-hidden="true" focusable="false" data-test="Oval">
                                                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.5923 15.1672L23.9519 20.5252L20 14.0347L22.5923 15.1672H22.5923ZM30.5 20C30.5 27.732 25.799 34 20 34C14.201 34 9.5 27.732 9.5 20C9.5 12.268 14.201 6 20 6C25.799 6 30.5 12.268 30.5 20ZM23.9814 25.7606L25.6885 19.9999L23.9814 14.2396L20 11.9335L16.0186 14.2396L14.3115 19.9999L16.0186 25.7606L20 28.0668L23.9814 25.7606ZM15.2859 14.0709L13.0123 11.2233C11.5161 13.4522 10.5818 16.389 10.5139 19.6249H13.6414L15.2859 14.0709V14.0709ZM10.5139 20.3749C10.5818 23.6108 11.5161 26.5476 13.0122 28.7766L15.2859 25.9293L13.6414 20.3749H10.5139ZM24.7141 25.9293L26.9878 28.7766C28.4839 26.5476 29.4182 23.6108 29.4861 20.3749H26.3587L24.7141 25.9293ZM29.4861 19.6249C29.4182 16.3892 28.484 13.4526 26.988 11.2238L24.7141 14.0709L26.3586 19.6249H29.4861L29.4861 19.6249ZM24.0477 8.25654L20.6271 11.4296L24.2075 13.5038L26.5353 10.5891C25.8059 9.64027 24.9673 8.85267 24.0477 8.25654ZM20 7.00001C18.8118 7.00001 17.6783 7.3133 16.6289 7.86103L20 10.9882L23.3713 7.86122C22.3219 7.31337 21.1885 7.00001 20 7.00001ZM13.4651 10.5887L15.7926 13.5038L19.3731 11.4296L15.9526 8.25635C15.033 8.85236 14.1943 9.63996 13.4651 10.5887H13.4651ZM15.8887 31.7015L19.3665 28.5665L15.7926 26.4964L13.465 29.4111C14.1772 30.3378 14.9941 31.1104 15.8887 31.7015V31.7015ZM20 33C21.1884 33 22.3218 32.6867 23.3713 32.1389L19.9961 29.0082L16.5608 32.1047C17.6289 32.6751 18.7861 33 20 33H20ZM26.535 29.4111L24.2074 26.4964L20.6271 28.5702L24.0476 31.7435C24.9672 31.1475 25.8057 30.3599 26.535 29.4111Z" fill="black"></path>
                                                    </svg>
                                                </svg>
                                            </div>
                                            <div className="cmsi-item-option-title font-proximaNovaCondensed mx-auto text-customGray-500 md:text-black">
                                                <div>Oval</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative'>
                                        <div className="hidden md:block w-full pb-square"></div>
                                        <button type="button" className="group flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer cmsi-item-option-button md:pb-0 border border-customGray-350 transition-all duration-300 hover:bg-customGray-150" aria-label="left"><div className="ToggleMoreOptions flex items-center justify-center rounded-full w-8 h-8 bg-customGray-150 p-2.5 transition-all duration-300 group-hover:bg-white"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-1.60834 6H13.6083" stroke="#231F20" stroke-miterlimit="10"></path><path d="M6 13.6083V-1.60834" stroke="#231F20" stroke-miterlimit="10"></path></svg></div></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='production-button mt-8'>
                            <Link to={"/diamond-list"} className='w-full block bg-black py-4 px-8 leading-tight rounded-full text-sm font-semibold capitalize text-white md:leading-none md:py-[13px] relative overflow-hidden'>
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
                                    Add Center Stone
                                    <svg className="w-6 h-6 p-1" aria-hidden="true" focusable="false">
                                        <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" stroke-width="2.5"></path>
                                        </svg>
                                    </svg>
                                </div>
                            </Link>
                            <a href="#" className='w-full block bg-white py-2 px-8 text-center rounded-full leading-none text-black border-2 border-black mt-2'>
                                <div className="text-sm leading-tight font-semibold">Buy Setting Only*</div>
                                <div className="text-1.5xs leading-tight">*center stone not included</div>
                            </a>
                            <h5 className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$187.50</span> <button type="button" className="underline cursor-pointer">Learn more</button></h5>
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
                                <svg className="w-8 h-8 p-1.5 rounded-full bg-white overflow-visible" aria-hidden="true" focusable="false">
                                    <svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.1578 4.461L18.3882 10.0077L24.6247 4.461" stroke="currentColor" stroke-miterlimit="10"></path>
                                        <path d="M23.7463 9.99799C26.107 11.2008 27.9939 13.1634 29.1032 15.5695C30.2124 17.9756 30.4792 20.685 29.8607 23.2613C29.2422 25.8376 27.7744 28.1306 25.6937 29.7708C23.6131 31.4111 21.0408 32.3031 18.3913 32.3031C15.7418 32.3031 13.1695 31.4111 11.0889 29.7708C9.0082 28.1305 7.54036 25.8375 6.92185 23.2613C6.30335 20.685 6.57021 17.9756 7.67943 15.5695C8.78866 13.1634 10.6756 11.2008 13.0363 9.99799" stroke="currentColor" stroke-linecap="round"></path>
                                    </svg>
                                </svg>
                                Know your setting
                            </h3>
                            <div className='cpcst-details-wrapper grid grid-cols-2 gap-2 items-stretch md:grid-cols-2'>
                                <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
                                    <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                                        <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5H3C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5H13C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5Z" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.71289 3.60535L8.16648 5.06315L10.6201 3.60535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 4.85535V1.10535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M10.6201 12.3946L8.16648 10.9368L5.71289 12.3946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 11.1446V14.8946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path></svg></svg>
                                        <p className="cpcst-detail-title" tabindex="-1">Width</p>
                                    </div>
                                    <p className='StoneDetailBlock__content-value  flex-1 mb-2 lg:mb-3'>1.8mm</p>
                                    <span className='StoneDetailBlock__desc'>Measured at the base of the ring</span>
                                </div>
                                <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
                                    <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                                        <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 6.5H3C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5H13C13.8284 9.5 14.5 8.82843 14.5 8C14.5 7.17157 13.8284 6.5 13 6.5Z" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10"></path><path d="M5.71289 3.60535L8.16648 5.06315L10.6201 3.60535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 4.85535V1.10535" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M10.6201 12.3946L8.16648 10.9368L5.71289 12.3946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M8.1665 11.1446V14.8946" stroke="#CA0000" stroke-width="0.75" stroke-miterlimit="10" stroke-linecap="round"></path></svg></svg>
                                        <p className="cpcst-detail-title" tabindex="-1">PROFILE</p>
                                    </div>
                                    <p className='StoneDetailBlock__content-value   mb-2'>Medium</p>
                                    <div className='StoneDetailBlock__content-image-container mb-2 relative flex items-center gap-1'>
                                        <svg className="StoneDetailBlock__content-image w-auto h-7.5" aria-hidden="true" focusable="false" viewBox="0 0 44 26"><svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.0918 13.4185H37.5088C35.449 13.4185 32.6711 13.6237 30.1885 14.461C30.4879 13.8228 30.7239 13.1499 30.8757 12.4443H41.0918C42.1943 12.4443 43.0918 11.5474 43.0918 10.4443C43.0918 9.34131 42.1943 8.44434 41.0918 8.44434H30.8757C29.9543 4.16388 26.1437 0.944336 21.5918 0.944336C17.0399 0.944336 13.2292 4.16388 12.3079 8.44434H2.0918C0.989258 8.44434 0.0917975 9.34131 0.0917975 10.4443C0.0917975 11.5474 0.989258 12.4443 2.0918 12.4443H12.3079C12.46 13.1511 12.6965 13.825 12.9966 14.4641C10.2085 13.5418 7.05835 13.4185 5.6748 13.4185H2.08594C0.983158 13.4185 0.0859375 14.3156 0.0859375 15.4185C0.0859375 16.5212 0.983158 17.4185 2.08594 17.4185H5.67481C6.74427 17.4185 10.4186 17.5089 12.7955 18.673C14.684 19.5978 18.4863 22.8961 20.2332 24.511C20.6024 24.8539 21.0854 25.0435 21.5918 25.0435C22.0981 25.0435 22.5812 24.8539 22.9519 24.5097C24.6973 22.8961 28.4996 19.5978 30.3881 18.673C32.5061 17.6361 35.4294 17.4185 37.5088 17.4185H41.0918C42.1946 17.4185 43.0918 16.5212 43.0918 15.4185C43.0918 14.3156 42.1946 13.4185 41.0918 13.4185L41.0918 13.4185ZM13.0918 10.4443C13.0918 8.98774 13.4609 7.61609 14.1094 6.41651L15.3184 7.27534V13.6397L13.9707 14.1846C13.4134 13.0541 13.0918 11.7875 13.0918 10.4443L13.0918 10.4443ZM14.3345 14.8465L15.6646 14.3088L21.2168 17.5145V18.9254C18.3003 18.7972 15.766 17.1973 14.3345 14.8465H14.3345ZM21.5918 4.10938L27.1152 7.29834V13.6763L21.5918 16.8647L16.0684 13.6763V7.29834L21.5918 4.10938ZM21.5918 19.9443C21.7601 19.9443 21.9243 19.9277 22.0906 19.9191C21.9177 20.0684 21.7454 20.2176 21.592 20.3527C21.4349 20.2141 21.2656 20.0671 21.095 19.9192C21.2605 19.9278 21.4241 19.9443 21.5918 19.9443ZM21.9668 18.9254V17.5145L27.4773 14.3329L28.6808 15.1232C27.223 17.3244 24.7688 18.8022 21.9668 18.9253V18.9254ZM31.0918 9.44434H41.0918C41.6436 9.44434 42.0918 9.89307 42.0918 10.4443C42.0918 10.9956 41.6436 11.4443 41.0918 11.4443H31.0918V9.44434ZM29.0698 14.4811L27.8652 13.6901V7.27533L29.0742 6.4165C29.7227 7.61608 30.0918 8.98773 30.0918 10.4443C30.0918 11.9045 29.7212 13.2795 29.0698 14.4811V14.4811ZM28.6855 5.77325L27.4695 6.63714L21.9668 3.45971V1.96332C24.7721 2.08661 27.2284 3.56787 28.6855 5.77326V5.77325ZM21.2168 1.96331V3.45971L15.7141 6.63714L14.498 5.77325C15.9552 3.56787 18.4115 2.0866 21.2168 1.96331ZM12.0918 11.4443H2.0918C1.54004 11.4443 1.0918 10.9956 1.0918 10.4443C1.0918 9.89307 1.54004 9.44434 2.0918 9.44434H12.0918V11.4443ZM41.0918 16.4185H37.5088C35.3232 16.4185 32.2383 16.6538 29.9482 17.7749C27.4268 19.0098 22.3232 23.729 22.2715 23.7769C22.0801 23.9546 21.8359 24.0435 21.5918 24.0435C21.3476 24.0435 21.1035 23.9546 20.9121 23.7769C20.8603 23.729 15.7568 19.0098 13.2353 17.7749C10.665 16.5161 6.79882 16.4185 5.67479 16.4185H2.08594C1.53321 16.4185 1.08594 15.9707 1.08594 15.4185C1.08594 14.8662 1.53321 14.4185 2.08594 14.4185H5.67481C7.19642 14.4185 10.9388 14.5709 13.7817 15.8394C15.0604 17.6845 16.9756 19.0489 19.2065 19.629C20.1719 20.4345 21.0332 21.1896 21.5918 21.6914C22.15 21.1898 23.0073 20.4354 23.9704 19.6307C26.2059 19.0511 28.1252 17.6843 29.405 15.835C31.988 14.6773 35.2109 14.4185 37.5088 14.4185H41.0918C41.6445 14.4185 42.0918 14.8662 42.0918 15.4185C42.0918 15.9707 41.6445 16.4185 41.0918 16.4185H41.0918ZM24.8435 8.969L21.8435 5.969L25.8435 7.969V12.8832L24.8435 8.969Z" fill="black"></path></svg></svg>
                                    </div>
                                    <span className='StoneDetailBlock__desc'>Only stacks with a <br /> chevron/curved band</span>
                                </div>
                                <div className='StoneDetailBlock StoneDetailBlock__fullwidth p-3 flex flex-col justify-between'>
                                    <div className='StoneDetailBlock__title-container flex items-center gap-1 mb-2'>
                                        <svg className="w-4 h-4" aria-hidden="true" focusable="false"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.52005 11.0862L0.930664 9.00729L1.6538 6.88812" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M2.73948 6.25928L1.65369 6.88816L4.5099 8.54243" stroke="#668BAD" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.24255 8.38739L4.52016 11.0862" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M13.9753 7.21783L15.0694 9.13377L8.10916 13.1651L4.51978 11.0862L5.62773 9.18988" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M5.2428 8.96701L8.09901 10.6213L13.9752 7.21785L12.5718 6.40503" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M8.09924 10.6213L8.10928 13.1651" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M11.4784 4.48907L12.5725 6.40501L6.70633 9.81426L3.11694 7.73534L3.84008 5.61618" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M6.69618 7.27048L11.4783 4.48911L8.62205 2.83484L3.83997 5.61622L6.69618 7.27048Z" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path><path d="M6.69641 7.27045L6.70645 9.81426" stroke="#668BAD" stroke-width="0.75" stroke-linejoin="round"></path></svg></svg>
                                        <p className="cpcst-detail-title" tabindex="-1">METAL</p>
                                    </div>
                                    <p className='StoneDetailBlock__content-value  flex-1 mb-2 lg:mb-3'>14k White Gold</p>
                                    <div className="SettingDetailBlock__graph-container mt-3 flex items-center gap-4 mb-2 lg:mb-3">
                                        <div className="SettingDetailBlock__graph">
                                            <svg preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 500 500">
                                                <g transform="translate(250, 250)">
                                                    <path d="M250,0A250,250,0,1,1,-214.716,-128.051L-137.418,-81.953A160,160,0,1,0,160,0Z" style={{ fill: 'rgb(240, 230, 140)' }}></path>
                                                    <path d="M250,0L160,0Z" style={{ fill: 'rgb(232, 232, 232)' }}></path>
                                                    <path d="M133.744,-211.217A250,250,0,0,1,224.109,-110.792L143.43,-70.907A160,160,0,0,0,85.596,-135.179Z" style={{ fill: 'rgb(186, 196, 200)' }}></path>
                                                    <path d="M224.109,-110.792A250,250,0,0,1,250,0L160,0A160,160,0,0,0,143.43,-70.907Z" style={{ fill: 'rgb(189, 186, 174)' }}></path>
                                                    <path d="M-214.716,-128.051A250,250,0,0,1,133.744,-211.217L85.596,-135.179A160,160,0,0,0,-137.418,-81.953Z" style={{ fill: 'rgb(184, 115, 51)' }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="SettingDetailBlock__graph-text-container grid grid-cols-2 gap-x-4 gap-y-2">
                                            <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                                                <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full gold"></div>
                                                58.5% Gold
                                            </div>
                                            <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                                                <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full copper"></div>
                                                25.4% Copper
                                            </div>
                                            <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                                                <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full zinc"></div>
                                                8.7% Zinc
                                            </div>
                                            <div className="SettingDetailBlock__graph-text flex items-center gap-2">
                                                <div className="SettingDetailBlock__graph-text-color w-4 h-4 rounded-full nickel"></div>
                                                7.3% Nickel
                                            </div>
                                        </div>
                                    </div>
                                    <span className='StoneDetailBlock__desc'>The secret sauce that makes this piece. <br /> *All white gold pieces are Rhodium plated</span>
                                </div>
                            </div>
                            <div className='add-extra-feature-sec StoneDetailBlock StoneDetailBlock__extras mt-2 p-3 flex items-center justify-between gap-2 text-customGray-500'>
                                <div className='extra-star-icon flex items-center gap-1'>
                                    <svg className="w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 14 14"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.90022 1.46712L8.09914 4.77441L8.21738 5.10059L8.56431 5.10399L12.2173 5.13974L9.31681 7.14024L9.00637 7.35436L9.12693 7.71169L10.226 10.969L7.17558 8.95637L6.90021 8.77468L6.62485 8.95637L3.57446 10.969L4.67351 7.71169L4.79407 7.35436L4.48363 7.14024L1.58315 5.13974L5.23613 5.10399L5.58306 5.10059L5.7013 4.77441L6.90022 1.46712Z" stroke="#D89571"></path></svg></svg>
                                    <p className="cpcst-detail-title" tabindex="-1">Extras</p>
                                </div>
                                <a href="#" className='ExtrasText text-black underline'>Add Extra Features</a>
                            </div>
                        </div>
                        <AccordianforDetail />
                        <VirtualAppointment />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagementRingDetailData