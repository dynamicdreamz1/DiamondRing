import React, { useState } from 'react'
import { productSliderBadgesData } from '../../Utility/Constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Correct CSS import for the latest version of Swiper

const EngagementRingDetailSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [productSliderBadges, setProductSliderBadges] = useState(productSliderBadgesData)

    const handleNext = () => {
        setProductSliderBadges([
            ...productSliderBadges.slice(1, 4),
            ...productSliderBadges.slice(0, 1),
            ...productSliderBadges.slice(4)
        ]);
        setCurrentIndex((currentIndex + 1) % 3);
    };

    const handlePrev = () => {
        setProductSliderBadges([
            ...productSliderBadges.slice(productSliderBadges.length - 1, productSliderBadges.length),
            ...productSliderBadges.slice(0, productSliderBadges.length - 1)
        ]);
        setCurrentIndex((currentIndex - 1 + 3) % 3);
    };


    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };


    return (
        <section className="our-coupeles-sec py-16 px-5 md:py-24">
            <div className="container mx-auto px-4">
                <div className="our-coupeles-heading text-center uppercase mb-8 md:mb-12 xl:mb-20 md:flex md:justify-between md:gap-4">
                    <h2 className="cfpb-fib-title font-seasons font-bold text-white" tabIndex="-1">OUR COUPLES</h2>
                    <div className="hidden shrink-0 md:flex gap-5 inherit-title-color">
                        <button type="button" className="w-8 h-8 flex justify-center items-center text-current" onClick={handlePrev}>
                            <svg className="w-8 h-8" aria-hidden="true" focusable="false">
                                <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.1212 4.08742L7.87879 14.3298L18.1212 24.5723" stroke="currentColor" strokeWidth="2.5"></path>
                                </svg>
                            </svg>
                        </button>
                        <button type="button" className="w-8 h-8 flex justify-center items-center text-current" onClick={handleNext}>
                            <svg className="w-8 h-8" aria-hidden="true" focusable="false">
                                <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" strokeWidth="2.5"></path>
                                </svg>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="our-coupeles-box-main">
                    <Swiper
                        spaceBetween={10}  // Space between slides
                        slidesPerView={1}  // Show one slide at a time
                        loop={true}         // Infinite looping
                        onSlideChange={handleSlideChange}  // Update current index
                        navigation={true}   // Enable next/prev buttons
                        autoplay={{ delay: 3000 }}  // Autoplay with a delay
                        effect="slide"      // Smooth slide effect
                    >
                        {productSliderBadges.slice(0, 3).map((slide, index) => (
                            <SwiperSlide key={index}>
                                <a href="#" className={`our-coupeles-boxes cpucb-slide relative rounded-xl overflow-hidden ${index === currentIndex ? 'active' : ''}`}>
                                    <div className="cpucb-image-container absolute-picture-container overflow-hidden">
                                        <img className="cpucb-image absolute-image" src={slide.icon} alt={slide.title} />
                                    </div>
                                    <div className="cpucb-text-container absolute bottom-0 px-6 py-5 w-full">
                                        <h4 className="cpucb-slide-title uppercase" tabIndex="-1">{slide.title}</h4>
                                        <p className="cpucb-slide-text mt-2">{slide.description}</p>
                                        <span className="cpucb-slide-link mt-4 flex justify-between items-center gap-3">
                                            Read More
                                            <svg className="w-8 h-3" viewBox="0 0 34 14">
                                                <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect y="6.5" width="32" height="1" rx="0.5" fill="currentColor"></rect>
                                                    <path d="M26.3555 12.7271L32.1226 7.00005L26.3555 1.27295" stroke="currentColor" strokeLinecap="round"></path>
                                                </svg>
                                            </svg>
                                        </span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default EngagementRingDetailSlider