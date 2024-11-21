import React, { useEffect, useState } from 'react';
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import "./ringStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import TabComponent from '../../Component/Common/TabComponent';
import RingStyleFilter from './RingStyleFilter';

const RingSelector = () => {
  const [showFilter, setShowFilter] = useState(false)
  const [showPriceFilter, setShowPriceFilter] = useState(false)

  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div> */}

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
        <div className="hidden md:flex gap-4 mb-8 mt-8 hidden md:flex gap-2 flex-wrap items-center pt-4 border-t border-borders col-span-2 w-full">
          <div aria-expanded="true">
            <button type="button" className="fixed inset-0 cursor-default" data-close-filter-drawer="true" title="close filter"></button>
            <div className="relative z-10">
              <button onClick={()=>setShowFilter(!showFilter) } type="button" className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-md border transition-colors duration-300 text-black cursor-pointer text-sm leading-none border-borders">
                <span>Select Metal</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300">
                  <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z" fill="currentColor">
                  </path>
                  </svg>
                </svg>
              </button>
              <div className={`absolute top-full left-0 w-[22.5rem] pt-3 ${!showFilter ? "invisible" :""} `}>
                <div className="p-5.5 bg-white rounded-2xl shadow-filter-dropdown">
                  <button onClick={()=>setShowFilter(false)} type="button" className="p-0 border-0 bg-transparent text-black opacity-50 absolute top-4 right-1 z-10" title="Preview"><svg className="block relative w-9 h-9"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M12.6201 12.62L23.3799 23.3798" stroke="currentColor" stroke-miterlimit="10"></path><path d="M12.6201 23.3798L23.3799 12.62" stroke="currentColor" stroke-miterlimit="10"></path></g></svg></svg></button>
                  <div className="flex gap-0.5 items-center mb-4">
                    <div className="text-base font-bold text-black leading-none">Metal</div>
                    <div className="text-base font-bold text-black leading-none ">:</div>
                    <div className="text-base text-customGray-500 leading-none ml-0.5 ">White Gold</div>
                  </div>
                  <div className="relative">
                    <div className="md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5 flex md:grid md:grid-cols-4 md:justify-center md:snap-center" data-scroll-lock-scrollable="true">
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-white ring-1 ring-black border-black">
                        <svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18.45" cy="18" r="14.75" transform="rotate(90 18.45 18)" stroke="url(#WhiteGold14k-1)" stroke-width="1.5"></circle>
                          <path d="M18.4499 4.75C25.7677 4.75 31.6999 10.6822 31.6999 18C31.6999 25.3178 25.7677 31.25 18.4499 31.25C11.1322 31.25 5.19995 25.3178 5.19995 18C5.19995 10.6822 11.1322 4.75 18.4499 4.75Z" stroke="url(#WhiteGold14k-2)" stroke-width="1.5"></path>
                          <path d="M12.821 21.5H11.908V15.373L10.731 16.616L10.181 16.055L12.018 14.163H12.821V21.5ZM18.4295 21.5H17.5165V19.641H14.0295V18.882L17.1755 14.163H18.4295V18.838H19.4635V19.641H18.4295V21.5ZM17.5165 18.838V15.01L14.9425 18.838H17.5165ZM26.2353 21.5H25.1023L22.3193 18.2L21.5823 19.036V21.5H20.6693V14.163H21.5823V17.958L24.8273 14.163H25.9713L22.9133 17.65L26.2353 21.5Z" fill="#808080"></path></svg>
                        </svg>
                        <div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">White Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75">
                        <svg class="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.1499" cy="18" r="14.75" transform="rotate(90 18.1499 18)" stroke="url(#YellowGold14k-1)" stroke-width="1.5"></circle><path d="M18.1499 4.75C25.4677 4.75 31.3999 10.6822 31.3999 18C31.3999 25.3178 25.4677 31.25 18.1499 31.25C10.8321 31.25 4.8999 25.3178 4.8999 18C4.8999 10.6822 10.8321 4.75 18.1499 4.75Z" stroke="url(#YellowGold14k-2)" stroke-width="1.5"></path><path d="M12.5209 21.5H11.6079V15.373L10.4309 16.616L9.8809 16.055L11.7179 14.163H12.5209V21.5ZM18.1294 21.5H17.2164V19.641H13.7294V18.882L16.8754 14.163H18.1294V18.838H19.1634V19.641H18.1294V21.5ZM17.2164 18.838V15.01L14.6424 18.838H17.2164ZM25.9352 21.5H24.8022L22.0192 18.2L21.2822 19.036V21.5H20.3692V14.163H21.2822V17.958L24.5272 14.163H25.6712L22.6132 17.65L25.9352 21.5Z" fill="#C3990D"></path></svg></svg>
                        <div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">Yellow Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75">
                        <svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18.75" cy="18" r="14.75" transform="rotate(90 18.75 18)" stroke="url(#RoseGold14k-1)" stroke-width="1.5"></circle>
                          <path d="M18.75 4.75C26.0678 4.75 32 10.6822 32 18C32 25.3178 26.0678 31.25 18.75 31.25C11.4322 31.25 5.5 25.3178 5.5 18C5.5 10.6822 11.4322 4.75 18.75 4.75Z" stroke="url(#RoseGold14k-2)" stroke-width="1.5"></path>
                          <path d="M13.121 21.5H12.208V15.373L11.031 16.616L10.481 16.055L12.318 14.163H13.121V21.5ZM18.7295 21.5H17.8165V19.641H14.3295V18.882L17.4755 14.163H18.7295V18.838H19.7635V19.641H18.7295V21.5ZM17.8165 18.838V15.01L15.2425 18.838H17.8165ZM26.5353 21.5H25.4023L22.6193 18.2L21.8823 19.036V21.5H20.9693V14.163H21.8823V17.958L25.1273 14.163H26.2713L23.2133 17.65L26.5353 21.5Z" fill="#E16767"></path></svg>
                        </svg>
                        <div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">Rose Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"><svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.0498" cy="18" r="14.75" transform="rotate(90 18.0498 18)" stroke="url(#WhiteGold18k-1)" stroke-width="1.5"></circle><path d="M18.0498 4.75C25.3676 4.75 31.2998 10.6822 31.2998 18C31.2998 25.3178 25.3676 31.25 18.0498 31.25C10.732 31.25 4.7998 25.3178 4.7998 18C4.7998 10.6822 10.732 4.75 18.0498 4.75Z" stroke="url(#WhiteGold18k-2)" stroke-width="1.5"></path><path d="M12.4208 21.5H11.5078V15.373L10.3308 16.616L9.7808 16.055L11.6178 14.163H12.4208V21.5ZM18.3483 21.093C17.8497 21.4523 17.2263 21.632 16.4783 21.632C15.7303 21.632 15.1033 21.4523 14.5973 21.093C14.0987 20.7337 13.8493 20.2497 13.8493 19.641C13.8493 19.179 14.0143 18.7793 14.3443 18.442C14.6817 18.1047 15.0997 17.8627 15.5983 17.716C15.129 17.584 14.7403 17.3713 14.4323 17.078C14.1243 16.7773 13.9703 16.4033 13.9703 15.956C13.9703 15.34 14.2197 14.8707 14.7183 14.548C15.217 14.218 15.8037 14.053 16.4783 14.053C17.153 14.053 17.7397 14.218 18.2383 14.548C18.7443 14.8707 18.9973 15.34 18.9973 15.956C18.9973 16.4033 18.8433 16.7773 18.5353 17.078C18.2273 17.3713 17.835 17.584 17.3583 17.716C17.857 17.8627 18.2713 18.1047 18.6013 18.442C18.9387 18.7793 19.1073 19.179 19.1073 19.641C19.1073 20.2423 18.8543 20.7263 18.3483 21.093ZM16.4783 17.342C16.625 17.32 16.7717 17.2833 16.9183 17.232C17.0723 17.1807 17.2447 17.111 17.4353 17.023C17.626 16.9277 17.78 16.7993 17.8973 16.638C18.0147 16.4693 18.0733 16.2823 18.0733 16.077C18.0733 15.7103 17.9193 15.417 17.6113 15.197C17.3107 14.977 16.933 14.867 16.4783 14.867C16.0163 14.867 15.635 14.977 15.3343 15.197C15.0337 15.417 14.8833 15.7103 14.8833 16.077C14.8833 16.2823 14.942 16.4693 15.0593 16.638C15.1767 16.7993 15.3307 16.9277 15.5213 17.023C15.712 17.111 15.8807 17.1807 16.0273 17.232C16.1813 17.276 16.3317 17.3127 16.4783 17.342ZM16.4783 20.818C16.9477 20.818 17.3473 20.7007 17.6773 20.466C18.0147 20.2313 18.1833 19.9233 18.1833 19.542C18.1833 19.2487 18.066 18.992 17.8313 18.772C17.604 18.5447 17.3693 18.387 17.1273 18.299C16.8927 18.2037 16.6763 18.145 16.4783 18.123C16.2803 18.145 16.0603 18.2037 15.8183 18.299C15.5837 18.387 15.349 18.5447 15.1143 18.772C14.8797 18.992 14.7623 19.2487 14.7623 19.542C14.7623 19.9233 14.9273 20.2313 15.2573 20.466C15.5947 20.7007 16.0017 20.818 16.4783 20.818ZM26.0929 21.5H24.9599L22.1769 18.2L21.4399 19.036V21.5H20.5269V14.163H21.4399V17.958L24.6849 14.163H25.8289L22.7709 17.65L26.0929 21.5Z" fill="#808080"></path></svg></svg>
                        <div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">White Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"><svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.0498" cy="18" r="14.75" transform="rotate(90 18.0498 18)" stroke="url(#YellowGold18k-1)" stroke-width="1.5"></circle><path d="M18.0498 4.75C25.3676 4.75 31.2998 10.6822 31.2998 18C31.2998 25.3178 25.3676 31.25 18.0498 31.25C10.732 31.25 4.7998 25.3178 4.7998 18C4.7998 10.6822 10.732 4.75 18.0498 4.75Z" stroke="url(#YellowGold18k-2)" stroke-width="1.5"></path><path d="M12.4208 21.5H11.5078V15.373L10.3308 16.616L9.7808 16.055L11.6178 14.163H12.4208V21.5ZM18.3483 21.093C17.8497 21.4523 17.2263 21.632 16.4783 21.632C15.7303 21.632 15.1033 21.4523 14.5973 21.093C14.0987 20.7337 13.8493 20.2497 13.8493 19.641C13.8493 19.179 14.0143 18.7793 14.3443 18.442C14.6817 18.1047 15.0997 17.8627 15.5983 17.716C15.129 17.584 14.7403 17.3713 14.4323 17.078C14.1243 16.7773 13.9703 16.4033 13.9703 15.956C13.9703 15.34 14.2197 14.8707 14.7183 14.548C15.217 14.218 15.8037 14.053 16.4783 14.053C17.153 14.053 17.7397 14.218 18.2383 14.548C18.7443 14.8707 18.9973 15.34 18.9973 15.956C18.9973 16.4033 18.8433 16.7773 18.5353 17.078C18.2273 17.3713 17.835 17.584 17.3583 17.716C17.857 17.8627 18.2713 18.1047 18.6013 18.442C18.9387 18.7793 19.1073 19.179 19.1073 19.641C19.1073 20.2423 18.8543 20.7263 18.3483 21.093ZM16.4783 17.342C16.625 17.32 16.7717 17.2833 16.9183 17.232C17.0723 17.1807 17.2447 17.111 17.4353 17.023C17.626 16.9277 17.78 16.7993 17.8973 16.638C18.0147 16.4693 18.0733 16.2823 18.0733 16.077C18.0733 15.7103 17.9193 15.417 17.6113 15.197C17.3107 14.977 16.933 14.867 16.4783 14.867C16.0163 14.867 15.635 14.977 15.3343 15.197C15.0337 15.417 14.8833 15.7103 14.8833 16.077C14.8833 16.2823 14.942 16.4693 15.0593 16.638C15.1767 16.7993 15.3307 16.9277 15.5213 17.023C15.712 17.111 15.8807 17.1807 16.0273 17.232C16.1813 17.276 16.3317 17.3127 16.4783 17.342ZM16.4783 20.818C16.9477 20.818 17.3473 20.7007 17.6773 20.466C18.0147 20.2313 18.1833 19.9233 18.1833 19.542C18.1833 19.2487 18.066 18.992 17.8313 18.772C17.604 18.5447 17.3693 18.387 17.1273 18.299C16.8927 18.2037 16.6763 18.145 16.4783 18.123C16.2803 18.145 16.0603 18.2037 15.8183 18.299C15.5837 18.387 15.349 18.5447 15.1143 18.772C14.8797 18.992 14.7623 19.2487 14.7623 19.542C14.7623 19.9233 14.9273 20.2313 15.2573 20.466C15.5947 20.7007 16.0017 20.818 16.4783 20.818ZM26.0929 21.5H24.9599L22.1769 18.2L21.4399 19.036V21.5H20.5269V14.163H21.4399V17.958L24.6849 14.163H25.8289L22.7709 17.65L26.0929 21.5Z" fill="#C3990D"></path></svg></svg><div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">Yellow Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"><svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.0498" cy="18" r="14.75" transform="rotate(90 18.0498 18)" stroke="url(#RoseGold18k-1)" stroke-width="1.5"></circle><path d="M18.0498 4.75C25.3676 4.75 31.2998 10.6822 31.2998 18C31.2998 25.3178 25.3676 31.25 18.0498 31.25C10.732 31.25 4.7998 25.3178 4.7998 18C4.7998 10.6822 10.732 4.75 18.0498 4.75Z" stroke="url(#RoseGold18k-2)" stroke-width="1.5"></path><path d="M12.4208 21.5H11.5078V15.373L10.3308 16.616L9.7808 16.055L11.6178 14.163H12.4208V21.5ZM18.3483 21.093C17.8497 21.4523 17.2263 21.632 16.4783 21.632C15.7303 21.632 15.1033 21.4523 14.5973 21.093C14.0987 20.7337 13.8493 20.2497 13.8493 19.641C13.8493 19.179 14.0143 18.7793 14.3443 18.442C14.6817 18.1047 15.0997 17.8627 15.5983 17.716C15.129 17.584 14.7403 17.3713 14.4323 17.078C14.1243 16.7773 13.9703 16.4033 13.9703 15.956C13.9703 15.34 14.2197 14.8707 14.7183 14.548C15.217 14.218 15.8037 14.053 16.4783 14.053C17.153 14.053 17.7397 14.218 18.2383 14.548C18.7443 14.8707 18.9973 15.34 18.9973 15.956C18.9973 16.4033 18.8433 16.7773 18.5353 17.078C18.2273 17.3713 17.835 17.584 17.3583 17.716C17.857 17.8627 18.2713 18.1047 18.6013 18.442C18.9387 18.7793 19.1073 19.179 19.1073 19.641C19.1073 20.2423 18.8543 20.7263 18.3483 21.093ZM16.4783 17.342C16.625 17.32 16.7717 17.2833 16.9183 17.232C17.0723 17.1807 17.2447 17.111 17.4353 17.023C17.626 16.9277 17.78 16.7993 17.8973 16.638C18.0147 16.4693 18.0733 16.2823 18.0733 16.077C18.0733 15.7103 17.9193 15.417 17.6113 15.197C17.3107 14.977 16.933 14.867 16.4783 14.867C16.0163 14.867 15.635 14.977 15.3343 15.197C15.0337 15.417 14.8833 15.7103 14.8833 16.077C14.8833 16.2823 14.942 16.4693 15.0593 16.638C15.1767 16.7993 15.3307 16.9277 15.5213 17.023C15.712 17.111 15.8807 17.1807 16.0273 17.232C16.1813 17.276 16.3317 17.3127 16.4783 17.342ZM16.4783 20.818C16.9477 20.818 17.3473 20.7007 17.6773 20.466C18.0147 20.2313 18.1833 19.9233 18.1833 19.542C18.1833 19.2487 18.066 18.992 17.8313 18.772C17.604 18.5447 17.3693 18.387 17.1273 18.299C16.8927 18.2037 16.6763 18.145 16.4783 18.123C16.2803 18.145 16.0603 18.2037 15.8183 18.299C15.5837 18.387 15.349 18.5447 15.1143 18.772C14.8797 18.992 14.7623 19.2487 14.7623 19.542C14.7623 19.9233 14.9273 20.2313 15.2573 20.466C15.5947 20.7007 16.0017 20.818 16.4783 20.818ZM26.0929 21.5H24.9599L22.1769 18.2L21.4399 19.036V21.5H20.5269V14.163H21.4399V17.958L24.6849 14.163H25.8289L22.7709 17.65L26.0929 21.5Z" fill="#E16767"></path></svg></svg><div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">Rose Gold</div>
                      </button>
                      <button className="min-w-[5.125rem] shrink-0 pt-1.25 p-2 pb-1.75 md:px-1 md:min-w-0 text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"><svg className="w-13.5 h-13.5 p-1.75 md:p-0 md:w-10 md:h-10 block mx-auto" viewBox="0 0 36 36"><svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.0498" cy="18" r="14.75" transform="rotate(90 18.0498 18)" stroke="url(#Platinum-1)" stroke-width="1.5"></circle><path d="M18.0498 4.75C25.3676 4.75 31.2998 10.6822 31.2998 18C31.2998 25.3178 25.3676 31.25 18.0498 31.25C10.732 31.25 4.7998 25.3178 4.7998 18C4.7998 10.6822 10.732 4.75 18.0498 4.75Z" stroke="url(#Platinum-2)" stroke-width="1.5"></path><path d="M13.3208 21.5H12.4078V14.163H15.3558C16.0671 14.163 16.6281 14.3757 17.0388 14.801C17.4495 15.2263 17.6548 15.7507 17.6548 16.374C17.6548 16.9973 17.4458 17.5217 17.0278 17.947C16.6171 18.3723 16.0598 18.585 15.3558 18.585H13.3208V21.5ZM15.2458 17.771C15.6785 17.771 16.0305 17.6427 16.3018 17.386C16.5731 17.122 16.7088 16.7847 16.7088 16.374C16.7088 15.9633 16.5731 15.6297 16.3018 15.373C16.0305 15.109 15.6785 14.977 15.2458 14.977H13.3208V17.771H15.2458ZM21.5919 21.5H20.6789V14.977H18.3579V14.163H23.9239V14.977H21.5919V21.5Z" fill="#808080"></path></svg></svg><div className="-mt-0.5 md:mt-0 text-1.5sm leading-4 overflow-hidden text-ellipsis font-proximaNovaCondensed md:text-xs md:leading-tight">Platinum</div></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="FilterRelativeContainer relative min-w-[10-rem] ">
              <button  onClick={()=>setShowPriceFilter(!showPriceFilter) } className="flex items-center w-full gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md transition-shadow duration-300 ">
                <div className="flex-1 ">
                  <div className="text-black text-sm leading-none">Price (low-to-high)</div>
                </div>
                <div className="relative w-6 h-6 text-black transition-transform duration-300 ">
                  <svg className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z" fill="currentColor"></path>
                    </svg>
                  </svg>
                </div>
              </button>
              <div className={`pt-2 absolute top-full left-0 right-0 z-[60] ${!showPriceFilter ? "invisible" : ""} `}>
                <div className="border-2 border-solid border-customGray-50 rounded-md bg-white overflow-hidden">
                  <button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 bg-customGray-50">Price (low-to-high)</button>
                  <button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-colors duration-300 hover:bg-customGray-50 ">Price (high-to-low)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 pb-3 mt-3 md:hidden">
          <div className="flex justify-start items-center flex-wrap gap-2 relative">
            <button className="flex items-center justify-center gap-1.5 bg-white text-black text-xs leading-[0.875rem] py-1.25 px-2.5 rounded-md border border-borders">
              <svg className="block w-2.5 h-2.5">
                <svg viewBox="0 0 16 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                  <div className="text-black text-xs leading-none">Price (low-to-high)</div>
                </div>
                <div className="relative w-6 h-6 text-black transition-transform duration-300 ">
                  <svg className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z" fill="currentColor"></path>
                    </svg>
                  </svg>
                </div>
              </button>
            </div>
            <div className="ml-auto flex bg-white rounded-md border-borders border overflow-hidden relative md:hidden">
              <button type="button" className="p-2 grid grid-cols-2 gap-0.5 w-6.5 h-6.5">
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-black"></div>
              </button>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3.5 bg-[#D1D1D1]"></div>
              <button type="button" className="p-2 grid grid-cols-1 gap-0.5 w-6.5 h-6.5">
                <div className="border border-black transition-colors duration-300 h-full bg-transparent"></div>
                <div className="border border-black transition-colors duration-300 h-full bg-transparent"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Ring Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.products?.edges.map(({ node }) => {
              const firstImage = node?.images?.edges[0]?.node;
              const firstVariant = node?.variants?.edges[0]?.node;
              const price = firstVariant?.price?.amount || "0.00";
              const formattedPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: firstVariant?.price?.currencyCode || 'USD'
              }).format(price);

              return (
                <div key={node.id} className="border border-gray-200 rounded-lg p-4 relative group">
                  <button
                    className="absolute right-4 top-4 z-[9] transition-colors duration-200 ease-in-out"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-6 w-6 text-gray-400 group-hover:text-red-500" />
                  </button>

                  <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
                    {firstImage ? (
                      <img
                        src={firstImage.src}
                        alt={firstImage.altText || node.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <p className="text-gray-400">No image available</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold truncate">{node.title}</h3>
                    <p className="text-gray-900 font-medium">{formattedPrice}</p>

                    {firstVariant?.compareAtPrice && (
                      <p className="text-sm text-gray-500 line-through">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: firstVariant.compareAtPrice.currencyCode
                        }).format(firstVariant.compareAtPrice.amount)}
                      </p>
                    )}

                    <button className="w-full mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">
                      More Info
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RingSelector;
