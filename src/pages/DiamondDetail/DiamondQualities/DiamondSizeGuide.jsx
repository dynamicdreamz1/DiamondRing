import React, { useState } from 'react'

const DiamondSizeGuide = () => {
    const caratSizes = [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];
    const [currentCarat, setCurrentCarat] = useState(1.0);

    // Calculate scale based on carat size
    const calculateScale = (carat) => {
        // Simple scaling logic: base scale at 1.0 ct, increase proportionally
        const baseScale = 0.380;
        const scaleFactor = 1 + (carat - 1.0) * 0.1; // 10% increase per carat
        
        return baseScale * scaleFactor;
    };

    // Handle carat size selection
    const handleCaratSelect = (carat) => {
        setCurrentCarat(carat);
    };


    return (
        <div
            class="DiamondCaratSize overflow-hidden relative p-3 mt-4 bg-customGray-150 rounded-2.5xl lg:bg-transparent lg:p-0 lg:rounded-none lg:m-0"
        // style="--selector_number: -3; --selector_number_desktop: -4; --zoom: 0.565; --filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25)); --zoom_desktop: 0.565; --stone-position: 5.55% 5.4% 5.2% 5.35%; --stone-origin: 50% 50%; --guide: 0;"
        >
            <div class="DiamondCaratSize__header w-full lg:absolute lg:top-0 lg:p-4 lg:text-center text-black lg:text-white">
                <h3
                    class="font-bold text-1.5lg leading-tight flex items-center gap-2 mb-2 lg:mb-0 lg:justify-center"
                    tabindex="-1"
                >
                    <svg
                        class="w-8 h-8 p-1.5 rounded-full bg-white lg:hidden"
                        aria-hidden="true"
                        focusable="false"
                    >
                        <svg
                            width="22"
                            height="23"
                            viewBox="0 0 22 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.74686 10.5891H8.46882C8.46882 12.0823 7.24007 13.3111 5.74686 13.3111C4.25364 13.3111 3.0249 12.0823 3.0249 10.5891H5.74686Z"
                                stroke="black"
                                stroke-width="0.75"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M5.74719 5.29395L3.17188 10.5893H8.32252L5.74719 5.29395Z"
                                stroke="black"
                                stroke-width="0.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M16.2532 10.5891H18.9752C18.9752 12.0823 17.7464 13.3111 16.2532 13.3111C14.76 13.3111 13.5312 12.0823 13.5312 10.5891H16.2532V10.5891Z"
                                stroke="black"
                                stroke-width="0.75"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M16.2526 5.29395L13.6772 10.5893H18.8279L16.2526 5.29395Z"
                                stroke="black"
                                stroke-width="0.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M5.74707 5.29395H16.2529"
                                stroke="black"
                                stroke-width="0.75"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M10.9995 4.14795V14.5069"
                                stroke="black"
                                stroke-width="0.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M10.9995 14.5068L6.21094 17.8979H15.788L10.9995 14.5068Z"
                                stroke="black"
                                stroke-width="0.75"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </svg>
                    Diamond Carat Size Guide
                </h3>
                <p
                    class="hidden font-medium text-xs leading-tight mb-0 lg:block"
                    tabindex="-1"
                >
                    *The setting in the image is for reference only
                </p>
            </div>
            <div class="relative overflow-hidden rounded-lg lg:rounded-none">
                <div class="DiamondCaratSize__ShownWith text-center whitespace-nowrap bg-white/75 text-[#404040] rounded-100 absolute top-3 left-1/2 -translate-x-1/2 py-1 px-2 text-1.5sm leading-tight lg:hidden">
                    Shown with
                    <strong>1.0 ct</strong>
                </div>
                <img
                    src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1231583/build/_assets/hand-with-setting-23F6JYZ6.png"
                    width="800"
                    height="800"
                    loading="eager"
                    alt="Diamond carat size hand desktop image "
                    class="w-full h-full aspect-square fadeIn object-cover"
                />
                <div class="DiamondCaratSize__ShapeImage--Container absolute left-[38.4%] top-[37.5%] w-1/4 h-1/4">
                    <img
                        src="https://cdn.shopify.com/oxygen-v2/24658/9071/18525/1231583/build/_assets/RoundShapeStoneSolo-MHTOVVUU.png"
                        width="200"
                        height="200"
                        loading="eager"
                        alt="Diamond carat size Round shape desktop image "
                        class="DiamondCaratSize__ShapeImage transition-all ease-in-out duration-500 w-full h-full"
                        style={{
                            transform: `scale(${calculateScale(currentCarat)})`,
                            transformOrigin: '50% 50%'
                        }}
                    />
                </div>
                <div class="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-3 justify-center items-center lg:p-4 lg:gap-2 lg:pb-2">
                    <div class="text-center text-white text-sm leading-tight lg:hidden">
                        *closest value to your size 0.5ct
                    </div>
                    <div class="DiamondCaratSize__values relative font-proximaNovaCondensed">
                        <div class="hidden md:inline-flex items-center justify-center flex-nowrap">
                            {caratSizes.map((carat, index) => (
                                <button
                                    key={carat}
                                    onClick={() => handleCaratSelect(carat)}
                                    className={`px-3 py-2 m-1 rounded-full transition-all duration-300 ${currentCarat === carat
                                        ? 'bg-black text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {carat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div class="hidden text-center text-white text-xs leading-tight lg:block">
                        <p tabindex="-1">
                            Shown with <strong>1.0ct Diamond</strong>{" "}
                            <span class="text-1.5xs leading-tight">
                                *closest value to your size 0.5ct
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <p
                class="mt-1.5 text-black opacity-75 text-1.5xs leading-tight mb-0 lg:hidden"
                tabindex="-1"
            >
                *The setting in the image is for reference only
            </p>
        </div>
    )
}

export default DiamondSizeGuide