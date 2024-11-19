import React from "react";
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import "./ringStyle.css";

const RingSelector = () => {
  const ringStyles = [
    { id: 1, name: "Solitaire", icon: (
      <svg
        className=""
        aria-hidden="true"
        focusable="false"
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
    )},
    { id: 2, name: "Pave", icon: "💍" },
    { id: 3, name: "Halo", icon: "💍" },
    { id: 4, name: "Nature", icon: "💍" },
    { id: 5, name: "Hidden Halo", icon: "💍" },
    { id: 6, name: "Side Stone", icon: "💍" },
    { id: 7, name: "Three Stone", icon: "💍" },
    { id: 8, name: "Vintage", icon: "💍" },
  ];

  const rings = [
    {
      id: 1,
      name: "Classic Solitaire Ring",
      price: "2,499",
      image: "/api/placeholder/300/300",
    },
    {
      id: 2,
      name: "Elegant Pave Ring",
      price: "2,899",
      image: "/api/placeholder/300/300",
    },
    {
      id: 3,
      name: "Vintage Halo Ring",
      price: "3,299",
      image: "/api/placeholder/300/300",
    },
    {
      id: 4,
      name: "Nature Inspired Ring",
      price: "2,799",
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        Order TODAY for Guaranteed Holiday Delivery!
      </div>

      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="SEARCH..."
                className="w-full pl-3 pr-10 py-2 border rounded-md"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <h1 className="text-3xl font-semibold">KEYZAR</h1>

            <div className="flex items-center gap-4">
              <User className="h-6 w-6" />
              <ShoppingBag className="h-6 w-6" />
            </div>
          </div>

          {/* Menu */}
          <nav className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-gray-600">
              FINE JEWELRY
            </a>
            <a href="#" className="hover:text-gray-600">
              ENGAGEMENT RINGS
            </a>
            <a href="#" className="hover:text-gray-600">
              WEDDING BANDS
            </a>
            <a href="#" className="hover:text-gray-600">
              DIAMONDS
            </a>
            <a href="#" className="hover:text-gray-600">
              GEMSTONES
            </a>
            <a href="#" className="hover:text-gray-600">
              EDUCATION
            </a>
          </nav>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center gap-1 md:gap-4 relative border-r-0 pr-1 z-20 bg-customGray-50 border-steps-configuration-border py-1.25 pl-2 md:pl-6 md:py-0.75 border rounded-l-lg ">
            <div class="step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-normal">
              1
            </div>
            <div className="ml-2 text-left step-config-titles overflow-hidden whitespace-nowrap">
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
            <div class="absolute left-full after:content-[''] after:absolute border-y-[18px] border-l-[12px] border-y-[transparent] border-l-steps-configuration-border after:border-y-[17px] after:border-l-[11px] after:border-y-[transparent] after:border-l-customGray-50 after:-top-[17px] after:-left-[12px] md:border-l-[16px] md:border-y-[32px] md:after:border-y-[31px] md:after:border-l-[15px] md:after:-top-[31px] md:after:-left-[16px] -top-px -bottom-px"></div>
          </div>
          {/* <div className="h-px bg-gray-300 flex-1 mx-4"></div> */}
          <div className="flex w-full items-center gap-1 md:gap-4 md:p-2 relative border-r-0 pr-1 z-30 bg-white border-black z-20 pl-2.5 py-1.75 md:pl-6 md:py-1.5 border-2 rounded-l-lg">
            <div class="step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-semibold">
              2
            </div>
            <div className="ml-2 text-left step-config-titles overflow-hidden whitespace-nowrap">
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
            <div class="absolute left-full after:content-[''] after:absolute border-y-[21px] border-l-[13px] border-y-[transparent] border-l-black after:border-y-[18px] after:border-l-[11px] after:border-y-[transparent] after:border-l-white after:-top-[18px] after:-left-[13px] md:border-l-[16px] md:border-y-[36px] md:after:border-y-[34px] md:after:border-l-[15px] md:after:-top-[34px] md:after:-left-[17px] -top-0.5 -bottom-0.5"></div>
          </div>
          {/* <div className="h-px bg-gray-300 flex-1 mx-4"></div> */}
          <div className="flex w-full items-center gap-1 md:gap-4 md:p-2 relative border-r-0 pr-3 md:pr-4 bg-customGray-50 border-steps-configuration-border pl-4 py-1.25 md:pl-11 md:py-0.75 border">
            <div class="step-config-number text-2xl leading-none md:text-4.25xl basis-4 shrink-0 font-normal">
              3
            </div>
            <div className="ml-2 text-left step-config-titles overflow-hidden whitespace-nowrap">
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

      {/* Ring Styles */}
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl text-center mb-4">Engagement Rings</h2>
        <p className="text-center text-gray-600 mb-8">
          Discover our collection of made to order engagement rings and customize it to your preference
        </p> */}

        <div class="px-5 md:pb-6">
          <header class="max-w-7xl mx-auto text-center">
            <h1
              class="text-black font-semibold text-1.5lg leading-none mb-1.5 md:text-3xl md:mb-2.5"
              tabindex="-1"
            >
              Engagement Rings
            </h1>
            <p
              class="leading-tighter text-black/50 text-1.5sm md:text-xl"
              tabindex="-1"
            >
              Discover our collection of made to order engagement rings and
              customize it to your preference
            </p>
          </header>
        </div>

        <div className="md:w-full gap-2 whitespace-nowrap snap-start hiddenScroll overflow-x-auto overflow-y-hidden scroll-smooth p-px md:p-0.5 grid grid-cols-4 md:flex md:gap-6 md:justify-center md:snap-center">
          {ringStyles.map((style) => (
            <div
              key={style.id}
              className="text-center ring-1 ring-black md:ring-2 pt-1.25 p-2 pb-1.75 md:min-w-[6rem] md:p-3 md:pt-1.5 md:border-none text-center text-black select-none rounded-lg border transition-colors bg-customGray-75 border-borders md:bg-white md:hover:bg-customGray-75"
            >
              <div className="mb-2"> {style.icon}</div>
              <div className="text-sm">{style.name}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 mt-8 hidden md:flex gap-2 flex-wrap items-center pt-4 border-t border-borders col-span-2 w-full">
          <select className="border rounded-md px-4 py-2">
            <option>Select Metal</option>
          </select>
          <select className="border rounded-md px-4 py-2">
            <option>Select Shape</option>
          </select>
          <select className="border rounded-md px-4 py-2 ml-auto">
            <option>Price (low-to-high)</option>
          </select>
        </div>

        {/* Ring Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rings.map((ring) => (
            <div key={ring.id} className="border rounded-lg p-4 relative">
              <Heart className="absolute right-4 top-4 h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer" />
              <img
                src={ring.image}
                alt={ring.name}
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{ring.name}</h3>
              <p className="text-gray-600">${ring.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RingSelector;
