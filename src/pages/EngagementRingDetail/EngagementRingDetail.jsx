import React, { useEffect } from 'react'
import TabComponent from '../../Component/Common/TabComponent'
// import ringImg from '../../public/lexie-side-img1.webp'
import "../EngagementRing/ringStyle.css";
import "./productRingStyle.css";
import { useSelector ,useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { fetchSingleProducts } from '../../store/actions/singleProductAction';


const EngagementRingDetail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams(); // Get product ID from the URL

  const { product, loading, error } = useSelector((state) => state.singleProduct);

  const images = product?.images?.edges.map((edge) => edge.node);


  useEffect(() => {
    if (productId) {
      // Reconstruct the full GraphQL ID
      const graphQLId = `gid://shopify/Product/${productId}`;
      dispatch(fetchSingleProducts(graphQLId));
    }
  }, [dispatch, productId]);

  console.log("product",product);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                {images?.map((image) => (
                  <div key={image.id} style={{ border: '1px solid #ccc', padding: '5px' }}>
                    <img
                      src={image.src}
                      alt={image.altText || product.title}
                      width={image.width / 2}
                      height={image.height / 2}
                      style={{ maxWidth: '100%' }}
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
                  <h2 className='max-w-prose font-bold text-heading cpst-title whitespace-normal pb-1'>{product.title}</h2>
                  <h3 className='tangiblee-price text-lg mb-1 leading-none text-black font-semibold md:text-1.5xl'>$750</h3>
                  <p className='text-customGray-300 mb-2 text-1.5sm leading-none'>With stone:<span>$1,486</span></p>
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
              {/* <div className='production-option-main'>
                <div className='production-option-heading-img'>
                  <h3 className='py-1 px-2 cmsi-item-options-header-title text-customGray-500 md:text-black md:font-bold md:p-0 md:mb-1.5'>Center Stone Shape: <span className='text-customGray-500 font-normal ml-1'>Round</span></h3>
                  <div className='production-item-option -mx-1 flex overflow-auto ccfi-round-buttons-wrapper lg:-mx-1 lg:overflow-hidden lg:flex-wrap gap-2'>
                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative w-full'>
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
                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative w-full'>
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
                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative w-full'>
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
                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative w-full'>
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
                    <div className='production-item  cmsi-item-option md:px-1  inline-flex relative w-full'>
                      <div className="hidden md:block w-full pb-square"></div>
                      <button type="button" className="group flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-lg cursor-pointer cmsi-item-option-button md:pb-0 border border-customGray-350 transition-all duration-300 hover:bg-customGray-150" aria-label="left"><div className="ToggleMoreOptions flex items-center justify-center rounded-full w-8 h-8 bg-customGray-150 p-2.5 transition-all duration-300 group-hover:bg-white"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-1.60834 6H13.6083" stroke="#231F20" stroke-miterlimit="10"></path><path d="M6 13.6083V-1.60834" stroke="#231F20" stroke-miterlimit="10"></path></svg></div></button>
                    </div>
                  </div>
                </div>
              </div> */}
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
              <div className='product-badge-main  flex flex-wrap justify-center gap-y-2 my-6 md:my-8'>
                <a href='#' className='product-badge-item CustomProductBadge'>
                  <div className='CustomBadge__image h-8 mx-auto'>
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.8637 8.49689L4.02783 5.19775V7.32439L11.2859 11.1362L13.9252 14.4353L19.8637 8.49689Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M25.8025 26.9721H23.823L19.8641 19.714L16.5649 17.0747L22.5034 11.1362L25.8025 26.9721Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M12.6056 21.0337L13.9253 26.9721L11.9458 27.632L9.96631 23.673L12.6056 21.0337Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M9.96644 18.3944L4.02799 17.0747L3.36816 19.0542L7.32713 21.0337L9.96644 18.3944Z" stroke="currentColor" stroke-linejoin="round"></path><path d="M0.478516 15.1642L4.06584 11.7583" stroke="currentColor" stroke-miterlimit="10"></path><path d="M15.9048 24.3332L18.5441 21.6938" stroke="currentColor" stroke-miterlimit="10"></path><path d="M14.9946 31.0001L19.8636 26.3125" stroke="currentColor" stroke-miterlimit="10"></path><path d="M8.31726 20.0441C8.31726 20.0441 21.1839 7.17748 23.4933 4.86808C25.8027 2.55869 28.442 1.23903 29.1019 1.89886C29.7617 2.55869 28.442 5.198 26.1326 7.50739C23.1634 10.4766 16.0152 17.6247 10.9566 22.6834C9.06343 24.3184 7.32751 24.9928 6.66768 24.333C6.00785 23.6732 6.6823 21.9373 8.31725 20.0441L8.31726 20.0441Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M17.7124 5.10437L22.1171 1" stroke="currentColor" stroke-miterlimit="10"></path><path d="M23.6157 15.0037L26.9149 11.7046" stroke="currentColor" stroke-miterlimit="10"></path><path d="M6.41699 13.8444L9.89818 10.3628" stroke="currentColor" stroke-miterlimit="10"></path></svg>
                  </div>
                  <h5 className='CustomBadge__title mt-4 text-center'>Overnight <br /> Shipping</h5>
                </a>
                <a href='#' className='product-badge-item CustomProductBadge'>
                  <div className='CustomBadge__image h-8 mx-auto'>
                    <svg width="27" height="34" viewBox="0 0 27 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.14111 28.4867L11.0918 16.481" stroke="currentColor" stroke-miterlimit="10"></path><path d="M20.3799 29.7988L13.4292 17.1611" stroke="currentColor" stroke-miterlimit="10"></path><path d="M17.1868 13.3218L13.6253 14.6769L10.0639 13.3218L1.61377 28.4886L6.13355 27.9537L7.94724 32.2783L13.6253 22.0675L19.3035 32.2783L21.1171 27.9537L25.6369 28.4886L17.1868 13.3218Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M17.1098 1.31592H10.1292L4.48182 5.419L2.32471 12.0579L4.48182 18.6969L10.1292 22.7999H17.1098L22.7572 18.6969L24.9143 12.0579L22.7572 5.419L17.1098 1.31592Z" fill="white" stroke="currentColor" stroke-miterlimit="10"></path><path d="M13.625 20.1646C18.132 20.1646 21.7857 16.5109 21.7857 12.0039C21.7857 7.49691 18.132 3.84326 13.625 3.84326C9.118 3.84326 5.46436 7.49691 5.46436 12.0039C5.46436 16.5109 9.118 20.1646 13.625 20.1646Z" fill="white" stroke="currentColor" stroke-miterlimit="10"></path><path d="M18.0423 5.73926L7.30029 16.4813" stroke="currentColor" stroke-miterlimit="10"></path><path d="M15.5149 4.47559L6.03662 13.9538" stroke="currentColor" stroke-miterlimit="10"></path></svg>
                  </div>
                  <h5 className='CustomBadge__title mt-4 text-center'>Lifetime<br />Warranty</h5>
                </a>
                <a href='#' className='product-badge-item CustomProductBadge'>
                  <div className='CustomBadge__image h-8 mx-auto'>
                    <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.5523 37.1789C26.3201 35.5205 25.5976 33.4994 25.4236 31.1465L25.3711 30.4417H34.5811L34.6606 31.0068C34.9924 33.3735 35.8971 35.0919 39.0897 35.7159V26.4784C30.2692 25.1611 26.4936 21.9704 26.4936 15.8749C26.4936 10.2534 31.5288 6.12217 39.0897 5.46482V1.2644H44.2076V5.5199C51.6339 6.2567 55.8907 9.8036 56.532 15.8056L56.6095 16.5309H47.6769L47.5719 16.003C47.1625 13.9476 46.1405 12.8046 44.2076 12.2959V21.035C50.7164 21.9538 57.1791 23.9835 57.1791 31.3733C57.1791 36.1478 54.073 39.8184 48.9332 41.5086M44.2076 34.8766C46.1912 34.3166 47.3508 33.0122 47.3508 31.2836C47.3508 29.6434 46.8575 28.6836 44.2076 27.984V34.8766ZM39.0897 12.829C37.1958 13.2826 36.0893 14.4102 36.0893 15.9376C36.0893 17.401 36.3123 18.444 39.0897 19.1527V12.829Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.3033 60.6248L8.81714 43.1387L1.4897 50.4661L18.9759 67.9523L26.3033 60.6248Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M48.9632 41.5998L55.6131 38.6425L57.0742 36.4508C58.0269 35.0218 59.4287 33.9511 61.058 33.408C62.28 33.0007 63.6011 33.0007 64.8231 33.408L65.3142 33.5717C66.3607 33.9206 66.8264 35.1395 66.2791 36.0973L61.4751 44.5044L48.9632 56.4813H22.1599" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M8.71753 50.3665L11.6485 53.2974" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M11.6484 45.9699L17.5104 40.108L21.9068 37.177H30.6998L35.0962 40.108H45.9609C48.0542 40.108 49.7511 41.8049 49.7511 43.8982C49.7511 45.9915 48.0542 47.6884 45.9609 47.6884H32.5132" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>
                  </div>
                  <h5 className='CustomBadge__title mt-4 text-center'>30 Days  <br />Free Return</h5>
                </a>
                <a href='#' className='product-badge-item CustomProductBadge'>
                  <div className='CustomBadge__image h-8 mx-auto'>
                    <svg width="61" height="54" viewBox="0 0 61 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.43727 1.24023H8.8402C8.8402 3.20287 8.05972 5.08711 6.67193 6.47491C5.28414 7.86271 3.39989 8.64318 1.43726 8.64318V1.24023H1.43727Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M59.5629 1.24025V8.64318C57.6002 8.64318 55.716 7.86269 54.3282 6.47491C52.9404 5.08712 52.1599 3.20287 52.1599 1.24023H59.5628L59.5629 1.24025Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M1.43726 42.9391V35.5361C3.39989 35.5361 5.28413 36.3166 6.67193 37.7044C8.05973 39.0922 8.8402 40.9764 8.8402 42.9391H1.43726V42.9391Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M59.5628 42.9391H52.1599C52.1599 40.9764 52.9404 39.0922 54.3282 37.7044C55.716 36.3166 57.6002 35.5361 59.5629 35.5361V42.9391L59.5628 42.9391Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M19.9424 42.939H1.43726V1.24023H59.5628V42.939H41.0576" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M11.5459 15.1399H49.4539" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M16.6003 20.1941H44.3995" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M22.9185 10.0854H38.0816" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M39.5826 27.7759H21.4174L12.1477 36.4087L30.5 51.7843L48.8523 36.4087L39.5826 27.7759Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.5 51.7843L44.0369 31.9242L39.5826 27.7759L24.1992 35.1293" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path><path d="M12.1477 36.4087L21.4174 27.7759L30.5 51.7843L12.1477 36.4087Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"></path></svg>
                  </div>
                  <h5 className='CustomBadge__title mt-4 text-center'>Certificate  <br /> & Appraisal</h5>
                </a>
              </div>
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
            </div>
          </div>
        </div>
      </section>

      <section className='get-in-touch-sec product-common-sec flex items-center'>
        <div className='container mx-auto px-4'>
          <div className='product-common-text py-8 px-5'>
            <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6 text-black'>Get In Touch</h3>
            <p className='cfpb-fib-text'>We are here to help you find the one for you. Set a personal appointment with our experts.</p>
            <a href="#" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
              Book Now
              <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
            </a>
          </div>
        </div>
      </section>

      <section className='our-work-sec product-common-sec flex items-center mt-3'>
        <div className='container mx-auto px-4'>
          <div className='product-common-text py-8 px-5'>
            <h3 className='cfpb-fib-title uppercase mb-3 md:mb-6'>OUR WORK</h3>
            <p className='cfpb-fib-text'>We want your jewelry to be flawless and perfect in every detail. That’s why we take the time to hand-craft it individually.</p>
            <a href="#" className='cfpb-fib-link mt-7 flex justify-between items-center gap-3 md:justify-start md:mt-6'>
              Read More
              <svg className="w-8 h-3" viewBox="0 0 34 14"><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect><path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path></svg></svg>
            </a>
          </div>
        </div>
      </section>


      <section className='our-coupeles-sec py-16 px-5 md:py-24'>
        <div className='container mx-auto px-4'>
          <div className='our-coupeles-heading text-center uppercase mb-8 md:mb-12 xl:mb-20 md:flex md:justify-between md:gap-4'>
            <h2 className="cfpb-fib-title font-seasons font-bold text-white" tabindex="-1">OUR COUPLES</h2>
            <div className='hidden shrink-0 md:flex gap-5 inherit-title-color'>
              <button type="button" className="w-8 h-8 flex justify-center items-center text-current"><svg class="w-8 h-8" aria-hidden="true" focusable="false"><svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1212 4.08742L7.87879 14.3298L18.1212 24.5723" stroke="currentColor" stroke-width="2.5"></path></svg></svg></button>
              <button type="button" className="w-8 h-8 flex justify-center items-center text-current"><svg class="w-8 h-8" aria-hidden="true" focusable="false"><svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" stroke-width="2.5"></path></svg></svg></button>
            </div>
          </div>
          <div className='our-coupeles-box-main'>
            <a href='#' className='our-coupeles-boxes cpucb-slide relative rounded-xl overflow-hidden'>
              <div className='cpucb-image-container absolute-picture-container overflow-hidden'>
                <img className='cpucb-image absolute-image ' src="/our-coupel-slide-img1.webp" />
              </div>
              <div className='cpucb-text-container absolute bottom-0 px-6 py-5 w-full'>
                <h4 className="cpucb-slide-title uppercase" tabindex="-1">Sarah & Jalen Bailey</h4>
                <p className='cpucb-slide-text mt-2'>Jay and I met on a hinge, and within a day we had our first date at a coffee shop. One of our favorites...</p>
                <span className="cpucb-slide-link mt-4 flex justify-between items-center gap-3">
                  Read More
                  <svg className="w-8 h-3" viewBox="0 0 34 14">
                    <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect>
                      <path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path>
                    </svg>
                  </svg>
                </span>
              </div>
            </a>
            <a href='#' className='our-coupeles-boxes cpucb-slide relative rounded-xl overflow-hidden'>
              <div className='cpucb-image-container absolute-picture-container overflow-hidden'>
                <img className='cpucb-image absolute-image ' src="/our-coupel-slide-img1.webp" />
              </div>
              <div className='cpucb-text-container absolute bottom-0 px-6 py-5 w-full'>
                <h4 className="cpucb-slide-title uppercase" tabindex="-1">Sarah & Jalen Bailey</h4>
                <p className='cpucb-slide-text mt-2'>Jay and I met on a hinge, and within a day we had our first date at a coffee shop. One of our favorites...</p>
                <span className="cpucb-slide-link mt-4 flex justify-between items-center gap-3">
                  Read More
                  <svg className="w-8 h-3" viewBox="0 0 34 14">
                    <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect>
                      <path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path>
                    </svg>
                  </svg>
                </span>
              </div>
            </a>
            <a href='#' className='our-coupeles-boxes cpucb-slide relative rounded-xl overflow-hidden'>
              <div className='cpucb-image-container absolute-picture-container overflow-hidden'>
                <img className='cpucb-image absolute-image ' src="/our-coupel-slide-img1.webp" />
              </div>
              <div className='cpucb-text-container absolute bottom-0 px-6 py-5 w-full'>
                <h4 className="cpucb-slide-title uppercase" tabindex="-1">Sarah & Jalen Bailey</h4>
                <p className='cpucb-slide-text mt-2'>Jay and I met on a hinge, and within a day we had our first date at a coffee shop. One of our favorites...</p>
                <span className="cpucb-slide-link mt-4 flex justify-between items-center gap-3">
                  Read More
                  <svg className="w-8 h-3" viewBox="0 0 34 14">
                    <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect>
                      <path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" stroke-linecap="round"></path>
                    </svg>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>


      <section className='sai-container newsletter-sec'>
        <div className='container mx-auto px-4'>
          <div className='CustomSubscription__form sai-subscription-wrapper'>
            <form method="post" action="#" id="FooterNewsletter" accept-charset="UTF-8" className="sai-subscription-form">
              <input type="hidden" name="utf8" value="✓" /><label for="email-field" className="sai-subscription-title uppercase">Subscribe To Our Newsletter</label>
              <div className="email-input-wrap rounded-xl flex">
                <input className="sai-subscription-input reset-input" type="text" id="email-field" placeholder="ENTER YOUR EMAIL" />
                <button type="submit" className="sai-subscription-submit cursor-pointer relative overflow-hidden">
                  <div className="flex justify-center items-center font-semibold gap-1 leading-none transition-transform duration-500 text-ellipsis overflow-hidden ">SUBSCRIBE</div>
                </button>
              </div>
            </form>
          </div>
          <div className='sai-items-desktop-grid md:flex md:flex-wrap md:justify-center newsletter-benefit-main'>
            <div className='sai-item text-center newsletter-benefit'>
              <svg className='sai-item-icon-container sai-item-icon-wrapper' viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M11.754 50.2872C11.7352 50.2703 11.7158 50.2543 11.6956 50.2389C11.0941 49.7397 10.4927 49.2044 9.93929 48.651C9.58772 48.3032 9.02172 48.3032 8.67015 48.651C8.31828 49.0033 8.31828 49.5738 8.67015 49.9261C9.27164 50.5276 9.87312 51.087 10.5468 51.6283C10.9172 51.9617 11.4877 51.9316 11.821 51.5613C12.1543 51.1909 12.1243 50.6206 11.754 50.2872Z" fill="currentColor"></path>
                  <path d="M2.3085 23.5385C1.83814 23.3742 1.32357 23.6224 1.15921 24.0928C1.13485 24.1626 1.11906 24.2352 1.11245 24.3087C0.932002 25.1328 0.793661 25.9688 0.691408 26.8049C0.627049 27.2939 0.967189 27.7439 1.45529 27.8154H1.56958C2.02625 27.8157 2.41105 27.4748 2.46579 27.0214C2.56203 26.2395 2.69435 25.4515 2.86277 24.6877C3.02713 24.2173 2.77886 23.7027 2.3085 23.5385Z" fill="currentColor"></path>
                  <path d="M7.26673 45.5054C6.80359 44.8678 6.3645 44.2062 5.96151 43.5325C5.70678 43.1042 5.15311 42.9635 4.72485 43.2182C4.7241 43.2187 4.7232 43.2191 4.72245 43.2197C4.29419 43.4745 4.15344 44.0281 4.40817 44.4564C4.40862 44.4571 4.40907 44.458 4.40968 44.4588C4.84275 45.1806 5.3119 45.8903 5.81114 46.57C6.11895 46.9619 6.68615 47.0298 7.07802 46.722C7.45079 46.4291 7.53334 45.8975 7.26673 45.5054Z" fill="currentColor"></path>
                  <path d="M4.12001 39.8154C3.8313 39.0876 3.56665 38.3357 3.3441 37.5779C3.2053 37.0994 2.70472 36.8239 2.22624 36.9627C2.21781 36.9651 2.20954 36.9677 2.20127 36.9704C1.72775 37.115 1.45934 37.6144 1.59979 38.0891C1.84038 38.8951 2.11707 39.7011 2.42984 40.4951C2.6175 40.9618 3.14801 41.188 3.61476 41.0003C4.08152 40.8127 4.30768 40.2821 4.12001 39.8154Z" fill="currentColor"></path>
                  <path d="M4.66051 17.3525C4.21541 17.1283 3.67272 17.3074 3.44852 17.7525C3.06958 18.5044 2.72072 19.2803 2.41396 20.0682C2.23307 20.5299 2.45877 21.0511 2.91921 21.2351C3.3825 21.4186 3.90685 21.1918 4.0903 20.7285C4.0909 20.727 4.0915 20.7253 4.09211 20.7238C4.38082 19.99 4.69359 19.2622 5.0605 18.5645C5.2847 18.1194 5.10561 17.5769 4.66051 17.3525Z" fill="currentColor"></path>
                  <path d="M2.49785 33.5381C2.49769 33.5373 2.49769 33.5364 2.49754 33.5357C2.40131 32.7538 2.33514 31.9598 2.30507 31.1779C2.28687 30.6795 1.86809 30.2905 1.36976 30.3087C0.871429 30.3269 0.482418 30.7457 0.500613 31.244C0.500613 32.0861 0.596851 32.9342 0.705118 33.7703C0.76677 34.2075 1.13593 34.5358 1.57727 34.5462H1.71561C2.21003 34.4838 2.56025 34.0324 2.49785 33.5381Z" fill="currentColor"></path>
                  <path d="M26.4329 3.44037C26.3848 2.94204 25.9418 2.57724 25.4435 2.62536C24.6074 2.70956 23.7653 2.82986 22.9353 2.99226C22.4369 3.03873 22.0708 3.48037 22.1173 3.9787C22.1637 4.47703 22.6054 4.84318 23.1037 4.79672L23.0977 4.77266H23.2721C24.048 4.62229 24.836 4.50801 25.6179 4.42981C26.1162 4.38169 26.481 3.9387 26.4329 3.44037Z" fill="currentColor"></path>
                  <path d="M8.5795 11.8944C8.20417 11.5622 7.6305 11.5973 7.29833 11.9726C6.74496 12.6042 6.21566 13.2718 5.72244 13.9575C5.43012 14.361 5.52019 14.9252 5.92379 15.2175C6.07702 15.3284 6.26107 15.3884 6.45024 15.389V15.4011C6.7406 15.4021 7.01368 15.2633 7.18405 15.0282C7.64719 14.3906 8.14041 13.765 8.65769 13.1756C8.98986 12.8003 8.95482 12.2267 8.5795 11.8944Z" fill="currentColor"></path>
                  <path d="M32.3806 2.77558C31.5505 2.64927 30.7024 2.55905 29.8604 2.51093C29.362 2.48101 28.9339 2.8607 28.904 3.35903C28.8741 3.85736 29.2538 4.28546 29.7521 4.31539C30.5461 4.37554 31.334 4.45974 32.1099 4.58004H32.2483C32.7466 4.61658 33.1801 4.24231 33.2166 3.74398C33.2532 3.2458 32.8789 2.81213 32.3806 2.77558Z" fill="currentColor"></path>
                  <path d="M13.7019 7.59542C13.4196 7.21213 12.8882 7.11393 12.4876 7.37122C11.7959 7.84639 11.1162 8.36367 10.4666 8.89899C10.0829 9.21793 10.0304 9.78739 10.3493 10.1711C10.6683 10.5549 11.2377 10.6074 11.6215 10.2884C12.223 9.78317 12.8605 9.30199 13.5101 8.85689C13.9115 8.56156 13.9972 7.99676 13.7019 7.59542Z" fill="currentColor"></path>
                  <path d="M16.729 6.86584C16.726 6.86584 16.7231 6.86523 16.7201 6.86523C16.717 6.86523 16.7139 6.86584 16.7109 6.86584H16.729Z" fill="currentColor"></path>
                  <path d="M19.9087 4.75243C19.7768 4.272 19.2803 3.9893 18.7997 4.12132C18.7575 4.1329 18.7161 4.14764 18.6759 4.16523C17.888 4.45395 17.1001 4.76672 16.3422 5.14565C15.8903 5.35587 15.6945 5.89255 15.9048 6.34426C16.0521 6.6611 16.3694 6.8635 16.7183 6.8653C16.8485 6.86274 16.9768 6.83252 17.094 6.77568C17.8038 6.43885 18.5376 6.13209 19.2774 5.86142C19.7582 5.7294 20.0407 5.23287 19.9087 4.75243Z" fill="currentColor"></path>
                  <path d="M30.8183 56.9426C30.7868 56.4443 30.3573 56.066 29.859 56.0975C29.071 56.1577 28.2771 56.1757 27.4891 56.1517C26.9908 56.1384 26.5761 56.5315 26.5628 57.0298C26.5496 57.5282 26.9427 57.9429 27.441 57.9561H28.2049C28.8064 57.9561 29.4078 57.9561 29.9732 57.902C30.4716 57.8706 30.8499 57.441 30.8183 56.9426Z" fill="currentColor"></path>
                  <path d="M54.4347 36.0407C53.9514 35.9179 53.4598 36.2101 53.337 36.6934C53.1445 37.4572 52.9099 38.2151 52.6453 38.9549C52.4884 39.4196 52.7314 39.9245 53.1926 40.0917C53.6616 40.26 54.1783 40.0161 54.3466 39.5471C54.3469 39.5462 54.3472 39.5453 54.3475 39.5444C54.6302 38.7504 54.8768 37.9384 55.0873 37.1385C55.2103 36.6552 54.918 36.1637 54.4347 36.0407Z" fill="currentColor"></path>
                  <path d="M55.5862 25.7105C55.4479 24.8804 55.2734 24.0443 55.0629 23.2323C54.9189 22.7554 54.4153 22.4854 53.9383 22.6297C53.4861 22.7662 53.2159 23.2284 53.3186 23.6895C53.5171 24.4473 53.6795 25.2293 53.8118 26.0052C53.8896 26.4303 54.2578 26.7405 54.69 26.745H54.8404C55.3319 26.6652 55.6658 26.2022 55.5862 25.7105Z" fill="currentColor"></path>
                  <path d="M59.4207 15.355C59.3783 15.2628 59.3202 15.1787 59.2491 15.1065L57.6552 13.4464C57.4269 13.2185 57.0914 13.1352 56.783 13.2299L53.9079 14.1021L50.5396 10.5292L58.1003 6.31884C58.5409 6.11598 58.7335 5.59435 58.5305 5.15391C58.4881 5.06173 58.43 4.97767 58.3589 4.9055L56.2357 2.78225C56.0043 2.55985 55.6698 2.48136 55.3635 2.57775L45.7819 5.47691L42.5579 2.05445C41.7363 1.10441 40.3987 0.786975 39.2377 1.26651H39.1836C38.3083 1.6268 37.6131 2.32197 37.2528 3.19728C37.162 3.42584 37.0975 3.66388 37.0603 3.90703L36.6934 3.78072C36.2184 3.62794 35.7094 3.88914 35.5566 4.36416C35.4038 4.83918 35.665 5.34819 36.1401 5.50097C36.6032 5.65134 37.0663 5.81975 37.5295 5.99418C37.6689 6.21222 37.8323 6.41402 38.0167 6.59567L41.4151 9.81963L40.4407 13.0376C30.9104 6.23944 17.6737 8.45426 10.8756 17.9845C4.07742 27.5147 6.29224 40.7513 15.8225 47.5495C25.3527 54.3476 38.5895 52.1328 45.3876 42.6025C50.8088 35.0026 50.6196 24.7508 44.9217 17.3561L46.4615 14.5772L50.0344 17.9455L49.1742 20.7906C49.0706 21.1032 49.1521 21.4475 49.3848 21.6808C49.3848 21.6808 51.1471 23.4251 51.1892 23.4852C51.6059 23.7267 52.1396 23.5848 52.3812 23.1681C52.385 23.1616 52.3887 23.155 52.3922 23.1484L54.744 18.8357L58.9905 16.52C59.4311 16.317 59.6237 15.7954 59.4207 15.355ZM14.5106 16.5439C18.1368 12.9194 23.0553 10.8853 28.1824 10.89C28.5834 10.89 28.9843 10.902 29.3854 10.9261C32.7958 14.0718 31.7913 16.9409 29.5057 19.5273C28.1568 20.9578 26.7098 22.2923 25.175 23.5212C22.9555 25.4098 20.8864 27.1722 20.1045 28.9345C19.1782 31.0277 19.8578 32.9224 23.5991 34.5765C25.4697 35.4065 26.4862 36.0501 26.8832 36.5373C26.8891 36.5444 26.8948 36.5493 26.9006 36.5537C26.8883 36.5575 26.8758 36.5615 26.8591 36.5674C25.9533 36.9123 24.9891 37.0777 24.0201 37.0546C19.4849 37.2471 16.2549 34.3479 13.7468 32.1044C11.9423 30.4984 10.4446 29.1631 8.88675 29.1511C9.14419 24.3995 11.147 19.91 14.5106 16.5439ZM47.5863 30.2458H47.5923C47.5896 38.629 42.2005 46.0612 34.2333 48.6693C34.0096 47.2595 34.2703 45.8155 34.9732 44.5732C35.9262 43.0425 37.149 41.6976 38.5821 40.6033C44.1338 35.9719 44.4466 33.3855 44.6872 31.3946C44.8375 30.1375 44.9518 29.1992 47.4359 27.8338C47.5356 28.6339 47.5859 29.4395 47.5863 30.2458ZM46.4676 23.7377C46.7364 24.495 46.9573 25.2685 47.1292 26.0534C43.3458 27.9782 43.1774 29.3496 42.9489 31.2202C42.7444 32.9043 42.4797 35.1058 37.4633 39.2921C35.8566 40.5214 34.4905 42.0364 33.4334 43.7611C32.5117 45.3903 32.1924 47.2916 32.5311 49.1324C22.097 51.5176 11.705 44.9927 9.31982 34.5587C9.04705 33.3654 8.88795 32.1489 8.84465 30.9255C9.80101 30.9255 11.0401 32.0623 12.5618 33.4156C15.3166 35.8757 18.8413 39.0154 24.0923 38.829C25.3296 38.8503 26.5579 38.6169 27.7012 38.1433C28.1832 37.9302 28.548 37.5171 28.6997 37.0125C28.8278 36.4496 28.6652 35.86 28.2666 35.4426C27.7012 34.7509 26.4622 33.9329 24.3329 32.9825C21.7886 31.8578 21.2352 30.7631 21.7345 29.6443C22.336 28.2368 24.2727 26.6369 26.3298 24.8324C27.9328 23.537 29.4422 22.1301 30.847 20.622C33.3612 17.7589 34.6544 14.6372 32.0981 11.2208C34.939 11.8015 37.612 13.0168 39.9174 14.7756L38.534 19.3408C38.4319 19.6536 38.5131 19.9972 38.7445 20.231C38.7445 20.231 40.988 22.4565 41.0602 22.4986C41.4769 22.7401 42.0105 22.5982 42.2522 22.1815C42.256 22.175 42.2596 22.1684 42.2632 22.1618L44.0135 18.998C45.0467 20.4569 45.8725 22.052 46.4676 23.7377ZM54.5335 17.0191L53.7576 17.4041C53.5839 17.4902 53.444 17.632 53.3606 17.8071L52.9756 18.589L51.4779 21.2957L51.0388 20.8145L51.911 17.9334C52.0126 17.5958 51.9011 17.2304 51.6283 17.0071L46.8826 12.538C46.539 12.2005 45.9868 12.2054 45.6492 12.549C45.6411 12.5573 45.6333 12.5656 45.6255 12.5741C45.5653 12.6403 41.2948 20.3333 41.2948 20.3333L40.3625 19.401L43.2737 9.8073C43.378 9.46791 43.2661 9.0992 42.991 8.875L39.2136 5.32022C38.7956 4.96609 38.6567 4.381 38.8708 3.87665C39.0627 3.43968 39.413 3.09157 39.8512 2.90225H39.8813C40.3795 2.70992 40.9447 2.85488 41.2888 3.26314L44.8977 7.07656C45.1243 7.31986 45.4695 7.41324 45.7879 7.31715L55.4116 4.41198L56.3439 5.34428L48.7051 9.54265C48.2822 9.77332 48.1265 10.3032 48.3573 10.7259C48.3609 10.7325 48.3645 10.739 48.3683 10.7456C48.4043 10.8118 53.0057 15.7079 53.0057 15.7079C53.2337 15.9491 53.5788 16.04 53.8959 15.9425L56.789 15.0703L57.2402 15.5214L54.5335 17.0191Z" fill="currentColor"></path>
                  <path d="M52.2092 42.3818C52.1961 42.3741 52.1828 42.3666 52.1692 42.3597C51.7381 42.1343 51.206 42.2913 50.9663 42.7146C50.5873 43.4063 50.1723 44.0859 49.7272 44.7355C49.4398 45.1441 49.5382 45.7083 49.9467 45.9957C50.3553 46.283 50.9195 46.1847 51.2069 45.7761C51.676 45.0784 52.1211 44.3506 52.5301 43.6168C52.7826 43.187 52.6388 42.6341 52.2092 42.3818Z" fill="currentColor"></path>
                  <path d="M55.0614 29.211C54.5633 29.2043 54.1538 29.6026 54.1469 30.1008C54.1467 30.113 54.1467 30.1251 54.1472 30.1373V30.2396C54.1472 31.0275 54.1111 31.8215 54.0389 32.6094C53.9938 33.1056 54.3594 33.5446 54.8556 33.5897C54.856 33.5897 54.8565 33.5898 54.8569 33.5898H54.9411C55.4171 33.5943 55.8145 33.2283 55.8494 32.7538C55.9276 31.9177 55.9637 31.0696 55.9637 30.2275V30.1072C55.9604 29.6113 55.5574 29.211 55.0614 29.211Z" fill="currentColor"></path>
                  <path d="M23.3827 55.7003C22.6007 55.5679 21.8248 55.3995 21.073 55.1709C20.6029 55.0057 20.0879 55.2527 19.9225 55.7228C19.7571 56.1929 20.0043 56.7079 20.4743 56.8733C20.5088 56.8855 20.5441 56.8954 20.5797 56.9034C21.3857 57.1319 22.2158 57.3304 23.0458 57.5049H23.2142C23.7126 57.5513 24.1542 57.1852 24.2007 56.6868C24.2471 56.1885 23.881 55.7469 23.3827 55.7003Z" fill="currentColor"></path>
                  <path d="M37.3406 55.4265C37.1774 54.9836 36.7003 54.7412 36.2463 54.8708V54.8948C35.5005 55.1414 34.7306 55.352 33.9667 55.4963C33.4801 55.6059 33.1744 56.0894 33.284 56.576C33.3936 57.0626 33.8771 57.3683 34.3637 57.2587C35.1817 57.0722 36.0057 56.8436 36.8057 56.585C37.2733 56.4127 37.5127 55.8941 37.3406 55.4265Z" fill="currentColor"></path>
                  <path d="M17.1901 53.7335C16.4743 53.3787 15.7706 52.9937 15.0909 52.6088C14.6607 52.3563 14.1073 52.5003 13.8549 52.9306C13.6024 53.3608 13.7464 53.9141 14.1766 54.1666C14.9044 54.5937 15.6563 54.9906 16.4202 55.3696C16.8719 55.5822 17.4105 55.3882 17.6232 54.9365C17.8358 54.4848 17.642 53.9462 17.1901 53.7335Z" fill="currentColor"></path>
                  <path d="M48.3761 47.9298C48.0147 47.5997 47.4557 47.6181 47.1168 47.9715H47.1228C46.5815 48.5729 46.0101 49.1022 45.4266 49.6255C45.0546 49.9577 45.0223 50.5287 45.3544 50.9007C45.6866 51.2727 46.2576 51.305 46.6296 50.9729C47.2311 50.4135 47.8686 49.818 48.434 49.2045C48.7701 48.8364 48.7441 48.2657 48.3761 47.9298Z" fill="currentColor"></path>
                  <path d="M43.3958 52.4301C43.1401 52.0024 42.5862 51.863 42.1584 52.1187C42.1439 52.1272 42.1298 52.1363 42.116 52.1457V52.1217C41.4543 52.5427 40.7626 52.9397 40.0649 53.3246C39.6214 53.5522 39.4464 54.0962 39.6739 54.5396C39.9014 54.9831 40.4455 55.1581 40.8889 54.9306C41.6348 54.5457 42.3746 54.1186 43.0843 53.6675C43.512 53.4117 43.6515 52.8577 43.3958 52.4301Z" fill="currentColor"></path>
                </g>
              </svg>
              <h3 className='sai-item-title'>Worldwide Delivery</h3>
              <p className='sai-item-description'>Overnight Complimentary Shipping</p>
            </div>
            <div className='sai-item text-center newsletter-benefit'>
              <svg className='sai-item-icon-container sai-item-icon-wrapper' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.0073 49.0204C31.8761 49.0201 31.7465 48.9913 31.6275 48.936L15.5431 41.1998C15.3962 41.1269 15.2724 41.0147 15.1855 40.8756C15.0985 40.7365 15.0519 40.5761 15.0508 40.4121V23.0969C15.0503 22.949 15.0875 22.8034 15.1588 22.6738C15.2301 22.5442 15.3332 22.4349 15.4584 22.3561C15.5836 22.2774 15.7268 22.2317 15.8745 22.2235C16.0222 22.2153 16.1695 22.2448 16.3027 22.3092L32.3871 30.0455C32.534 30.1184 32.6578 30.2306 32.7447 30.3696C32.8316 30.5087 32.8782 30.6692 32.8794 30.8332V48.1483C32.8794 48.2959 32.842 48.441 32.7706 48.5702C32.6993 48.6993 32.5964 48.8083 32.4714 48.8868C32.3329 48.9752 32.1717 49.0216 32.0073 49.0204ZM16.795 39.8776L31.1352 46.7839V31.3888L16.795 24.4824V39.8776Z" fill="currentColor"></path><path d="M32.0054 31.6981C31.8837 31.7068 31.7616 31.69 31.6467 31.6489L15.5623 23.9127C15.413 23.8431 15.2866 23.7324 15.1981 23.5934C15.1095 23.4545 15.0625 23.2932 15.0625 23.1285C15.0625 22.9637 15.1095 22.8024 15.1981 22.6635C15.2866 22.5246 15.413 22.4139 15.5623 22.3443L31.6467 14.5729C31.7643 14.5172 31.8929 14.4883 32.023 14.4883C32.1531 14.4883 32.2816 14.5172 32.3993 14.5729L48.4837 22.3091C48.6316 22.3807 48.7563 22.4926 48.8434 22.632C48.9305 22.7713 48.9765 22.9325 48.976 23.0968C48.976 23.2602 48.9297 23.4201 48.8426 23.5583C48.7555 23.6964 48.631 23.8071 48.4837 23.8775L32.35 31.6489C32.2396 31.6883 32.1224 31.7051 32.0054 31.6981ZM17.9395 23.0898L32.0054 29.8625L46.0713 23.1039L32.0054 16.3241L17.9395 23.0898Z" fill="currentColor"></path><path d="M32.0088 49.0202C31.8444 49.0214 31.6832 48.975 31.5446 48.8866C31.4197 48.8081 31.3168 48.6991 31.2454 48.57C31.1741 48.4408 31.1367 48.2957 31.1367 48.1481V30.84C31.1362 30.6757 31.1822 30.5145 31.2693 30.3752C31.3564 30.2358 31.4811 30.1239 31.629 30.0523L47.7134 22.316C47.8466 22.2516 47.9939 22.2221 48.1416 22.2303C48.2893 22.2386 48.4325 22.2842 48.5577 22.363C48.6828 22.4417 48.7859 22.5511 48.8573 22.6806C48.9286 22.8102 48.9657 22.9558 48.9653 23.1037V40.4048C48.9658 40.5692 48.9198 40.7303 48.8327 40.8697C48.7456 41.009 48.6209 41.121 48.473 41.1925L32.3534 48.9358C32.2456 48.9873 32.1283 49.016 32.0088 49.0202ZM32.8809 31.3886V46.7626L47.2211 39.8563V24.4822L32.8809 31.3886Z" fill="currentColor"></path><path d="M23.9609 27.8298C23.7651 27.8278 23.5756 27.76 23.423 27.6372C23.2705 27.5145 23.1637 27.3439 23.1198 27.1531C23.076 26.9622 23.0976 26.7621 23.1813 26.5851C23.265 26.4081 23.4058 26.2643 23.5811 26.1771L39.6725 18.4408C39.8806 18.3416 40.1195 18.3289 40.3369 18.4053C40.5544 18.4817 40.7327 18.6412 40.833 18.8487C40.883 18.9516 40.9122 19.0633 40.9187 19.1775C40.9253 19.2918 40.9092 19.4061 40.8712 19.5141C40.8333 19.622 40.7743 19.7213 40.6977 19.8063C40.6211 19.8913 40.5285 19.9602 40.4251 20.0091L24.3407 27.7454C24.2215 27.8 24.092 27.8288 23.9609 27.8298Z" fill="currentColor"></path><path d="M26.1221 35.4256C25.9908 35.4262 25.8611 35.3974 25.7424 35.3412L20.9951 33.0555C20.8917 33.0066 20.799 32.9377 20.7224 32.8527C20.6459 32.7677 20.5869 32.6684 20.549 32.5604C20.511 32.4525 20.4949 32.3381 20.5014 32.2239C20.508 32.1097 20.5371 31.9979 20.5872 31.8951C20.6875 31.6875 20.8658 31.5281 21.0832 31.4517C21.3007 31.3753 21.5396 31.388 21.7476 31.4872L26.4949 33.7588C26.6697 33.8458 26.8103 33.9889 26.8941 34.1653C26.9779 34.3416 27.0001 34.541 26.9572 34.7315C26.9142 34.922 26.8086 35.0925 26.6572 35.2158C26.5058 35.3391 26.3174 35.4081 26.1221 35.4116V35.4256Z" fill="currentColor"></path><path d="M5.58574 43.4149C5.41554 43.4176 5.24826 43.3704 5.10454 43.2792C4.96082 43.1879 4.84695 43.0566 4.77695 42.9015C2.13719 36.3733 1.93262 29.1135 4.20056 22.447C6.46851 15.7805 11.0578 10.1517 17.1309 6.58763C23.2041 3.02357 30.3562 1.76189 37.2823 3.03282C44.2084 4.30376 50.4466 8.02258 54.8587 13.5107C54.9405 13.598 55.0035 13.7013 55.0437 13.8141C55.0839 13.9268 55.1004 14.0466 55.0923 14.166C55.0842 14.2854 55.0515 14.4019 54.9965 14.5082C54.9414 14.6144 54.865 14.7082 54.7721 14.7837C54.6792 14.8592 54.5718 14.9147 54.4565 14.9469C54.3412 14.979 54.2206 14.9871 54.102 14.9706C53.9835 14.9541 53.8696 14.9134 53.7675 14.851C53.6653 14.7886 53.5771 14.7058 53.5084 14.6078C49.358 9.46127 43.4982 5.97531 36.9948 4.78395C30.4915 3.59259 23.7765 4.77497 18.0712 8.11604C12.3659 11.4571 8.0493 16.7349 5.90642 22.9896C3.76354 29.2443 3.93674 36.0604 6.39454 42.1982C6.44736 42.3304 6.467 42.4735 6.45174 42.6151C6.43648 42.7567 6.38679 42.8924 6.30701 43.0103C6.22723 43.1283 6.11978 43.2249 5.99405 43.2917C5.86832 43.3586 5.72814 43.3936 5.58574 43.3938V43.4149Z" fill="currentColor"></path><path d="M32.0411 61.2507C27.6499 61.2611 23.3124 60.285 19.3489 58.3946C15.3854 56.5042 11.8972 53.7476 9.14177 50.3285C8.99628 50.1419 8.93085 49.9053 8.95986 49.6705C8.98888 49.4357 9.10997 49.2221 9.2965 49.0766C9.48302 48.9311 9.7197 48.8657 9.95448 48.8947C10.1892 48.9237 10.4029 49.0448 10.5484 49.2313C14.7242 54.3718 20.6089 57.8397 27.1289 59.0022C33.6489 60.1647 40.3695 58.9443 46.0646 55.5638C51.7597 52.1832 56.0495 46.8679 58.1515 40.5874C60.2534 34.307 60.0274 27.4802 57.5145 21.3526C57.4673 21.2463 57.4418 21.1316 57.4396 21.0153C57.4373 20.899 57.4584 20.7834 57.5015 20.6753C57.5447 20.5672 57.609 20.4689 57.6907 20.3861C57.7724 20.3032 57.8699 20.2376 57.9773 20.193C58.0848 20.1484 58.2001 20.1258 58.3164 20.1265C58.4328 20.1271 58.5478 20.1511 58.6548 20.1969C58.7617 20.2427 58.8584 20.3094 58.9392 20.3932C59.02 20.4769 59.0832 20.576 59.1251 20.6845C61.5212 26.549 61.9684 33.0285 60.4006 39.1666C58.8328 45.3047 55.3332 50.7761 50.4183 54.7733C45.2148 58.9728 38.7278 61.2593 32.0411 61.2507Z" fill="currentColor"></path><path d="M54.251 14.9947H54.1526L46.0295 14.1156C45.8113 14.0772 45.616 13.9572 45.4831 13.78C45.3502 13.6028 45.2896 13.3817 45.3138 13.1616C45.338 12.9414 45.445 12.7386 45.6132 12.5945C45.7814 12.4504 45.9981 12.3756 46.2194 12.3855L53.4493 13.1661L54.2581 5.9081C54.2633 5.78893 54.293 5.67211 54.3453 5.56487C54.3975 5.45762 54.4712 5.36224 54.5618 5.28461C54.6524 5.20699 54.7579 5.14877 54.8719 5.11356C54.9859 5.07835 55.1059 5.0669 55.2244 5.07991C55.343 5.09293 55.4577 5.13013 55.5613 5.18922C55.6649 5.24832 55.7553 5.32804 55.8269 5.42347C55.8985 5.51889 55.9497 5.62799 55.9775 5.74401C56.0052 5.86003 56.0088 5.98051 55.9882 6.09799L55.1161 14.2211C55.0899 14.4508 54.9735 14.6608 54.7926 14.8048C54.6395 14.9289 54.4481 14.996 54.251 14.9947Z" fill="currentColor"></path><path d="M8.89622 58.7048H8.79776C8.56857 58.68 8.35853 58.5655 8.21356 58.3862C8.06859 58.207 8.00049 57.9777 8.02413 57.7484L8.90326 49.6253C8.91419 49.5117 8.94785 49.4015 9.00221 49.3013C9.05658 49.201 9.13056 49.1127 9.21974 49.0415C9.39981 48.8966 9.62974 48.8283 9.85974 48.8517L17.9828 49.7237C18.1999 49.7625 18.3943 49.882 18.5268 50.0584C18.6593 50.2347 18.7201 50.4546 18.6969 50.6739C18.6737 50.8932 18.5683 51.0956 18.4019 51.2404C18.2354 51.3851 18.0204 51.4614 17.8 51.4539L10.549 50.6732L9.75424 57.9312C9.73171 58.1432 9.63166 58.3395 9.47331 58.4823C9.31495 58.625 9.10944 58.7043 8.89622 58.7048Z" fill="currentColor"></path></svg>
              <h3 className='sai-item-title'>Returns Within 30 Days</h3>
              <p className='sai-item-description'>Satisfaction Guaranteed</p>
            </div>
            <div className='sai-item text-center newsletter-benefit'>
              <svg className='sai-item-icon-container sai-item-icon-wrapper' viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M48.125 0.000488281H14.875C13.7151 0.00187766 12.6031 0.46326 11.7829 1.28343C10.9628 2.1036 10.5014 3.21559 10.5 4.37549V48.9751H7.875C7.64294 48.9751 7.42038 49.0673 7.25628 49.2314C7.09219 49.3955 7 49.618 7 49.8501V51.6001C7.00139 52.76 7.46277 53.872 8.28294 54.6922C9.10311 55.5123 10.2151 55.9737 11.375 55.9751H40.9981C41.0397 55.9868 41.0821 55.9952 41.125 56.0005C42.2849 55.9991 43.3969 55.5377 44.2171 54.7175C45.0372 53.8974 45.4986 52.7854 45.5 51.6255V4.37549C45.5 3.6793 45.7766 3.01162 46.2688 2.51933C46.7611 2.02705 47.4288 1.75049 48.125 1.75049C48.3571 1.75049 48.5796 1.6583 48.7437 1.49421C48.9078 1.33011 49 1.10755 49 0.875488C49 0.643424 48.9078 0.420864 48.7437 0.25677C48.5796 0.0926755 48.3571 0.000488281 48.125 0.000488281V0.000488281ZM11.375 54.2251C10.6788 54.2251 10.0111 53.9486 9.51884 53.4563C9.02656 52.964 8.75 52.2963 8.75 51.6001V50.7251H36.75V51.6001C36.7487 52.5469 37.0559 53.4684 37.625 54.2251H11.375ZM43.75 4.37549V51.6255C43.7481 52.3053 43.4826 52.9578 43.0093 53.4458C42.536 53.9337 41.8919 54.2191 41.2125 54.2417C41.1827 54.2417 41.1574 54.2251 41.125 54.2251C40.4288 54.2251 39.7611 53.9486 39.2688 53.4563C38.7766 52.964 38.5 52.2963 38.5 51.6001V49.8501C38.5 49.618 38.4078 49.3955 38.2437 49.2314C38.0796 49.0673 37.8571 48.9751 37.625 48.9751H12.25V4.37549C12.25 3.6793 12.5266 3.01162 13.0188 2.51933C13.5111 2.02705 14.1788 1.75049 14.875 1.75049H44.625C44.0559 2.50719 43.7487 3.42866 43.75 4.37549Z" fill="currentColor"></path><path d="M17.6498 15.9805C17.7441 16.0594 17.82 16.1581 17.872 16.2695C17.9241 16.3809 17.951 16.5024 17.951 16.6254C17.951 16.7484 17.9241 16.8698 17.872 16.9813C17.82 17.0927 17.7441 17.1913 17.6498 17.2703L17.5168 17.3875C17.1343 17.7171 16.8573 18.1519 16.7202 18.6378C16.5832 19.1238 16.5921 19.6393 16.7459 20.1201C16.9072 20.6236 17.2132 21.0685 17.6257 21.3991C18.0383 21.7298 18.539 21.9317 19.0656 21.9795L19.1671 21.9909C19.2525 22.0068 19.3357 22.0332 19.4147 22.0696L14.1192 31.0629C14.0344 31.2054 13.9918 31.369 13.9964 31.5348C14.0011 31.7005 14.0527 31.8615 14.1453 31.9991C14.2379 32.1366 14.3677 32.245 14.5195 32.3116C14.6714 32.3783 14.839 32.4004 15.0029 32.3754L19.9519 31.636L21.7693 36.1991C21.8299 36.3513 21.932 36.4833 22.0639 36.5803C22.1959 36.6773 22.3524 36.7353 22.5157 36.7478H22.5822C22.7346 36.7478 22.8843 36.708 23.0166 36.6323C23.1489 36.5567 23.2592 36.4478 23.3364 36.3164L27.9984 28.3985L32.6604 36.319C32.7377 36.4504 32.8479 36.5593 32.9802 36.6349C33.1125 36.7106 33.2623 36.7504 33.4147 36.7504H33.4812C33.6445 36.7379 33.801 36.6799 33.9329 36.5829C34.0649 36.486 34.1669 36.3539 34.2276 36.2018L36.0484 31.636L40.9939 32.3754C41.1578 32.4004 41.3255 32.3783 41.4773 32.3116C41.6292 32.245 41.759 32.1366 41.8516 31.9991C41.9442 31.8615 41.9958 31.7005 42.0004 31.5348C42.005 31.369 41.9625 31.2054 41.8777 31.0629L36.5822 22.0696C36.6611 22.0332 36.7443 22.0068 36.8298 21.9909L36.9313 21.9795C37.4578 21.9317 37.9586 21.7298 38.3711 21.3991C38.7836 21.0685 39.0896 20.6236 39.2509 20.1201C39.4048 19.6392 39.4136 19.1236 39.2764 18.6377C39.1392 18.1517 38.8619 17.7169 38.4792 17.3875L38.3471 17.2703C38.2527 17.1913 38.1769 17.0927 38.1248 16.9813C38.0728 16.8698 38.0458 16.7484 38.0458 16.6254C38.0458 16.5024 38.0728 16.3809 38.1248 16.2695C38.1769 16.1581 38.2527 16.0594 38.3471 15.9805L38.4801 15.8633C38.8627 15.5336 39.1398 15.0986 39.2769 14.6125C39.414 14.1264 39.405 13.6108 39.2509 13.1298C39.0898 12.6272 38.7843 12.1831 38.3726 11.8528C37.961 11.5225 37.4613 11.3206 36.9357 11.2721L36.8298 11.2599C36.6889 11.2465 36.5523 11.2037 36.4289 11.1344C36.3055 11.0651 36.198 10.9707 36.1132 10.8574C36.0438 10.7635 35.995 10.6561 35.97 10.5421C35.9449 10.4281 35.9442 10.3102 35.9679 10.1959L35.9942 10.0769C36.0976 9.58701 36.0567 9.07766 35.8766 8.61052C35.6965 8.14338 35.3847 7.73849 34.9792 7.44489C34.5472 7.1206 34.0304 6.92857 33.4915 6.89207C32.9526 6.85557 32.4147 6.97618 31.9429 7.23926C31.8134 7.30968 31.6708 7.35292 31.524 7.36631C31.3771 7.3797 31.2291 7.36297 31.0889 7.31714C30.9608 7.27774 30.8423 7.21202 30.7411 7.12417C30.6398 7.03633 30.558 6.9283 30.5009 6.80701C30.2701 6.33866 29.9126 5.94446 29.4689 5.66922C29.0252 5.39397 28.5132 5.24873 27.9911 5.25001C27.469 5.25128 26.9577 5.39903 26.5154 5.67643C26.073 5.95384 25.7174 6.34979 25.4889 6.81926C25.4319 6.93799 25.3508 7.04355 25.2508 7.12926C25.1507 7.21497 25.034 7.27895 24.9079 7.31714C24.7678 7.36297 24.6197 7.3797 24.4729 7.36631C24.326 7.35292 24.1835 7.30968 24.0539 7.23926C23.5821 6.97639 23.0442 6.85591 22.5053 6.8924C21.9665 6.9289 21.4497 7.1208 21.0177 7.44489C20.612 7.73859 20.3003 8.14366 20.1203 8.61099C19.9403 9.07832 19.8998 9.58784 20.0036 10.0778L20.0281 10.1959C20.0521 10.3101 20.0517 10.4281 20.0268 10.5421C20.002 10.6562 19.9532 10.7636 19.8837 10.8574C19.7983 10.9712 19.6901 11.0659 19.5659 11.1354C19.4417 11.2049 19.3044 11.2476 19.1627 11.2608L19.0656 11.2713C18.5392 11.3193 18.0386 11.5211 17.6261 11.8515C17.2137 12.182 16.9076 12.6266 16.7459 13.1298C16.5919 13.6108 16.5829 14.1266 16.7202 14.6127C16.8574 15.0988 17.1348 15.5338 17.5177 15.8633L17.6498 15.9805ZM22.7344 33.8918L21.3213 30.3445C21.2475 30.1618 21.1146 30.0091 20.9437 29.9109C20.7728 29.8127 20.574 29.7746 20.3789 29.8029L16.5578 30.3734L20.0578 24.4313C20.2201 24.9822 20.5581 25.4649 21.0203 25.8059C21.4523 26.1302 21.969 26.3222 22.508 26.3587C23.0469 26.3952 23.5848 26.2746 24.0566 26.0115C24.1861 25.9411 24.3287 25.8979 24.4755 25.8845C24.6224 25.8711 24.7704 25.8878 24.9106 25.9336C25.0387 25.973 25.1572 26.0388 25.2584 26.1266C25.3597 26.2144 25.4415 26.3225 25.4986 26.4438C25.7112 26.897 26.0472 27.2812 26.4681 27.5524L22.7344 33.8918ZM35.6179 29.8029C35.4229 29.7748 35.2241 29.8129 35.0533 29.9111C34.8824 30.0093 34.7495 30.1619 34.6756 30.3445L33.2624 33.8918L29.5306 27.5515C29.9547 27.2769 30.2933 26.8889 30.5079 26.4315C30.565 26.3128 30.6461 26.2072 30.7461 26.1215C30.8461 26.0358 30.9629 25.9718 31.0889 25.9336C31.2291 25.8878 31.3771 25.8711 31.524 25.8845C31.6708 25.8979 31.8134 25.9411 31.9429 26.0115C32.4146 26.2748 32.9526 26.3955 33.4916 26.359C34.0305 26.3225 34.5473 26.1304 34.9792 25.8059C35.4419 25.4651 35.7801 24.9819 35.9417 24.4304L39.4417 30.3734L35.6179 29.8029ZM18.8109 14.6689L18.6788 14.5525C18.5501 14.4476 18.4561 14.3062 18.4092 14.1469C18.3624 13.9876 18.3649 13.8179 18.4163 13.66C18.4767 13.48 18.5893 13.3221 18.7399 13.2064C18.8904 13.0908 19.0721 13.0227 19.2616 13.0108L19.3596 12.9994C19.7434 12.9594 20.1147 12.8395 20.4494 12.6473C20.7841 12.4552 21.0748 12.1951 21.3029 11.8838C21.5168 11.5923 21.6665 11.2588 21.7419 10.9052C21.8173 10.5517 21.8168 10.1861 21.7404 9.83276L21.7151 9.71551C21.6818 9.55284 21.6973 9.38398 21.7596 9.23006C21.8218 9.07614 21.9281 8.94399 22.0651 8.85014C22.2291 8.72752 22.4252 8.65508 22.6295 8.64157C22.8339 8.62806 23.0378 8.67406 23.2166 8.77401C23.5557 8.95908 23.9292 9.07287 24.3139 9.10838C24.6987 9.14389 25.0866 9.10038 25.4539 8.98051C25.8081 8.8657 26.1351 8.67963 26.4146 8.43375C26.6942 8.18786 26.9206 7.88737 27.0797 7.55076C27.1691 7.38333 27.3027 7.24354 27.4659 7.14651C27.629 7.04948 27.8156 6.99891 28.0055 7.00026C28.1953 7.00161 28.3811 7.05484 28.5429 7.15418C28.7047 7.25352 28.8362 7.3952 28.9233 7.56389C29.0832 7.89806 29.3096 8.19607 29.5887 8.43967C29.8678 8.68326 30.1937 8.8673 30.5464 8.98051C30.9139 9.10009 31.302 9.14345 31.6868 9.10795C32.0717 9.07244 32.4452 8.95881 32.7847 8.77401C32.9633 8.67403 33.167 8.628 33.3713 8.64152C33.5755 8.65503 33.7714 8.7275 33.9353 8.85014C34.0721 8.94393 34.1782 9.07594 34.2405 9.22968C34.3027 9.38342 34.3183 9.55209 34.2853 9.71464L34.2599 9.83364C34.1836 10.1869 34.1832 10.5523 34.2586 10.9057C34.334 11.2591 34.4836 11.5925 34.6974 11.8838C34.9251 12.1947 35.2153 12.4545 35.5494 12.6467C35.8835 12.8388 36.2541 12.9589 36.6373 12.9994L36.7432 13.0116C36.9319 13.0239 37.1127 13.0921 37.2625 13.2076C37.4123 13.3231 37.5242 13.4806 37.5841 13.66C37.6353 13.8178 37.6377 13.9873 37.5908 14.1465C37.544 14.3056 37.4501 14.4468 37.3216 14.5516L37.1886 14.6689C36.9087 14.9122 36.6843 15.2127 36.5305 15.5501C36.3767 15.8876 36.2971 16.2541 36.2971 16.625C36.2971 16.9958 36.3767 17.3623 36.5305 17.6998C36.6843 18.0372 36.9087 18.3377 37.1886 18.581L37.3207 18.6974C37.4494 18.8023 37.5434 18.9437 37.5902 19.103C37.6371 19.2623 37.6346 19.432 37.5832 19.5899C37.5234 19.7694 37.4115 19.9271 37.2617 20.0427C37.112 20.1584 36.9311 20.2267 36.7423 20.2391L36.6399 20.2505C36.2561 20.2905 35.8848 20.4104 35.5501 20.6026C35.2154 20.7947 34.9246 21.0548 34.6966 21.3661C34.4828 21.6578 34.3332 21.9915 34.2578 22.3452C34.1824 22.6989 34.1828 23.0645 34.2591 23.418L34.2844 23.5344C34.3176 23.6971 34.3021 23.8659 34.2399 24.0198C34.1776 24.1738 34.0714 24.3059 33.9344 24.3998C33.7704 24.5225 33.5743 24.595 33.37 24.6085C33.1656 24.622 32.9617 24.5759 32.7829 24.4759C32.4437 24.291 32.0703 24.1773 31.6855 24.1418C31.3008 24.1062 30.9129 24.1497 30.5456 24.2694C30.1907 24.3838 29.8631 24.5697 29.5829 24.8156C29.3027 25.0615 29.0758 25.3622 28.9163 25.6991C28.8268 25.8666 28.6933 26.0064 28.5301 26.1034C28.367 26.2004 28.1804 26.251 27.9905 26.2496C27.8007 26.2483 27.6148 26.1951 27.4531 26.0957C27.2913 25.9964 27.1598 25.8547 27.0727 25.686C26.9128 25.3518 26.6864 25.0538 26.4073 24.8102C26.1282 24.5666 25.8023 24.3826 25.4496 24.2694C25.082 24.15 24.694 24.1068 24.3092 24.1423C23.9244 24.1778 23.5508 24.2913 23.2113 24.4759C23.0327 24.5759 22.8289 24.6219 22.6247 24.6084C22.4205 24.5949 22.2245 24.5224 22.0607 24.3998C21.924 24.3061 21.8178 24.1743 21.7556 24.0207C21.6933 23.8671 21.6777 23.6986 21.7107 23.5361L21.7361 23.4171C21.8122 23.0638 21.8126 22.6983 21.7372 22.3447C21.6618 21.9912 21.5123 21.6577 21.2986 21.3661C21.2907 21.3556 21.2802 21.3478 21.2723 21.3373C21.2644 21.3268 21.2408 21.304 21.2259 21.2856C20.9985 20.9975 20.7159 20.7575 20.3947 20.5798C20.0735 20.4021 19.7201 20.2901 19.3552 20.2505L19.2528 20.2391C19.064 20.2267 18.8832 20.1584 18.7334 20.0427C18.5836 19.9271 18.4717 19.7694 18.4119 19.5899C18.3605 19.4321 18.3581 19.2625 18.405 19.1034C18.4518 18.9442 18.5458 18.803 18.6744 18.6983L18.8074 18.5801C19.0873 18.3369 19.3117 18.0363 19.4655 17.6989C19.6193 17.3614 19.6989 16.9949 19.6989 16.6241C19.6989 16.2532 19.6193 15.8867 19.4655 15.5493C19.3117 15.2118 19.0873 14.9113 18.8074 14.668L18.8109 14.6689Z" fill="currentColor"></path><path d="M28 23.6255C29.3845 23.6255 30.7378 23.2149 31.889 22.4458C33.0401 21.6766 33.9373 20.5834 34.4672 19.3043C34.997 18.0252 35.1356 16.6177 34.8655 15.2599C34.5954 13.902 33.9287 12.6547 32.9497 11.6757C31.9708 10.6968 30.7235 10.0301 29.3656 9.75999C28.0078 9.4899 26.6003 9.62852 25.3212 10.1583C24.0421 10.6881 22.9489 11.5854 22.1797 12.7365C21.4105 13.8876 21 15.241 21 16.6255C21.0021 18.4814 21.7403 20.2606 23.0526 21.5729C24.3649 22.8852 26.1441 23.6234 28 23.6255ZM28 11.3755C29.0384 11.3755 30.0534 11.6834 30.9167 12.2603C31.7801 12.8372 32.453 13.6571 32.8504 14.6164C33.2477 15.5757 33.3517 16.6313 33.1491 17.6497C32.9466 18.6681 32.4465 19.6036 31.7123 20.3378C30.9781 21.072 30.0426 21.572 29.0242 21.7746C28.0058 21.9772 26.9502 21.8732 25.9909 21.4759C25.0316 21.0785 24.2117 20.4056 23.6348 19.5422C23.0579 18.6789 22.75 17.6638 22.75 16.6255C22.7514 15.2335 23.305 13.899 24.2892 12.9147C25.2735 11.9305 26.608 11.3769 28 11.3755Z" fill="currentColor"></path><path d="M26.5073 19.8692C26.6714 20.0333 26.8939 20.1256 27.126 20.1256C27.1551 20.1274 27.1843 20.1274 27.2135 20.1256C27.3422 20.1128 27.4665 20.0717 27.5774 20.0051C27.6883 19.9385 27.783 19.8482 27.8548 19.7406L31.3548 14.4906C31.4186 14.395 31.4629 14.2878 31.4853 14.1751C31.5076 14.0623 31.5075 13.9463 31.485 13.8336C31.4625 13.7209 31.418 13.6138 31.3541 13.5182C31.2902 13.4227 31.2081 13.3408 31.1125 13.277C31.0169 13.2132 30.9096 13.1689 30.7969 13.1466C30.6842 13.1242 30.5682 13.1243 30.4555 13.1468C30.3428 13.1693 30.2356 13.2138 30.1401 13.2777C30.0446 13.3417 29.9626 13.4238 29.8988 13.5194L26.9903 17.8769L25.9946 16.882C25.8296 16.7226 25.6085 16.6344 25.3791 16.6364C25.1497 16.6384 24.9302 16.7304 24.768 16.8927C24.6058 17.0549 24.5137 17.2743 24.5118 17.5038C24.5098 17.7332 24.598 17.9542 24.7573 18.1192L26.5073 19.8692Z" fill="currentColor"></path><path d="M39.375 40.2505H28.875C28.6429 40.2505 28.4204 40.3427 28.2563 40.5068C28.0922 40.6709 28 40.8934 28 41.1255C28 41.3576 28.0922 41.5801 28.2563 41.7442C28.4204 41.9083 28.6429 42.0005 28.875 42.0005H39.375C39.6071 42.0005 39.8296 41.9083 39.9937 41.7442C40.1578 41.5801 40.25 41.3576 40.25 41.1255C40.25 40.8934 40.1578 40.6709 39.9937 40.5068C39.8296 40.3427 39.6071 40.2505 39.375 40.2505Z" fill="currentColor"></path><path d="M25.375 42.0005C25.6071 42.0005 25.8296 41.9083 25.9937 41.7442C26.1578 41.5801 26.25 41.3576 26.25 41.1255C26.25 40.8934 26.1578 40.6709 25.9937 40.5068C25.8296 40.3427 25.6071 40.2505 25.375 40.2505H18.375C18.1429 40.2505 17.9204 40.3427 17.7563 40.5068C17.5922 40.6709 17.5 40.8934 17.5 41.1255C17.5 41.3576 17.5922 41.5801 17.7563 41.7442C17.9204 41.9083 18.1429 42.0005 18.375 42.0005H25.375Z" fill="currentColor"></path><path d="M37.625 43.7505H34.125C33.8929 43.7505 33.6704 43.8427 33.5063 44.0068C33.3422 44.1709 33.25 44.3934 33.25 44.6255C33.25 44.8576 33.3422 45.0801 33.5063 45.2442C33.6704 45.4083 33.8929 45.5005 34.125 45.5005H37.625C37.8571 45.5005 38.0796 45.4083 38.2437 45.2442C38.4078 45.0801 38.5 44.8576 38.5 44.6255C38.5 44.3934 38.4078 44.1709 38.2437 44.0068C38.0796 43.8427 37.8571 43.7505 37.625 43.7505Z" fill="currentColor"></path><path d="M30.625 43.7505H23.625C23.3929 43.7505 23.1704 43.8427 23.0063 44.0068C22.8422 44.1709 22.75 44.3934 22.75 44.6255C22.75 44.8576 22.8422 45.0801 23.0063 45.2442C23.1704 45.4083 23.3929 45.5005 23.625 45.5005H30.625C30.8571 45.5005 31.0796 45.4083 31.2437 45.2442C31.4078 45.0801 31.5 44.8576 31.5 44.6255C31.5 44.3934 31.4078 44.1709 31.2437 44.0068C31.0796 43.8427 30.8571 43.7505 30.625 43.7505Z" fill="currentColor"></path><path d="M20.125 43.7505H16.625C16.3929 43.7505 16.1704 43.8427 16.0063 44.0068C15.8422 44.1709 15.75 44.3934 15.75 44.6255C15.75 44.8576 15.8422 45.0801 16.0063 45.2442C16.1704 45.4083 16.3929 45.5005 16.625 45.5005H20.125C20.3571 45.5005 20.5796 45.4083 20.7437 45.2442C20.9078 45.0801 21 44.8576 21 44.6255C21 44.3934 20.9078 44.1709 20.7437 44.0068C20.5796 43.8427 20.3571 43.7505 20.125 43.7505Z" fill="currentColor"></path></g></svg>
              <h3 className='sai-item-title'>Life Time Warranty</h3>
              <p className='sai-item-description'>Shop With Confidence</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default EngagementRingDetail