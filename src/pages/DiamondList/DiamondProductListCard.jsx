import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import WishList from './DiamondWishList';
import { Link } from "react-router-dom"
import { addProductTabs } from '../../store/slices/TabProductSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LeftSideDiamondModel from './Filter/LeftSideDiamondModel';


const DiamondProductListCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedProductModel, setselectedProductModel] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { diamonds, error, loading } = useSelector((state) => state.diamond);
    const getTabsProduct = useSelector((state) => state.getTabsProduct);
    const ringExists = getTabsProduct?.tabs?.ring;

    const handleDiamondAction = (diamond) => {
        setIsLoading(true);

        // Delay the action by 2 seconds
        setTimeout(() => {
            setIsLoading(false);
            const productWithType = {
                diamond: { ...diamond, type: 'diamond' },
                ring: getTabsProduct?.tabs?.ring,
                currentStep: getTabsProduct?.tabs?.ring ? 2 : 1
            };
            dispatch(addProductTabs(productWithType));
            setselectedProductModel(true);

            if (getTabsProduct?.tabs?.ring && diamond) {
                if (getTabsProduct?.tabs?.ring && diamond) {
                    dispatch(addProductTabs({
                        ...productWithType,
                        finelProduct: { price: "", type: 'finelProduct' },
                        currentStep: 3
                    }));
                    navigate('/complete-product');
                }
            }
        }, 2000); // Delay for 2 seconds
    }

    if (error) return <p>Error: {error}</p>;

    return (
        <div className='pt-5 clone-stone-diomomg-boox-main grid tangiblee-grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 items-start'>
            {diamonds?.length > 0 ? diamonds?.map((diamond, key) => (
                <div key={key} className='clone-stone-diomomg-item CenterStoneProductCard relative group md:hover:z-30'>
                    <>
                        <div className='border-borders border rounded-lg overflow-hidden md:block'>
                            <div className='CenterStoneProductCard__ImageContainer relative w-full DiamondImageContainer md:w-full md:group-hover:relative md:group-hover:z-10'>
                                <WishList />
                                <div className='CenterStoneProductCard__ImageWrapper relative pt-[100%]'>
                                    <Link to={`/diamond-list/${diamond.diamond.certificate.certNumber}`}>
                                        <img className='absolute w-full h-full top-0 left-0 object-cover'
                                            src={diamond?.diamond?.v360?.url ? `${diamond?.diamond?.v360?.url}/${diamond?.diamond?.v360?.top_index ? diamond?.diamond?.v360?.top_index : "0"}.jpg` : diamond?.diamond?.image}
                                            alt="diamond"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white pt-0.5 md:hidden">
                                <div className="CenterStoneProductCard__StoneInfo flex flex-wrap">
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">
                                            {diamond.diamond.certificate.carats}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">
                                            {diamond.diamond.certificate.color}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">
                                            {diamond?.diamond.certificate.clarity}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">cut</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className="hidden md:hidden mt-auto text-center text-customGray-400 text-1.5xs leading-tight">GIA - Natural Diamond</div>
                            </div>
                            <div className="hidden md:block bg-white pt-4 ">
                                <div className="px-4 flex items-start gap-1 justify-between mb-1">
                                    <div className="text-black text-sm leading-tight flex-grow whitespace-nowrap overflow-hidden text-ellipsis">{diamond?.diamond.certificate.shape}</div>
                                    <div className="shrink-0 flex items-center gap-1 flex-wrap">
                                        <div className="text-sm leading-tight text-customGray-500">${diamond.price}</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center">
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">
                                            {diamond.diamond.certificate.carats}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">
                                            {diamond.diamond.certificate.color}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">
                                            {diamond?.diamond.certificate.clarity}
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                    <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                        <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">
                                            Excellent
                                        </div>
                                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">cut</div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white -top-5 -left-5 -right-5 xl:-top-6 xl:-left-6 xl:-right-6 border-2 border-black rounded-4xl -bottom-36"></div>
                        <div className="absolute top-full left-0 right-0 hidden md:group-hover:block pt-4 -mt-[4.75rem]">
                            <div className="px-4 mb-1 flex items-start gap-1 justify-between">
                                <div className="flex-grow">
                                    <div className="text-black text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis"> {diamond?.diamond.certificate.shape}</div>
                                    <div className="w-full text-customGray-300 text-sm leading-none mt-1"><span>With setting: </span><span>$1,522</span></div>
                                </div>
                                <div className="shrink-0 flex flex-col items-end gap-1 flex-wrap">
                                    <div className="text-sm leading-tight text-customGray-500">${diamond.price}</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                    <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">
                                        {diamond.diamond.certificate.carats}
                                    </div>
                                    <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">carat</div>
                                </div>
                                <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                    <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">
                                        {diamond.diamond.certificate.color}
                                    </div>
                                    <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">
                                        color
                                        <button className="w-3 h-3 cursor-help md:hidden" title="help">
                                            <svg className="w-3 h-3 text-customGray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                    <g>
                                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                                    </g>
                                                </svg>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                </div>
                                <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                    <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis uppercase">
                                        {diamond?.diamond.certificate.clarity}
                                    </div>
                                    <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">
                                        clarity
                                        <button className="w-3 h-3 cursor-help md:hidden" title="help">
                                            <svg className="w-3 h-3 text-customGray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                    <g>
                                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                                    </g>
                                                </svg>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                </div>
                                <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                                    <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
                                    <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">
                                        cut
                                        <button className="w-3 h-3 cursor-help md:hidden" title="help">
                                            <svg className="w-3 h-3 text-customGray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                                                    <g>
                                                        <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                                                    </g>
                                                </svg>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-2 flex-wrap mt-2">
                                <Link to={`/diamond-list/${diamond.diamond.certificate.certNumber}`} className="basis-1/3 grow rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 text-center min-h-[3rem] flex justify-center items-center border-2 border-black" aria-hidden="false">
                                    More Info
                                </Link>
                                <button onClick={() => handleDiamondAction(diamond)} className="basis-3/5 grow rounded-full text-sm font-semibold leading-tight bg-black text-white p-3 text-center min-h-[3rem] border-2 border-black whitespace-nowrap relative overflow-hidden">
                                    <div className="flex justify-center items-center gap-1 transition-transform duration-500 text-ellipsis overflow-hidden">
                                        {isLoading ? (
                                            <span className="loaders">Loading...</span> // Add a loader component or animation here
                                        ) : (
                                            <span>{ringExists ? "Complete your ring" : "Add setting"}</span>
                                        )}

                                        <svg className="w-3 h-3" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.5 15.8298L12 9.3298L5.5 2.8298"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            ></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                            <div className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$193</span> <button type="button" className="underline cursor-pointer">Learn more</button></div>
                        </div>
                    </>
                </div>
            )) :
                <>
                    {!loading &&
                        <p>
                            No Data Found Please reset Filter
                        </p>
                    }
                </>
            }
            <LeftSideDiamondModel setselectedProductModel={setselectedProductModel} selectedProductModel={selectedProductModel} />
        </div>
    )
}

export default DiamondProductListCard