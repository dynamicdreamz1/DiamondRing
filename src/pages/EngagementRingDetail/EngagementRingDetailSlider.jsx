import React from 'react';
import Slider from 'react-slick';
import { productSliderBadgesData } from '../../Utility/Constant';

// Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EngagementRingDetailSlider = () => {
    // Slider configuration
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    };

    // Custom Next Arrow Component
    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <button 
                type="button" 
                className="slick-next w-8 h-8 flex justify-center items-center text-current absolute top-1/2 right-0 transform -translate-y-1/2" 
                onClick={onClick}
            >
                <svg className="w-8 h-8" aria-hidden="true" focusable="false">
                    <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.87891 24.5722L18.1213 14.3298L7.87891 4.0874" stroke="currentColor" strokeWidth="2.5"></path>
                    </svg>
                </svg>
            </button>
        );
    }

    // Custom Previous Arrow Component
    function CustomPrevArrow(props) {
        const { onClick } = props;
        return (
            <button 
                type="button" 
                className="slick-prev w-8 h-8 flex justify-center items-center text-current absolute top-1/2 left-0 z-10 transform -translate-y-1/2" 
                onClick={onClick}
            >
                <svg className="w-8 h-8" aria-hidden="true" focusable="false">
                    <svg viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1212 4.08742L7.87879 14.3298L18.1212 24.5723" stroke="currentColor" strokeWidth="2.5"></path>
                    </svg>
                </svg>
            </button>
        );
    }

    return (
        <section className="our-coupeles-sec py-16 px-5 md:py-24">
            <div className="container mx-auto px-4">
                <div className="our-coupeles-heading text-center uppercase mb-8 md:mb-12 xl:mb-20 md:flex md:justify-between md:gap-4">
                    <h2 className="cfpb-fib-title font-seasons font-bold text-white" tabIndex="-1">OUR COUPLES</h2>
                </div>

                <Slider {...settings}>
                    {productSliderBadgesData.map((slide, index) => (
                        <div key={index} className="px-2">
                            <div
                                className="our-coupeles-boxes cpucb-slide relative rounded-xl overflow-hidden"
                            >
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
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default EngagementRingDetailSlider;