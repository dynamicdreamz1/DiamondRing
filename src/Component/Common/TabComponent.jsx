import React from 'react'
import ProductDetailsDrawer from './ProductDetailsDrawer'
import { useSelector } from 'react-redux';

const TabComponent = () => {
    const [open, setOpen] = React.useState(false);
    const { tabs } = useSelector((state) => state.getTabsProduct);

    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
    };

    // Determine active steps based on available data
    const hasSettingDetails = tabs?.ring && tabs.ring.title;
    const hasStoneDetails = tabs?.diamond && tabs.diamond.markup_price;
    const hasFinalProduct = tabs?.finelProduct?.price;

    // Determine current step 
    const currentStep = tabs?.currentStep || 0;

    // Get price details
    const settingPrice = tabs?.ring?.variants?.edges?.[0]?.node?.price?.amount || null;
    const stonePrice = tabs?.diamond?.markup_price || null;
    const finalPrice = tabs?.finelProduct?.price || null;


    // Step configuration
    const steps = [
        {
            number: 1,
            title: 'Select your',
            subtitle: 'SETTING',
            hasDetails: hasSettingDetails,
            productTitle: tabs?.ring?.title || '',
            price: settingPrice
        },
        {
            number: 2,
            title: 'Select your',
            subtitle: 'STONE',
            hasDetails: hasStoneDetails,
            productTitle: 'Diamond Details',
            price: stonePrice
        },
        {
            number: 3,
            title: 'Complete your',
            subtitle: 'RING',
            hasDetails: hasFinalProduct,
            productTitle: 'Total Price',
            price: finalPrice
        }
    ];



    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="steps-configuration-wrapper grid grid-cols-3 w-full items-center">
                    {steps.map((step) => (
                        <div className={`${currentStep === step.number ? "flex w-full items-center gap-1 md:gap-4 md:p-2 relative border-r-0 pr-1 z-30 bg-white z-20 pl-2.5 py-1.75 md:pl-6 md:py-1.5 border-2 rounded-l-lg" :
                            "flex w-full items-center gap-1 md:gap-4 relative border-r-0 pr-1 z-20 bg-customGray-50 border-steps-configuration-border py-1.25 pl-2 md:pl-6 md:py-0.75 border rounded-l-lg"} `}>
                            <div className="ml-[2px] md:ml-0 step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-normal">
                                {step.number}
                            </div>
                            <div className="ml-0 text-left step-config-titles overflow-hidden whitespace-nowrap">
                                <div className="text-sm text-gray-500 text-ellipsis overflow-hidden">
                                    {step.title}
                                </div>
                                <div className="font-semibold text-ellipsis overflow-hidden">
                                    {step.subtitle}
                                </div>
                            </div>


                            <div className="step-config-product-details flex-1 hidden text-right lg:block overflow-hidden py-2">
                                {step.hasDetails && (
                                    <>
                                        <div className="step-config-product-title text-xs text-black leading-1.1 whitespace-nowrap overflow-hidden text-ellipsis mb-1.5">
                                            {step.productTitle}
                                        </div>
                                        <div className="step-config-price-and-buttons flex gap-2 items-center justify-end">
                                            {step.number === 1 && (
                                                <button
                                                    type="button"
                                                    className="text-customGray-200 underline text-xs leading-none"
                                                    onClick={() => toggleDrawer(true)}
                                                >
                                                    Change
                                                </button>
                                            )}
                                            {step.price && (
                                                <div className="step-config-price text-customGray-400 text-xs leading-tight hidden lg:block">
                                                    <div>${step.price}</div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="step-config-image-container pr-0 lg:pr-3">
                                <div className="step-config-image relative w-5 h-5 md:w-10 md:h-14">
                                    <svg
                                        className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-3/4 md:h-3/4"
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <svg
                                            viewBox="0 0 29 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="1.16663"
                                                y="0.5"
                                                width="27"
                                                height="27"
                                                rx="13.5"
                                                fill="#EBFAE8"
                                            ></rect>
                                            <rect
                                                x="1.16663"
                                                y="0.5"
                                                width="27"
                                                height="27"
                                                rx="13.5"
                                                stroke="#58A23E"
                                            ></rect>
                                            <path
                                                d="M20.1666 10.6957L13.558 17.3044L9.16663 12.913"
                                                stroke="#58A23E"
                                                stroke-miterlimit="10"
                                            ></path>
                                        </svg>
                                    </svg>
                                </div>
                            </div>
                            <div className={`${currentStep === step.number ? "absolute left-full after:content-[''] after:absolute border-y-[21px] border-l-[13px] border-y-[transparent] border-l-black after:border-y-[18px] after:border-l-[11px] after:border-y-[transparent] after:border-l-white after:-top-[18px] after:-left-[13px] md:border-l-[16px] md:border-y-[36px] md:after:border-y-[34px] md:after:border-l-[15px] md:after:-top-[34px] md:after:-left-[17px] -top-0.5 -bottom-0.5"
                                : "absolute right-0  after:content-[''] after:absolute bg-white border-y-[18px] border-l-[12px] border-y-[transparent] border-l-steps-configuration-border after:border-y-[17px] after:border-l-[11px] after:border-y-[transparent] after:border-l-customGray-50 after:-top-[17px] after:-left-[12px] md:border-l-[16px] md:border-y-[32px] md:after:border-y-[31px] md:after:border-l-[15px] md:after:-top-[31px] md:after:-left-[16px] -top-px -bottom-px "
                                }
                                `}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ProductDetailsDrawer toggleDrawer={toggleDrawer} open={open} />
        </>
    )
}

export default TabComponent