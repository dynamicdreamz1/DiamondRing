import React from 'react'

const SkeltoneDetailPage = () => {
    return (
        <div className='container mx-auto px-4 ring-skeleton-main'>
            <div class="skeleton customer-product-side-img-text CustomProduct__container CustomCompleteProduct__container grid grid-cols-1 items-start md:gap-0 lg:mb-9 lg:gap-8 xl:gap-x-8">
                <div class="skeleton-left flex1 lg:rounded-4xl bg-customGray-50 overflow-hidden relative gap-2 grid  lg:grid lg:grid-cols-1 lg:gap-2 xl:grid-cols-2 lg:auto-rows-fr">
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                    <div class="square"></div>
                </div>
                <div class="skeleton-right flex2 mt-2 lg:mt-0">
                    <div class="line h17 w40 m10"></div>
                    <div class="line w20"></div>
                    <div class="line h8 w30"></div>
                    <div class="square square200 m10"></div>
                    <div class="square square500"></div>
                </div>
            </div>
        </div>
    )
}

export default SkeltoneDetailPage