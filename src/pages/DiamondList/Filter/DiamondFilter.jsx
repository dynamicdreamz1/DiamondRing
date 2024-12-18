import React, { useEffect, useState } from 'react'
import { resetFilters, updateFilter } from '../../../store/slices/diamondFilterSlice';
import { useSelector, useDispatch } from 'react-redux';
import DiamondShapeFilter from './DiamondShapeFilter';
import CertificateFilter from './CertificateFilter';
import PriceFilter from './PriceFilter';
import CaratFilter from './CaratFilter';
import AdvancedFilter from './AdvancedFilter';
import AdvancedSlideFilter from './AdvancedSlideFilter';
import FilterSlide from './FilterSlide';

const DiamondFilter = () => {
    const filters = useSelector((state) => state.diamondFilter);
    const [cutFilter, setCutFilter] = useState([])
    const dispatch = useDispatch();


    const handleRingTypeSelection = (isLabGrown) => {
        dispatch(updateFilter({ labgrown: isLabGrown })); // Update the Redux state with true/false
        dispatch(updateFilter({ page: 0 }));
    };

    const handleResetFilter = () => {
        dispatch(resetFilters()); // Update the Redux state with true/false
    };

    useEffect(() => {
        if (cutFilter) {
            dispatch(updateFilter({ cut: cutFilter })); // Update the Redux state with true/false
            dispatch(updateFilter({ page: 0 }));
        }
    }, [cutFilter, dispatch])


    return (
        <>
            <div className='stone-button-main flex rounded-md relative bg-customGray-50 border border-borders max-w-[17.5rem] md:relative  md:max-w-[31rem] mx-auto md:z-10 my-3 md:my-6'>
                <div
                    className={`absolute w-1/2 top-0 bottom-0 pointer-events-none transition-all duration-300 rounded-md ${!filters.labgrown
                        ? 'left-0 bg-white ring-1 md:ring-2 ring-black'
                        : 'left-1/2 bg-gray-200 ring-0'
                        }`}
                ></div>
                <button
                    className={`flex justify-center items-center gap-1 p-1 rounded-md w-1/2 transition ease-in-out duration-300 text-xs md:p-2.5 md:gap-1.5 md:text-sm ${!filters.labgrown
                        ? 'bg-white text-black ring-1 md:ring-2 ring-black'
                        : 'bg-transparent text-gray-500'
                        }`}
                    onClick={() => handleRingTypeSelection(false)}
                >
                    <svg className="block relative w-5 h-5 md:w-7 md:h-7">
                        <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3711 31.6668L26.3115 26.7114H36.7596L41.7 31.6668L31.5306 40.7114L21.3711 31.6668Z" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M29.6836 34.6301L26.3887 31.6976L28.3073 29.7737" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M31.5312 40.5869L36.0564 31.7108L32.5867 26.7266" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M19.8633 11.6667H29.2485" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M27.3716 18.563V11.6667" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M21.7402 11.6667V18.563" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M21.74 18.563L14.1189 33.805C13.3084 35.4261 14.4872 37.3334 16.2997 37.3334H23.7698M27.3711 18.563L30.1811 24.3413" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M21.7861 28.4482C22.0623 28.4482 22.2861 28.2244 22.2861 27.9482C22.2861 27.6721 22.0623 27.4482 21.7861 27.4482L21.7861 28.4482ZM19.8882 27.9483L19.8882 28.4483H19.8882L19.8882 27.9483ZM16.8042 28.4483L19.8882 28.4483L19.8882 27.4483L16.8042 27.4483L16.8042 28.4483ZM19.8882 28.4483L21.7861 28.4482L21.7861 27.4482L19.8882 27.4483L19.8882 28.4483Z" fill="currentColor"></path>
                        </svg>
                    </svg>
                    <span className="leading-none relative">Lab Grown</span>
                </button>
                <button
                    className={`flex justify-center items-center gap-1 p-1 rounded-md w-1/2 transition ease-in-out duration-300 text-xs md:p-2.5 md:gap-1.5 md:text-sm ${filters.labgrown
                        ? 'bg-white text-black ring-1 md:ring-2 ring-black'
                        : 'bg-transparent text-gray-500'
                        }`}
                    onClick={() => handleRingTypeSelection(true)}
                >            <svg className="block relative w-5 h-5 md:w-7 md:h-7">
                        <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.983 24.5301C26.085 24.7867 26.3757 24.912 26.6323 24.81C26.8889 24.708 27.0142 24.4173 26.9122 24.1607L25.983 24.5301ZM24.5 19.7131H24V19.8088L24.0354 19.8978L24.5 19.7131ZM26.9122 24.1607C26.4453 22.9861 26.1874 22.4047 25.9308 21.8265C25.6772 21.2549 25.425 20.6864 24.9646 19.5284L24.0354 19.8978C24.5023 21.0724 24.7602 21.6538 25.0168 22.232C25.2704 22.8036 25.5226 23.372 25.983 24.5301L26.9122 24.1607ZM25 19.7131C25 17.3572 26.91 15.4473 29.2658 15.4473V14.4473C26.3577 14.4473 24 16.805 24 19.7131H25ZM29.2658 15.4473H34.0386V14.4473H29.2658V15.4473Z" fill="currentColor"></path>
                            <path d="M24.5 38C21.83 38 19.2199 37.2082 16.9998 35.7248C14.7797 34.2414 13.0494 32.133 12.0276 29.6662C11.0058 27.1994 10.7385 24.485 11.2594 21.8663C11.7803 19.2475 13.066 16.8421 14.9541 14.9541C16.8421 13.066 19.2475 11.7803 21.8663 11.2594C24.485 10.7385 27.1994 11.0058 29.6662 12.0276C32.133 13.0494 34.2414 14.7797 35.7248 16.9998C37.2082 19.2199 38 21.83 38 24.5" stroke="currentColor" stroke-linecap="round"></path>
                            <path d="M11.1831 23.4982C11.6013 24.3773 12.2242 24.6743 13.0136 24.645C14.0429 24.6068 14.6526 23.5467 14.8624 23.1818C15.1475 22.6863 15.1447 22.3984 15.4779 21.0282C15.6644 20.2613 15.8379 19.6414 15.9548 19.2397C16.8954 19.0807 17.836 18.9218 18.7766 18.7628C19.8681 18.3723 20.6771 17.6257 20.6843 16.8551C20.6925 15.9855 19.6769 15.3763 18.6972 14.7883C17.7897 14.2438 16.949 13.9958 16.4108 13.8743" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M12.8403 31.0123C12.9249 30.5361 13.1116 29.8018 13.5706 29.0168C13.9339 28.3957 14.3533 27.6754 14.8424 27.7052C15.4122 27.7399 15.7774 28.7744 16.0827 29.6388C16.4145 30.5785 16.5296 31.4091 16.5712 31.9976C16.5831 33.0886 16.5952 34.1799 16.6071 35.2709" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M21.3711 31.6668L26.3115 26.7114H36.7596L41.7 31.6668L31.5306 40.7114L21.3711 31.6668Z" stroke="currentColor" stroke-miterlimit="10"></path>
                            <path d="M29.6836 34.6301L26.3887 31.6976L28.3073 29.7737" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round"></path>
                            <path d="M31.5312 40.5869L36.0564 31.7108L32.5867 26.7266" stroke="currentColor" stroke-miterlimit="10"></path>
                        </svg>
                    </svg>
                    <span className="leading-none relative">Natural</span>
                </button>
            </div>
            <DiamondShapeFilter />
            <div className="w-full hidden md:flex justify-center items-center col-span-2 xl:w-full collection-filters-item-with-custom-width-and-order gap-1.5 py-6">
                <div className="flex-1 h-px bg-borders"></div>
                <button onClick={() => handleResetFilter()} type="button" className="p-0 bg-white text-customGray-300 flex items-start gap-1.5 text-xs leading-none font-medium">
                    <span>Reset</span>
                    <svg className="block w-2.5 h-2.5" viewBox="0 0 14 14">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.75736 11.2426C3.67726 12.1625 4.87123 12.7585 6.15934 12.9408C7.44745 13.1231 8.7599 12.8818 9.89892 12.2532C11.0379 11.6247 11.9418 10.6429 12.4743 9.45597C13.0068 8.26901 13.1391 6.94112 12.8513 5.67243C12.5634 4.40373 11.871 3.26296 10.8784 2.42203C9.88581 1.5811 8.64677 1.08556 7.34802 1.0101C6.04927 0.934642 4.76118 1.28335 3.67786 2.00366C2.59454 2.72398 1.77468 3.77689 1.34184 5.00371" stroke="currentColor"></path>
                            <path d="M1 1V5H5" stroke="currentColor"></path>
                        </svg>
                    </svg>
                </button>
                <div className="flex-1 h-px bg-borders"></div>
            </div>


            <div className='collection-filter-main grid grid-cols-1 md:grid-cols-3 w-full items-center gap-6 pt-6 md:pt-0'>
                <div className='collection-filter-item'>
                    <div className="flex gap-1 items-end mb-3 md:gap-0.5 md:mb-2 ">
                        <div className="text-base font-bold text-black leading-none">Color</div>
                        <button className="w-4 h-4 md:w-3 md:h-3 mb-1 cursor-help" title="help">
                            <svg className="w-4 h-4 md:w-3 md:h-3 text-customGray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                    <g>
                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </svg>
                        </button>
                    </div>
                    <FilterSlide  label={"color"}  options={["J", "I", "H", "G", "F", "E", "D"]} />
                </div>

                <div className='collection-filter-item'>
                    <div className="flex gap-1 items-end mb-3 md:gap-0.5 md:mb-2 ">
                        <div className="text-base font-bold text-black leading-none">Clarity</div>
                        <button className="w-4 h-4 md:w-3 md:h-3 mb-1 cursor-help" title="help">
                            <svg className="w-4 h-4 md:w-3 md:h-3 text-customGray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                    <g>
                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </svg>
                        </button>
                    </div>
                    <FilterSlide label={"clarity"} options={["SI1", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"]} />
                </div>

                <div className='collection-filter-item'>
                    <div className="flex gap-1 items-end mb-3 md:gap-0.5 md:mb-2 ">
                        <div className="text-base font-bold text-black leading-none">Cut</div>
                        <button className="w-4 h-4 md:w-3 md:h-3 mb-1 cursor-help" title="help">
                            <svg className="w-4 h-4 md:w-3 md:h-3 text-customGray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                    <g>
                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </svg>
                        </button>
                    </div>
                    <AdvancedSlideFilter setFilter={setCutFilter} />
                </div>
            </div>


            <div className='collection-range-main grid grid-cols-1 md:grid-cols-3 w-full items-center gap-6 py-6'>
                <CaratFilter />
                <PriceFilter />
                <CertificateFilter />
            </div>
            <AdvancedFilter />

            <div className="hidden md:block text-right collection-filters-item-with-custom-width-and-order md:col-span-2 xl:w-full">
                <div className="FilterRelativeContainer relative inline-flex min-w-[10rem]">
                    <button className="flex items-center w-full gap-2 text-left py-1.5 pl-4 pr-1 bg-customGray-50 rounded-md transition-all duration-300">
                        <div className="flex-1">
                            <div className="text-black text-sm leading-none">Price (low-to-high)</div>
                        </div>
                        <div className="relative w-6 h-6 text-black transition-all duration-300 rotate-180">
                            <svg className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <svg viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.696693 0.646447C0.501431 0.841709 0.501431 1.15829 0.696693 1.35355L5.64644 6.3033C5.8417 6.49856 6.15829 6.49856 6.35355 6.3033C6.35371 6.30314 6.35388 6.30297 6.35404 6.30281L11.3033 1.35355C11.4986 1.15829 11.4986 0.841709 11.3033 0.646447C11.108 0.451184 10.7915 0.451184 10.5962 0.646447L5.99999 5.24264L1.4038 0.646447C1.20854 0.451184 0.891955 0.451184 0.696693 0.646447Z" fill="currentColor"></path>
                                </svg>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default DiamondFilter