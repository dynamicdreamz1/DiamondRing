import React from 'react';
import Slider from 'react-slick';
import { reviews } from '../../Utility/Constant';



const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-emerald-500"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M15 18l-6-6 6-6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M9 18l6-6-6-6" />
    </svg>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
    >
        <ChevronRightIcon />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 z-10"
    >
        <ChevronLeftIcon />
    </button>
);

const ReviewSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="review-slider-sec">
            <div className="container mx-auto px-4">
                <div className='review-slider-sub'>
                <div className="mb-8 excellent-sec text-center">
                    <div className="mb-5">
                        <h2>Excellent</h2>
                        <div className="flex justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Based on 815 reviews</p>
                </div>
                 <div className='slider-sec'>               
                <Slider {...settings} className="review-slider">
                    {reviews.map((review, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white p-6 rounded-lg  min-h-[200px]">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className='flex'>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                    </div>
                                    <div className='verification-label-wrapper flex items-center gap-1'>
                                        <div className='verification-label-icon-sec'>
                                        <div className='label-icon'>
                                            <svg viewBox="0 0 14 14" width="14px" height="14px" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"></path>
                                            </svg>    
                                        </div>
                                        <div className="tp-widget-review__source__information"><div className="tp-widget-review__source__arrow"></div>
                                            <div className="information-title">Verified review</div>
                                            <div className="information-text"><a href="https://support.trustpilot.com/hc/articles/223402468#verified-reviews-2" target="_blank">Learn more</a> about review types</div></div>
                                        </div>    
                                        <div class="label-text">Verified</div>
                                    </div>
                                </div>
                                <h3 className="font-semibold mb-2">{review.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{review.content}...</p>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <span style={{color:"rgba(0,0,0,.6)",fontWeight:"600"}}>{review.author}</span>
                                    <div className="flex items-center gap-2">
                                        <span>{review.date}</span>
                                        {review.verified && (
                                            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
                </div>                     
            </div>
        </section>
    );
};

export default ReviewSlider;