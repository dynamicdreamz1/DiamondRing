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
        slidesToShow: 3,
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
        <div className="max-w-6xl mx-auto px-8 py-6 relative">
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-semibold">Excellent</h2>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-600">Based on 815 reviews</p>
            </div>

            <Slider {...settings} className="review-slider">
                {reviews.map((review, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white p-6 rounded-lg shadow-sm border min-h-[200px]">
                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </div>
                            <h3 className="font-semibold mb-2">{review.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{review.content}...</p>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{review.author}</span>
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
    );
};

export default ReviewSlider;