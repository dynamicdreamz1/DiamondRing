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
    const { diamonds, error } = useSelector((state) => state.diamond);
    const getTabsProduct = useSelector((state) => state.getTabsProduct);
    const ringExists = getTabsProduct?.tabs?.ring;


    const handleDiamondAction = (diamond) => {
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
    }
    

    if (error) return <p>Error: {error}</p>;

    // if (loading)
    //     return (
    //         <div className="ring-loader-main-sec">
    //             <p>
    //                 <div className="ring-loader">
    //                     <div className="ring-circel"></div>
    //                     <div className="diamond">
    //                         <svg className="w-13.5 h-13.5 md:w-11 md:h-11 block mx-auto" viewBox="0 0 48 48"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0261 21.7217L18.6439 15.8039L18.3498 21.597L18.3468 25.2554L17.0261 21.7217ZM29.3973 26.6255C29.291 26.9279 29.1647 27.2269 29.0218 27.5193C28.4271 28.742 27.6163 29.6391 27.1779 30.0777C27.0582 30.1973 26.9652 30.2837 26.912 30.3303C26.1312 31.0479 25.3071 31.5762 24.4998 31.965C22.6923 32.8322 20.9711 32.9983 19.9976 32.9983C19.0273 32.9983 17.3029 32.8322 15.4987 31.9617C14.6913 31.5762 13.8673 31.0446 13.0864 30.3303C13.0333 30.2804 12.9403 30.1973 12.8207 30.0777C12.3788 29.6358 11.568 28.7387 10.9766 27.5193C10.8336 27.2269 10.7074 26.9279 10.6011 26.6255C10.0463 25.1136 9.88 23.4856 10.0229 21.7777C10.1426 20.4155 10.4615 19.0232 10.9401 17.641C11.485 16.0661 12.2358 14.5011 13.1495 12.9627C14.0832 11.3911 15.1764 9.89258 16.3492 8.52698C17.1168 7.62989 17.9209 6.79254 18.7383 6.03168C19.2832 5.52661 19.765 5.17444 20.0008 5.00165C20.2335 5.17774 20.7186 5.52997 21.2601 6.03168C22.0775 6.79254 22.8817 7.62989 23.6459 8.52698C24.822 9.89258 25.9119 11.3911 26.8688 12.9993C27.7626 14.5011 28.5135 16.0661 29.055 17.641C29.537 19.0232 29.8558 20.4155 29.9789 21.8143C30.1183 23.4856 29.9523 25.1136 29.3973 26.6255ZM26.0094 13.5107C25.6033 12.8282 25.1582 12.163 24.6953 11.5087L23.2429 14.9786L25.2095 21.3947L28.4761 19.1594C28.3682 18.7649 28.2497 18.3687 28.1108 17.9703C27.6085 16.5095 26.902 15.0104 26.0094 13.5107V13.5107ZM24.6035 21.9803L22.5098 15.1454L19.999 12.2821L17.4902 15.1454L15.3965 21.9803L16.9268 26.0468L19.999 27.308L23.0732 26.0468L24.6035 21.9803ZM20.5787 6.76361C20.5063 6.69653 20.4441 6.64819 20.374 6.58673V11.578L22.7188 14.2889L24.1746 10.8108C23.7592 10.2573 23.3408 9.70502 22.8882 9.17956C22.1603 8.32501 21.3844 7.51361 20.5787 6.76361ZM15.8182 10.7929L17.269 14.2599L19.624 11.5724V6.58667C19.5535 6.64868 19.4917 6.69678 19.4181 6.76508C18.6191 7.50873 17.8418 8.32074 17.1091 9.17713C16.6559 9.70478 16.2296 10.2459 15.8182 10.7929H15.8182ZM11.8851 17.968C11.7466 18.3683 11.6284 18.7642 11.521 19.1575L14.7928 21.3962L16.7761 15.0234L15.3005 11.4973C14.8401 12.1472 14.4057 12.8061 14.0093 13.4735C13.1047 14.9965 12.39 16.5087 11.8851 17.968L11.8851 17.968ZM11.5398 26.281C11.6361 26.5544 11.7473 26.8189 11.875 27.0801C11.8857 27.1024 11.8988 27.121 11.9098 27.143L16.1354 26.0717L14.6903 22.2352L11.3243 19.9321C11.1768 20.5912 11.0742 21.2373 11.0192 21.8652C10.8837 23.483 11.0588 24.9701 11.5398 26.281V26.281ZM15.9294 31.0592C15.9927 31.0897 16.0544 31.1128 16.1173 31.1414L19.3419 27.8488L16.6055 26.7256L12.2876 27.8203C12.7065 28.4869 13.1711 29.014 13.5278 29.3706C13.6077 29.4504 13.6739 29.5115 13.7213 29.5552L13.771 29.6013C14.4164 30.1916 15.1459 30.6851 15.9294 31.0592ZM19.9976 31.9984C20.6406 31.9984 21.8071 31.9114 23.1294 31.446L19.999 28.2494L16.8691 31.4446C18.1896 31.9114 19.3547 31.9983 19.9976 31.9983L19.9976 31.9984ZM27.7108 27.8199L23.3945 26.7256L20.6563 27.8489L23.8821 31.1439C23.9441 31.1158 24.0049 31.0933 24.0671 31.0633C24.8604 30.6814 25.5902 30.1869 26.2352 29.594C26.297 29.5395 26.3728 29.4685 26.4707 29.3706C26.8267 29.0146 27.291 28.4876 27.7108 27.8199V27.8199ZM28.9823 21.8974C28.9258 21.2559 28.8218 20.5995 28.6728 19.9339L25.3097 22.2352L23.8646 26.0717L28.0889 27.1426C28.0995 27.1213 28.112 27.1035 28.1225 27.0819C28.2513 26.8182 28.3625 26.5536 28.454 26.2938C28.9394 24.9708 29.1157 23.496 28.9823 21.8974H28.9823Z" fill="black"></path></svg></svg>
    //                     </div>
    //                 </div>
    //             </p>
    //         </div>
    //     );

    return (
        <div className='pt-5 clone-stone-diomomg-boox-main grid tangiblee-grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 items-start'>
            {diamonds?.length > 0 && diamonds?.map((diamond, key) => (
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
                                        <span>{ringExists ? "Complete your ring" : "Add setting"}</span>
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
            ))}
            <LeftSideDiamondModel setselectedProductModel={setselectedProductModel} selectedProductModel={selectedProductModel} />

        </div>
    )
}

export default DiamondProductListCard