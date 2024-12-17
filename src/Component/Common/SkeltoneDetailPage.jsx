import React from 'react'

const SkeltoneDetailPage = () => {
    return (
        <div className='container mx-auto px-4 ring-skeleton-main'>
            <div className="skeleton customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8">
                <div className="skeleton-left flex1 lg:rounded-4xl bg-customGray-50 overflow-hidden relative gap-2 grid  lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="skeleton-right flex2 mt-2 lg:mt-0">
                    <div className="line h17 w40 m10"></div>
                    <div className="line w20"></div>
                    <div className="line h8 w30"></div>
                    <div className="square square200 m10"></div>
                    <div className="square square500"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeltoneDetailPage