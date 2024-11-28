import React from 'react'
import TabComponent from '../../Component/Common/TabComponent'
import RingStyleFilter from '../EngagementRing/RingStyleFilter'

const DiamondList = () => {
  return (
    <div className="min-h-screen bg-white">
    <TabComponent />

    <div className="container mx-auto px-4">
      <div className="px-5 pb-6">
        <header className="max-w-7xl mx-auto text-center">
          <h1
            className="text-black font-semibold text-1.5lg leading-none mb-1.5 md:text-3xl md:mb-2.5"
            tabindex="-1"
          >
            Engagement Rings
          </h1>
          <p
            className="leading-tighter text-black/50 text-1.5sm md:text-xl"
            tabindex="-1"
          >
            Discover our collection of made to order engagement rings and
            customize it to your preference
          </p>
        </header>
      </div>

      <div className='stone-button-main flex rounded-md relative bg-customGray-50 border border-borders max-w-[17.5rem] md:relative md:px-2 md:max-w-[31rem] mx-auto md:z-10 px-5 my-3 md:my-6'>
        <div className="absolute w-1/2 top-0 -bottom-0 pointer-events-none bg-white ring-1 md:ring-2 ring-black transition-all duration-300 rounded-md left-1/2"></div>
        <button className="bg-transparent flex justify-center items-center gap-1 p-1 rounded-md w-1/2 transition ease-in-out duration-300 text-xs text-black before:absolute before:inset-0 md:p-2.5 md:gap-1.5 md:text-sm before:visible">
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
          <button className="bg-transparent flex justify-center items-center gap-1 p-1 rounded-md w-1/2 transition ease-in-out duration-300 text-xs text-black before:absolute before:inset-0 md:p-2.5 md:gap-1.5 md:text-sm before:invisible">
            <svg className="block relative w-5 h-5 md:w-7 md:h-7">
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
      <RingStyleFilter />
          <div className="w-full hidden md:flex justify-center items-center col-span-2 xl:w-full collection-filters-item-with-custom-width-and-order gap-1.5 py-6">
            <div className="flex-1 h-px bg-borders"></div>
            <button type="button" className="p-0 bg-white text-customGray-300 flex items-start gap-1.5 text-xs leading-none font-medium">
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
              <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
                <button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>E</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>D</span></button>
                <div className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white" style={{left: "0%",right: "0%"}}>
                    <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
                </div>
              </div>
          </div>
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
              <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
                <button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>E</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>D</span></button>
                <div className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white" style={{left: "0%",right: "0%"}}>
                    <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
                </div>
              </div>
          </div>
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
              <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
                <button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>J</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>I</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>H</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>G</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>F</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>E</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>D</span></button>
                <div className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white" style={{left: "0%",right: "0%"}}>
                    <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
                </div>
              </div>
          </div>
      </div>


      <div className='collection-range-main grid grid-cols-1 md:grid-cols-3 w-full items-center gap-6 py-6'>
          <div className='collection-range-item'>
            <div className="mb-6"><div className="text-base font-bold text-black leading-none">Carat</div></div>
            <div class="px-3.5">
              {/* <div role="button" tabindex="0" style="transform:scale(1);cursor:inherit;height:28px;display:flex;width:100%" aria-hidden="false">
                  <div style="height:4px;width:100%;border-radius:100px;background:linear-gradient(to right, #F5F5F5 0%, #F5F5F5 0%, #000 0%, #000 100%, #F5F5F5 100%, #F5F5F5 100%);border:1px solid var(--color-borders);align-self:center;position:relative">
                    <div style="position: absolute; z-index: 0; cursor: grab; touch-action: none; user-select: none; height: 28px; width: 28px; background-color: rgb(255, 255, 255); border: 2px solid rgb(0, 0, 0); border-radius: 50%; transform: translate(-15px, -13px);" tabindex="0" aria-valuemax="11" aria-valuemin="0.5" aria-valuenow="0.5" draggable="false" role="slider"></div>
                    <div style="position: absolute; z-index: 1; cursor: grab; touch-action: none; user-select: none; height: 28px; width: 28px; background-color: rgb(255, 255, 255); border: 2px solid rgb(0, 0, 0); border-radius: 50%; transform: translate(476.344px, -13px);" tabindex="0" aria-valuemax="11" aria-valuemin="0.5" aria-valuenow="11" draggable="false" role="slider"></div>
                  </div>
              </div> */}

              <div className='range-main'>
                  <div className='range-circel-left'></div>
                  <div className='range-circel-right'></div>
              </div>
            </div>
            <div className="flex justify-between gap-2 items-center pt-6">
              <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                  <div className="relative flex-grow border-r border-borders">
                    <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none xl:top-1/2 xl:left-auto xl:-translate-y-1/2 xl:text-1.5xs">Minimum</div>
                    <input type="text" inputmode="decimal" className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:text-sm xl:leading-none xl:py-1.5 xl:pl-3 xl:pr-18" value="0.5 ct" />
                  </div>
                  <div className="w-8 flex flex-col shrink-0 xl:w-5">
                    <button type="button" className="h-1/2 w-full flex items-center justify-center border-b border-borders text-customGray-300">
                        <svg className="w-3 h-3 -rotate-90 xl:w-2 xl:h-2">
                          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                          </svg>
                        </svg>
                    </button>
                    <button type="button" className="h-1/2 w-full flex items-center justify-center text-customGray-300">
                        <svg className="w-3 h-3 rotate-90 xl:w-2 xl:h-2">
                          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                          </svg>
                        </svg>
                    </button>
                  </div>
              </div>
                <div className="flex-1 h-2 border-r border-l border-borders flex items-center">
                    <div className="h-px w-full bg-borders"></div>
                </div>
                <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                    <div className="relative flex-grow border-r border-borders">
                      <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none xl:top-1/2 xl:left-auto xl:-translate-y-1/2 xl:text-1.5xs">Maximum</div>
                      <input type="text" inputmode="decimal" className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:text-sm xl:leading-none xl:py-1.5 xl:pl-3 xl:pr-18" value="11 ct" />
                    </div>
                    <div className="w-8 flex flex-col shrink-0 xl:w-5">
                      <button type="button" className="h-1/2 w-full flex items-center justify-center border-b border-borders text-customGray-300">
                          <svg className="w-3 h-3 -rotate-90 xl:w-2 xl:h-2">
                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                          </svg>
                      </button>
                      <button type="button" className="h-1/2 w-full flex items-center justify-center text-customGray-300">
                          <svg className="w-3 h-3 rotate-90 xl:w-2 xl:h-2">
                            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                            </svg>
                          </svg>
                      </button>
                    </div>
                </div>
              </div>
          </div>
          <div className='collection-range-item'>
            <div className="mb-2"><div className="text-base font-bold text-black leading-none">Budget</div></div>
            <div className="flex justify-between gap-2 items-center pt-1">
                  <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                      <div className="relative flex-grow border-r border-borders">
                        <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none ">Minimum</div>
                        <input type="text" inputmode="decimal" className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5" value="$ 176" /> 
                      </div>
                      <div className="w-8 flex flex-col shrink-0 ">
                        <button type="button" className="h-1/2 w-full flex items-center justify-center border-b border-borders text-customGray-300">
                            <svg className="w-3 h-3 -rotate-90 ">
                              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                              </svg>
                            </svg>
                        </button>
                        <button type="button" className="h-1/2 w-full flex items-center justify-center text-customGray-300">
                            <svg className="w-3 h-3 rotate-90 ">
                              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                              </svg>
                            </svg>
                        </button>
                      </div>
                  </div>
                  <div className="flex-1 h-2 border-r border-l border-borders flex items-center">
                      <div className="h-px w-full bg-borders"></div>
                  </div>
                  <div className="flex border border-borders bg-white rounded-lg w-5/12 shrink-0 xl:w-[44%]">
                      <div className="relative flex-grow border-r border-borders">
                        <div className="absolute top-3 left-3 right-3 text-customGray-500 text-1.25xs leading-tight tracking-wide pointer-events-none ">Maximum</div>
                        <input type="text" inputmode="decimal" className="reset-input reset-styles border-none p-3 pt-8 text-base leading-tight text-black tracking-wide w-full bg-transparent xl:pt-7.5" value="$ 29,351,322" />
                      </div>
                      <div className="w-8 flex flex-col shrink-0 ">
                        <button type="button" className="h-1/2 w-full flex items-center justify-center border-b border-borders text-customGray-300">
                            <svg className="w-3 h-3 -rotate-90 ">
                              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                              </svg>
                            </svg>
                        </button>
                        <button type="button" className="h-1/2 w-full flex items-center justify-center text-customGray-300">
                            <svg className="w-3 h-3 rotate-90 ">
                              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.49316 11.2867L8.77971 6.00017L3.49316 0.713623" stroke="currentColor" stroke-width="2"></path>
                              </svg>
                            </svg>
                        </button>
                      </div>
                  </div>
</div>
          </div>
          <div className='collection-range-item'>
            <div className="mb-2"><div className="text-base font-bold text-black leading-none">Certificate</div></div>
            <div className="flex flex-wrap gap-1.5 md:gap-2 md:mt-3"><button className="flex-1 px-2 h-10 transition-colors border rounded-lg uppercase text-center flex justify-center items-center text-1.5sm leading-tight border-borders text-customGray-500 bg-customGray-75 md:min-h-[4rem]">IGI</button><button className="flex-1 px-2 h-10 transition-colors border rounded-lg uppercase text-center flex justify-center items-center text-1.5sm leading-tight border-borders text-customGray-500 bg-customGray-75 md:min-h-[4rem]">GIA</button></div>
          </div>
      </div>


      <div className='advance-quality-main-sec pb-5'> 
        <div className="flex gap-2 items-center justify-start md:justify-center">
          <div className="hidden md:block flex-1 h-px bg-borders"></div>
          <button type="button" className="flex gap-1 items-center text-1.5xl leading-tight text-black font-bold md:px-2 md:py-0.5 md:text-white md:bg-black md:font-normal md:gap-1.5 md:rounded-full md:text-1.5sm"><span>Advanced Quality Specs</span><span className="w-4 h-4 transition-transform duration-300 relative rotate-0 md:w-2 md:h-2"><span className="absolute top-1/2 left-1/2 w-full h-px bg-current -translate-x-1/2 -translate-y-1/2"></span><span className="absolute top-1/2 left-1/2 w-full h-px bg-current -translate-x-1/2 -translate-y-1/2 rotate-90"></span></span></button>
          <div className="hidden md:block flex-1 h-px bg-borders"></div>
        </div>
        <div className='advance-quality-boxes pt-10 flex flex-col gap-10 md:py-4 md:flex-row md:flex-wrap md:justify-center md:gap-4 xl:gap-x-10 md:border-b md:border-borders'>
            <div className='advance-quality-item-box w-full md:w-1/2-gap-6 xl:w-1/2-gap-10'>
                <div className="flex gap-1 items-end mb-3 md:gap-0.5 md:mb-2 ">
                  <div className="text-base font-bold text-black leading-none">Symmetry</div>
                  <div className="w-4 h-4 md:w-3 md:h-3 mb-1 relative group cursor-help">
                      <svg className="w-4 h-4 md:w-3 md:h-3 text-customGray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                            <g>
                              <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                            </g>
                        </svg>
                      </svg>
                      <div className="text-[#d97ab2] bg-white absolute z-30 invisible opacity-0 transition-all duration-300 rounded-lg shadow-[0_3px_8px_1px_rgba(0,0,0,0.25)] text-sm leading-snug py-4 px-5 left-[150%] top-1/2 w-[58vw] -translate-y-1/2 -translate-x-[6%] group-hover:visible group-hover:opacity-100 group-hover:-translate-x-[2%] md:text-1.5xs md:p-6 md:w-60 md:left-[200%]">Diamond Symmetry refers to how well aligned the facets of a diamond are.</div>
                  </div>
                </div>
                <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
                  <button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Good</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Very Good</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Excellent</span></button>
                  <div className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white" style={{left: "0%",right: "0%"}}>
                      <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
                  </div>
                </div>
            </div>
            <div className='advance-quality-item-box w-full md:w-1/2-gap-6 xl:w-1/2-gap-10'>
                <div className="flex gap-1 items-end mb-3 md:gap-0.5 md:mb-2 ">
                  <div className="text-base font-bold text-black leading-none">Polish</div>
                  <div className="w-4 h-4 md:w-3 md:h-3 mb-1 relative group cursor-help">
                      <svg className="w-4 h-4 md:w-3 md:h-3 text-customGray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="none">
                            <g>
                              <path d="M5 0C4.0111 0 3.0444 0.293245 2.22215 0.842652C1.39991 1.39206 0.759043 2.17295 0.380605 3.08658C0.00216642 4.00021 -0.0968503 5.00555 0.0960759 5.97545C0.289002 6.94536 0.765206 7.83627 1.46447 8.53553C2.16373 9.2348 3.05465 9.711 4.02455 9.90393C4.99446 10.0969 5.99979 9.99784 6.91342 9.6194C7.82705 9.24096 8.60794 8.6001 9.15735 7.77785C9.70676 6.95561 10 5.98891 10 5C9.99952 3.67407 9.47258 2.40257 8.53501 1.465C7.59743 0.527418 6.32594 0.000479728 5 0V0ZM5.5 7.75696C5.5 7.82142 5.47439 7.88323 5.42881 7.92881C5.38324 7.97439 5.32142 8 5.25696 8H4.74304C4.67859 8 4.61677 7.97439 4.57119 7.92881C4.52561 7.88323 4.50001 7.82142 4.5 7.75696V7.24304C4.50001 7.17858 4.52561 7.11677 4.57119 7.07119C4.61677 7.02561 4.67859 7 4.74304 7H5.25696C5.32142 7 5.38324 7.02561 5.42881 7.07119C5.47439 7.11677 5.5 7.17858 5.5 7.24304V7.75696ZM5.51685 6.30023C5.50554 6.35715 5.47464 6.40831 5.42953 6.44481C5.38441 6.48131 5.32792 6.50084 5.2699 6.5H4.7721C4.73536 6.49956 4.69914 6.49132 4.66583 6.47584C4.63251 6.46035 4.60287 6.43797 4.57885 6.41017C4.55483 6.38237 4.53699 6.34979 4.5265 6.31459C4.51601 6.27938 4.51312 6.24235 4.51801 6.20594C4.68335 4.92078 5.93256 4.93372 5.99738 4.07094C6.01172 3.8312 5.9405 3.59415 5.79638 3.40202C5.65227 3.2099 5.44463 3.07517 5.21045 3.02185C5.07892 2.99399 4.94313 2.99285 4.81116 3.01851C4.67918 3.04417 4.55371 3.0961 4.4422 3.17121C4.33068 3.24632 4.23541 3.34308 4.16204 3.45574C4.08866 3.5684 4.03869 3.69467 4.01508 3.82703C4.00945 3.87363 3.98734 3.91668 3.95274 3.94841C3.91814 3.98013 3.87333 3.99843 3.82642 4H3.21497C3.18714 4.00043 3.15952 3.99507 3.13388 3.98426C3.10823 3.97346 3.0851 3.95745 3.06597 3.93724C3.04683 3.91703 3.0321 3.89306 3.02271 3.86686C3.01332 3.84066 3.00947 3.8128 3.01142 3.78504C3.04047 3.51637 3.12365 3.25638 3.25593 3.02074C3.38821 2.7851 3.56684 2.5787 3.78107 2.41398C3.99529 2.24926 4.24066 2.12965 4.50238 2.06235C4.76409 1.99505 5.03673 1.98146 5.30384 2.0224C5.72467 2.09364 6.1125 2.29528 6.41253 2.59886C6.71257 2.90243 6.90965 3.29259 6.97595 3.71424C7.2075 5.14838 5.69422 5.28296 5.51685 6.30023Z" fill="currentColor"></path>
                            </g>
                        </svg>
                      </svg>
                      <div className="text-[#d97ab2] bg-white absolute z-30 invisible opacity-0 transition-all duration-300 rounded-lg shadow-[0_3px_8px_1px_rgba(0,0,0,0.25)] text-sm leading-snug py-4 px-5 left-[150%] top-1/2 w-[58vw] -translate-y-1/2 -translate-x-[6%] group-hover:visible group-hover:opacity-100 group-hover:-translate-x-[2%] md:text-1.5xs md:p-6 md:w-60 md:left-[200%]">Polish refers to the degree of smoothness of each facet of a diamond.</div>
                  </div>
                </div>
                <div className="flex flex-wrap bg-customGray-75 border-borders border rounded-lg h-10 relative md:mt-4">
                  <button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Good</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Very Good</span><span className="absolute right-0 top-0 bottom-0 bg-borders w-px"></span></button><button type="button" className="flex-1 px-2 h-full transition-colors uppercase text-center flex justify-center items-center text-1.5sm leading-tight relative z-10 bg-transparent text-black" title="Preview"><span>Excellent</span></button>
                  <div className="absolute top-0 bottom-0 transition-position-width duration-500 pointer-events-none rounded-lg bg-white" style={{left: "0%",right: "0%"}}>
                      <div className="absolute w-full h-full transition-width duration-500 border border-black ring-1 ring-black rounded-lg z-20"></div>
                  </div>
                </div>
            </div>
        </div>
      </div>

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
              {/* <div className="pt-2 absolute top-full left-0 right-0 z-[60]">
                <div className="border-2 border-solid border-customGray-50 rounded-md bg-white overflow-hidden"><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 bg-customGray-50">Price (low-to-high)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Price (high-to-low)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Carat (low-to-high)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Carat (high-to-low)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Color (low-to-high)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Color (high-to-low)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Clarity (low-to-high)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Clarity (high-to-low)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Cut (low-to-high)</button><button className="block w-full text-left text-sm leading-none py-2.5 px-4 border-t-2 border-solid border-customGray-50 text-black transition-all duration-300 hover:bg-customGray-50 ">Cut (high-to-low)</button></div>
              </div> */}
          </div>
      </div>


      <div className='pt-5 clone-stone-diomomg-boox-main grid tangiblee-grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4 items-start'>
          <div className='clone-stone-diomomg-item CenterStoneProductCard relative group md:hover:z-30'>
              <div className=' border-borders border rounded-lg overflow-hidden md:block'>
                  <div className='CenterStoneProductCard__ImageContainer relative w-full DiamondImageContainer md:w-full md:group-hover:relative md:group-hover:z-10'>
                      <div className="absolute right-2 top-2 z-20">
                        <button type="button" className="WishlistButton ml-1 stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-7 md:h-7 ">
                                  <svg className="WishlistHeartIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                                    <mask id="wishlist-heart-mask">
                                        <path d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z" fill="white" stroke="white"></path>
                                    </mask>
                                    <g mask="url(#wishlist-heart-mask)">
                                        <polygon className="heart-bg-fill" fill="#fff" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                        <path className="heart-right" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-bottom" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-left" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <rect className="heart-bright-left" fill="rgba(255,255,255,0.2)" x="-4.9" y="-5" width="26.5" height="12.2" shape-rendering="crispEdges"></rect>
                                        <rect className="heart-bright-right" fill="rgba(255,255,255,0.2)" x="10.1" y="-2.8" width="11.8" height="22.3" shape-rendering="crispEdges"></rect>
                                        <polygon className="heart-outline" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                    </g>
                                  </svg>
                              </div>
                            </div>
                        </button>
                      </div>
                      <div className='CenterStoneProductCard__ImageWrapper relative pt-[100%]'>
                          <img className='absolute w-full h-full top-0 left-0 object-contain' src="/stone-diamond-img.webp" alt="" />
                      </div>
                      <a className="absolute inset-0 opacity-0 hidden md:block" href="/products/0-50-round-i-si1-hrnd-round-gia-6502791850" aria-hidden="false">0.5 Carat I SI1 Round Natural Diamond</a>
                  </div>
                  <div className="bg-white pt-0.5 md:hidden">
                    <div className="CenterStoneProductCard__StoneInfo flex flex-wrap">
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                          <div className="text-black text-sm leading-tight flex-grow whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                          <div className="shrink-0 flex items-center gap-1 flex-wrap">
                            <div className="text-sm leading-tight text-customGray-500">$772</div>
                          </div>
                      </div>
                      <div className="flex flex-wrap justify-center">
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
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
                        <div className="text-black text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                        <div className="w-full text-customGray-300 text-sm leading-none mt-1"><span>With setting: </span><span>$1,522</span></div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1 flex-wrap">
                        <div className="text-sm leading-tight text-customGray-500">$772</div>
                      </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">carat</div>
                      </div>
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">I</div>
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
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                      <a className="basis-1/3 grow rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 text-center min-h-[3rem] flex justify-center items-center border-2 border-black" href="/products/0-50-round-i-si1-hrnd-round-gia-6502791850" aria-hidden="false">More Info</a>
                      <button className="basis-3/5 grow rounded-full text-sm font-semibold leading-tight bg-black text-white p-3 text-center min-h-[3rem] border-2 border-black whitespace-nowrap relative overflow-hidden">
                        <div className="flex justify-center items-center gap-1 transition-transform duration-500 text-ellipsis overflow-hidden ">
                            <span>Complete your ring</span>
                            <svg className="w-3 h-3">
                              <svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.5 15.8298L12 9.3298L5.5 2.8298" stroke="currentColor" stroke-width="2.5"></path>
                              </svg>
                            </svg>
                        </div>
                      </button>
                  </div>
                  <div className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$193</span> <button type="button" className="underline cursor-pointer">Learn more</button></div>
                </div>
          </div>
          <div className='clone-stone-diomomg-item CenterStoneProductCard relative group md:hover:z-30'>
              <div className=' border-borders border rounded-lg overflow-hidden md:block'>
                  <div className='CenterStoneProductCard__ImageContainer relative w-full DiamondImageContainer md:w-full md:group-hover:relative md:group-hover:z-10'>
                      <div className="absolute right-2 top-2 z-20">
                        <button type="button" className="WishlistButton ml-1 stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-7 md:h-7 ">
                                  <svg className="WishlistHeartIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                                    <mask id="wishlist-heart-mask">
                                        <path d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z" fill="white" stroke="white"></path>
                                    </mask>
                                    <g mask="url(#wishlist-heart-mask)">
                                        <polygon className="heart-bg-fill" fill="#fff" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                        <path className="heart-right" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-bottom" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-left" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <rect className="heart-bright-left" fill="rgba(255,255,255,0.2)" x="-4.9" y="-5" width="26.5" height="12.2" shape-rendering="crispEdges"></rect>
                                        <rect className="heart-bright-right" fill="rgba(255,255,255,0.2)" x="10.1" y="-2.8" width="11.8" height="22.3" shape-rendering="crispEdges"></rect>
                                        <polygon className="heart-outline" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                    </g>
                                  </svg>
                              </div>
                            </div>
                        </button>
                      </div>
                      <div className='CenterStoneProductCard__ImageWrapper relative pt-[100%]'>
                          <img className='absolute w-full h-full top-0 left-0 object-contain' src="/stone-diamond-img.webp" alt="" />
                      </div>
                  </div>
                  <div className="bg-white pt-0.5 md:hidden">
                    <div className="CenterStoneProductCard__StoneInfo flex flex-wrap">
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                          <div className="text-black text-sm leading-tight flex-grow whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                          <div className="shrink-0 flex items-center gap-1 flex-wrap">
                            <div className="text-sm leading-tight text-customGray-500">$772</div>
                          </div>
                      </div>
                      <div className="flex flex-wrap justify-center">
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
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
                        <div className="text-black text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                        <div className="w-full text-customGray-300 text-sm leading-none mt-1"><span>With setting: </span><span>$1,522</span></div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1 flex-wrap">
                        <div className="text-sm leading-tight text-customGray-500">$772</div>
                      </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">carat</div>
                      </div>
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">I</div>
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
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                      <a className="basis-1/3 grow rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 text-center min-h-[3rem] flex justify-center items-center border-2 border-black" href="/products/0-50-round-i-si1-hrnd-round-gia-6502791850" aria-hidden="false">More Info</a>
                      <button className="basis-3/5 grow rounded-full text-sm font-semibold leading-tight bg-black text-white p-3 text-center min-h-[3rem] border-2 border-black whitespace-nowrap relative overflow-hidden">
                        <div className="flex justify-center items-center gap-1 transition-transform duration-500 text-ellipsis overflow-hidden ">
                            <span>Complete your ring</span>
                            <svg className="w-3 h-3">
                              <svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.5 15.8298L12 9.3298L5.5 2.8298" stroke="currentColor" stroke-width="2.5"></path>
                              </svg>
                            </svg>
                        </div>
                      </button>
                  </div>
                  <div className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$193</span> <button type="button" className="underline cursor-pointer">Learn more</button></div>
                </div>
          </div>
          <div className='clone-stone-diomomg-item CenterStoneProductCard relative group md:hover:z-30'>
              <div className=' border-borders border rounded-lg overflow-hidden md:block'>
                  <div className='CenterStoneProductCard__ImageContainer relative w-full DiamondImageContainer md:w-full md:group-hover:relative md:group-hover:z-10'>
                      <div className="absolute right-2 top-2 z-20">
                        <button type="button" className="WishlistButton ml-1 stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-7 md:h-7 ">
                                  <svg className="WishlistHeartIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                                    <mask id="wishlist-heart-mask">
                                        <path d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z" fill="white" stroke="white"></path>
                                    </mask>
                                    <g mask="url(#wishlist-heart-mask)">
                                        <polygon className="heart-bg-fill" fill="#fff" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                        <path className="heart-right" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-bottom" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-left" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <rect className="heart-bright-left" fill="rgba(255,255,255,0.2)" x="-4.9" y="-5" width="26.5" height="12.2" shape-rendering="crispEdges"></rect>
                                        <rect className="heart-bright-right" fill="rgba(255,255,255,0.2)" x="10.1" y="-2.8" width="11.8" height="22.3" shape-rendering="crispEdges"></rect>
                                        <polygon className="heart-outline" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                    </g>
                                  </svg>
                              </div>
                            </div>
                        </button>
                      </div>
                      <div className='CenterStoneProductCard__ImageWrapper relative pt-[100%]'>
                          <img className='absolute w-full h-full top-0 left-0 object-contain' src="/stone-diamond-img.webp" alt="" />
                      </div>
                  </div>
                  <div className="bg-white pt-0.5 md:hidden">
                    <div className="CenterStoneProductCard__StoneInfo flex flex-wrap">
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                          <div className="text-black text-sm leading-tight flex-grow whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                          <div className="shrink-0 flex items-center gap-1 flex-wrap">
                            <div className="text-sm leading-tight text-customGray-500">$772</div>
                          </div>
                      </div>
                      <div className="flex flex-wrap justify-center">
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
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
                        <div className="text-black text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                        <div className="w-full text-customGray-300 text-sm leading-none mt-1"><span>With setting: </span><span>$1,522</span></div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1 flex-wrap">
                        <div className="text-sm leading-tight text-customGray-500">$772</div>
                      </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">carat</div>
                      </div>
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">I</div>
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
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                      <a className="basis-1/3 grow rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 text-center min-h-[3rem] flex justify-center items-center border-2 border-black" href="/products/0-50-round-i-si1-hrnd-round-gia-6502791850" aria-hidden="false">More Info</a>
                      <button className="basis-3/5 grow rounded-full text-sm font-semibold leading-tight bg-black text-white p-3 text-center min-h-[3rem] border-2 border-black whitespace-nowrap relative overflow-hidden">
                        <div className="flex justify-center items-center gap-1 transition-transform duration-500 text-ellipsis overflow-hidden ">
                            <span>Complete your ring</span>
                            <svg className="w-3 h-3">
                              <svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.5 15.8298L12 9.3298L5.5 2.8298" stroke="currentColor" stroke-width="2.5"></path>
                              </svg>
                            </svg>
                        </div>
                      </button>
                  </div>
                  <div className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$193</span> <button type="button" className="underline cursor-pointer">Learn more</button></div>
                </div>
          </div>
          <div className='clone-stone-diomomg-item CenterStoneProductCard relative group md:hover:z-30'>
              <div className=' border-borders border rounded-lg overflow-hidden md:block'>
                  <div className='CenterStoneProductCard__ImageContainer relative w-full DiamondImageContainer md:w-full md:group-hover:relative md:group-hover:z-10'>
                      <div className="absolute right-2 top-2 z-20">
                        <button type="button" className="WishlistButton ml-1 stroke-1 md:stroke-2 p-1 rounded-full inline-block bg-[rgba(255,255,255,0.73)]" aria-label="Add to wish list">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 md:w-7 md:h-7 ">
                                  <svg className="WishlistHeartIcon" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                                    <mask id="wishlist-heart-mask">
                                        <path d="M12,7.16613l3.01387-2.65371,4.7586,2.07432,1.0675,4.76126-8.83997,9.152L3.15997,11.348l1.06753-4.76126,4.75765-2.0739,3.01485,2.65329Z" fill="white" stroke="white"></path>
                                    </mask>
                                    <g mask="url(#wishlist-heart-mask)">
                                        <polygon className="heart-bg-fill" fill="#fff" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                        <path className="heart-right" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-bottom" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <path className="heart-left" fill="#e86c5c" d="M12,1.7h0c6.2,0,11.2,5,11.2,11.2h0c0,6.2-5,11.2-11.2,11.2h0C5.8,24,.8,19,.8,12.8h0C.8,6.7,5.8,1.7,12,1.7Z"></path>
                                        <rect className="heart-bright-left" fill="rgba(255,255,255,0.2)" x="-4.9" y="-5" width="26.5" height="12.2" shape-rendering="crispEdges"></rect>
                                        <rect className="heart-bright-right" fill="rgba(255,255,255,0.2)" x="10.1" y="-2.8" width="11.8" height="22.3" shape-rendering="crispEdges"></rect>
                                        <polygon className="heart-outline" points="2.61308 11.50098 3.7957 6.22949 9.07695 3.92773 12.00029 6.5 14.92216 3.92773 20.20536 6.22949 21.387 11.50098 12.00029 21.21973 2.61308 11.50098"></polygon>
                                    </g>
                                  </svg>
                              </div>
                            </div>
                        </button>
                      </div>
                      <div className='CenterStoneProductCard__ImageWrapper relative pt-[100%]'>
                          <img className='absolute w-full h-full top-0 left-0 object-contain' src="/stone-diamond-img.webp" alt="" />
                      </div>
                  </div>
                  <div className="bg-white pt-0.5 md:hidden">
                    <div className="CenterStoneProductCard__StoneInfo flex flex-wrap">
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                          <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                        </div>
                        <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                          <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                          <div className="text-black text-sm leading-tight flex-grow whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                          <div className="shrink-0 flex items-center gap-1 flex-wrap">
                            <div className="text-sm leading-tight text-customGray-500">$772</div>
                          </div>
                      </div>
                      <div className="flex flex-wrap justify-center">
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">carat</div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">I</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">color</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis uppercase">SI1</div>
                            <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.75xs md:text-1.5xs md:leading-tight">clarity</div>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-borders pointer-events-none"></div>
                          </div>
                          <div className="p-1.5 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                            <div className="font-semibold text-1.5xs leading-none mb-0.5 md:text-xs md:leading-none md:font-medium text-black overflow-hidden text-ellipsis capitalize">Excellent</div>
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
                        <div className="text-black text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis">Round</div>
                        <div className="w-full text-customGray-300 text-sm leading-none mt-1"><span>With setting: </span><span>$1,522</span></div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1 flex-wrap">
                        <div className="text-sm leading-tight text-customGray-500">$772</div>
                      </div>
                  </div>
                  <div className="flex flex-wrap justify-center">
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">0.5</div>
                        <div className="text-customGray-500 capitalize leading-tight overflow-hidden text-ellipsis text-1.25xs flex gap-0.5 items-start justify-center">carat</div>
                      </div>
                      <div className="p-2 w-1/4 whitespace-nowrap relative flex-grow md:max-w-[25%] text-center">
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis capitalize">I</div>
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
                        <div className="font-bold text-base leading-tight tracking-wide mb-1 text-black overflow-hidden text-ellipsis uppercase">SI1</div>
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
                      <a className="basis-1/3 grow rounded-full text-sm font-semibold leading-tight bg-white text-black p-3 text-center min-h-[3rem] flex justify-center items-center border-2 border-black" href="/products/0-50-round-i-si1-hrnd-round-gia-6502791850" aria-hidden="false">More Info</a>
                      <button className="basis-3/5 grow rounded-full text-sm font-semibold leading-tight bg-black text-white p-3 text-center min-h-[3rem] border-2 border-black whitespace-nowrap relative overflow-hidden">
                        <div className="flex justify-center items-center gap-1 transition-transform duration-500 text-ellipsis overflow-hidden ">
                            <span>Complete your ring</span>
                            <svg className="w-3 h-3">
                              <svg viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.5 15.8298L12 9.3298L5.5 2.8298" stroke="currentColor" stroke-width="2.5"></path>
                              </svg>
                            </svg>
                        </div>
                      </button>
                  </div>
                  <div className="text-xs leading-tight text-black text-center pt-1 md:pt-2">Pay in 4 interest-free installments of <span>$193</span> <button type="button" className="underline cursor-pointer">Learn more</button></div>
                </div>
          </div>
      </div>

        

    </div>
  </div>
  )
}

export default DiamondList