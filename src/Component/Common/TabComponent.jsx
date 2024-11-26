import React from 'react'
import SidebarDimond from './SidebarDimond'

const TabComponent = () => {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen)=> {
      setOpen(newOpen);
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="steps-configuration-wrapper grid grid-cols-3 w-full items-center">
                    <div className="flex w-full items-center gap-1 md:gap-4 md:p-2 relative border-r-0 pr-1 z-30 bg-white border-black z-20 pl-2.5 py-1.75 md:pl-6 md:py-1.5 border-2 rounded-l-lg">
                        <div class="ml-[2px] md:ml-0 step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-normal">
                            1
                        </div>
                        <div className="ml-0 text-left step-config-titles overflow-hidden whitespace-nowrap">
                            <div className="text-sm text-gray-500 text-ellipsis overflow-hidden">
                                Select your
                            </div>
                            <div className="font-semibold text-ellipsis overflow-hidden">
                                SETTING
                            </div>
                        </div>
                        <div class="step-config-product-details flex-1 hidden text-right lg:block overflow-hidden py-2">
                            <div class="step-config-product-title text-xs text-black leading-1.1 whitespace-nowrap overflow-hidden text-ellipsis mb-1.5">
                                0.5 Carat I VS2 Round Natural Diamond
                            </div>
                            <div class="step-config-price-and-buttons flex gap-2 items-center justify-end">
                                <button
                                    type="button"
                                    class="text-customGray-200 underline text-xs leading-none"
                                    onClick={() => toggleDrawer(true)}
                                >
                                    View
                                </button>
                                <div class="step-config-price text-customGray-400 text-xs leading-tight hidden lg:block">
                                    <div>$736</div>
                                </div>
                            </div>
                        </div>
                        <div class="step-config-image-container">
                            <div class="step-config-image relative w-5 h-5 md:w-10 md:h-14">
                                <svg
                                    class="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-3/4 md:h-3/4"
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
                        <div class="absolute left-full after:content-[''] after:absolute border-y-[21px] border-l-[13px] border-y-[transparent] border-l-black after:border-y-[18px] after:border-l-[11px] after:border-y-[transparent] after:border-l-white after:-top-[18px] after:-left-[13px] md:border-l-[16px] md:border-y-[36px] md:after:border-y-[34px] md:after:border-l-[15px] md:after:-top-[34px] md:after:-left-[17px] -top-0.5 -bottom-0.5"></div>
                    </div>
                    {/* <div className="h-px bg-gray-300 flex-1 mx-4"></div> */}
                    <div className="flex w-full items-center gap-1 md:gap-4 relative border-r-0 pr-1 z-20 bg-customGray-50 border-steps-configuration-border py-1.25 pl-2 md:pl-6 md:py-0.75 border rounded-l-lg">
                        <div class="ml-[2px] md:ml-0 step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-semibold">
                            2
                        </div>
                        <div className="ml-- text-left step-config-titles overflow-hidden whitespace-nowrap">
                            <div className="text-sm text-gray-500 text-ellipsis overflow-hidden">
                                Select your
                            </div>
                            <div className="font-semibold text-ellipsis overflow-hidden">
                                STONE
                            </div>
                        </div>
                        <div class="step-config-product-details flex-1 hidden text-right lg:block overflow-hidden py-2">
                            <div class="step-config-product-title text-xs text-black leading-1.1 whitespace-nowrap overflow-hidden text-ellipsis mb-1.5">
                                The Lexie
                            </div>
                            <div class="step-config-price-and-buttons flex gap-2 items-center justify-end">
                                <button
                                    type="button"
                                    class="text-customGray-200 underline text-xs leading-none"
                                >
                                    Change
                                </button>
                                <div class="step-config-price text-customGray-400 text-xs leading-tight hidden lg:block">
                                    <div>$750</div>
                                </div>
                            </div>
                        </div>
                        <div class="step-config-image-container">
                            <div class="step-config-image relative w-5 h-5 md:w-10 md:h-14">
                                <svg
                                    class="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:w-3/4 md:h-3/4"
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
                        <div class="absolute left-full after:content-[''] after:absolute border-y-[18px] border-l-[12px] border-y-[transparent] border-l-steps-configuration-border after:border-y-[17px] after:border-l-[11px] after:border-y-[transparent] after:border-l-customGray-50 after:-top-[17px] after:-left-[12px] md:border-l-[16px] md:border-y-[32px] md:after:border-y-[31px] md:after:border-l-[15px] md:after:-top-[31px] md:after:-left-[16px] -top-px -bottom-px"></div>
                    </div>
                    {/* <div className="h-px bg-gray-300 flex-1 mx-4"></div> */}
                    <div className="flex w-full items-center gap-1 md:gap-4 md:p-2 relative border-r-0 pr-3 md:pr-4 bg-customGray-50 border-steps-configuration-border pl-4 py-1.25 md:pl-11 md:py-0.75 border">
                        <div class="ml-[2px] md:ml-0 step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-normal">
                            3
                        </div>
                        <div className="ml-0 text-left step-config-titles overflow-hidden whitespace-nowrap">
                            <div className="text-sm text-gray-500 text-ellipsis overflow-hidden">
                                Complete your
                            </div>
                            <div className="font-semibold text-ellipsis overflow-hidden">
                                RING
                            </div>
                        </div>
                        <div class="step-config-product-details flex-1 hidden text-right lg:block overflow-hidden py-2">
                            <div class="step-config-product-title text-xs text-black leading-1.1 whitespace-nowrap overflow-hidden text-ellipsis mb-1.5">
                                Total Price
                            </div>
                            <div class="step-config-price-and-buttons flex gap-2 items-center justify-end">
                                <div class="step-config-price text-customGray-400 text-xs leading-tight hidden lg:block">
                                    <div>$1,486</div>
                                </div>
                            </div>
                        </div>
                        <div class="step-config-image-container">
                            <div class="step-config-image relative w-5 h-5 md:w-10 md:h-14">
                                <svg
                                    class="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <svg
                                        viewBox="0 0 36 36"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8741 3.91081L14.2024 0.57251H21.2409L24.5692 3.91081L17.7183 10.0039L10.8741 3.91081Z"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M16.2128 5.73338L14.2544 3.93149L15.547 2.63538"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                        ></path>
                                        <path
                                            d="M17.7188 9.91987L20.7672 3.94029L18.4297 0.58252"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M11.4913 4.461L17.7217 10.0077L23.9581 4.461"
                                            stroke="currentColor"
                                            stroke-miterlimit="10"
                                        ></path>
                                        <path
                                            d="M23.0797 9.99799C25.4403 11.2008 27.3273 13.1634 28.4365 15.5695C29.5458 17.9756 29.8126 20.685 29.1941 23.2613C28.5756 25.8376 27.1078 28.1306 25.0271 29.7708C22.9464 31.4111 20.3741 32.3031 17.7247 32.3031C15.0752 32.3031 12.5029 31.4111 10.4222 29.7708C8.34157 28.1305 6.87373 25.8375 6.25523 23.2613C5.63672 20.685 5.90358 17.9756 7.01281 15.5695C8.12203 13.1634 10.009 11.2008 12.3697 9.99799"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </svg>
                            </div>
                        </div>
                        <div class="absolute right-0  after:content-[''] after:absolute bg-white border-y-[18px] border-l-[12px] border-y-[transparent] border-l-steps-configuration-border after:border-y-[17px] after:border-l-[11px] after:border-y-[transparent] after:border-l-customGray-50 after:-top-[17px] after:-left-[12px] md:border-l-[16px] md:border-y-[32px] md:after:border-y-[31px] md:after:border-l-[15px] md:after:-top-[31px] md:after:-left-[16px] -top-px -bottom-px"></div>
                    </div>
                </div>
            </div>
            <SidebarDimond toggleDrawer={toggleDrawer} open={open} />
        </>

    )
}

export default TabComponent