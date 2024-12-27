import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AdvancedSlideFilter from './AdvancedSlideFilter';


const AdvancedFilter = () => {

    return (
        <div className='advance-quality-main-sec pb-5'>
            <Accordion>
                <div className="flex gap-2 items-center justify-start md:justify-center">
                    <div className="hidden md:block flex-1 h-px bg-borders"></div>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <button type="button" className="flex gap-1 items-center text-1.5xl leading-tight text-black font-bold md:px-2 md:py-0.5 md:text-white md:bg-black md:font-normal md:gap-1.5 md:rounded-full md:text-1.5sm">
                            <span>Advanced Quality Specs</span>
                            <span className="w-4 h-4 transition-transform duration-300 relative rotate md:w-2 md:h-2">
                                <span className="absolute top-1/2 left-1/2 w-full h-px bg-current -translate-x-1/2 -translate-y-1/2">
                                </span>
                                <span className="absolute top-1/2 left-1/2 w-full h-px bg-current -translate-x-1/2 -translate-y-1/2 rotate-90"
                                ></span>
                            </span>
                        </button>
                    </AccordionSummary>
                    <div className="hidden md:block flex-1 h-px bg-borders"></div>
                </div>
                <AccordionDetails>
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
                            <AdvancedSlideFilter label={"symmetry"} />
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
                            <AdvancedSlideFilter label={"polish"} />
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AdvancedFilter