import React from 'react'

const EngagementProductDetails = ({ product }) => {

    // Check if the product and required fields are available
    const productImages = product?.images?.edges || [];
    const productVariants = product?.variants?.edges || [];
    
    return (
        <div className="StoneProductInfo rounded-2.5xl p-3 bg-customGray-150 mt-4 mb-4">
            <h3 className="StoneProductInfo__title flex items-center gap-2 mb-2" tabIndex="-1">
                <svg className="w-8 h-8 p-1.5 rounded-full bg-white overflow-visible" aria-hidden="true" focusable="false">
                    <svg viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1578 4.461L18.3882 10.0077L24.6247 4.461" stroke="currentColor" stroke-miterlimit="10"></path>
                        <path d="M23.7463 9.99799C26.107 11.2008 27.9939 13.1634 29.1032 15.5695C30.2124 17.9756 30.4792 20.685 29.8607 23.2613C29.2422 25.8376 27.7744 28.1306 25.6937 29.7708C23.6131 31.4111 21.0408 32.3031 18.3913 32.3031C15.7418 32.3031 13.1695 31.4111 11.0889 29.7708C9.0082 28.1305 7.54036 25.8375 6.92185 23.2613C6.30335 20.685 6.57021 17.9756 7.67943 15.5695C8.78866 13.1634 10.6756 11.2008 13.0363 9.99799" stroke="currentColor" stroke-linecap="round"></path>
                    </svg>
                </svg>
                Know your setting
            </h3>
            <div className='cpcst-details-wrapper grid grid-cols-2 gap-2 items-stretch md:grid-cols-2'>
                <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
                    {/* First Box Content */}
                    <div><strong>Title:</strong> {product?.title}</div>
                    <div><strong>SKU:</strong> {productVariants[0]?.node?.sku}</div>
                    <div><strong>Barcode:</strong> {productVariants[0]?.node?.barcode}</div>
                   
                </div>

                <div className='StoneDetailBlock  p-3 flex flex-col justify-between'>
                <div><strong>Weight:</strong> {productVariants[0]?.node?.weight} {productVariants[0]?.node?.weightUnit}</div>
                    <div><strong>Product Type:</strong> {product?.productType}</div>
                    <div><strong>Vendor:</strong> {product?.vendor}</div>
                    <div><strong>Price:</strong> {productVariants[0]?.node?.price?.amount} {productVariants[0]?.node?.price?.currencyCode}</div>
                </div>

                <div className='StoneDetailBlock StoneDetailBlock__fullwidth p-3 flex flex-col justify-between'>
                    {/* Last Box - Description */}
                    <div dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }} />
                </div>
            </div>
            <div className='add-extra-feature-sec StoneDetailBlock StoneDetailBlock__extras mt-2 p-3 flex items-center justify-between gap-2 text-customGray-500'>
                <div className='extra-star-icon flex items-center gap-1'>
                    <svg className="w-4 h-4" aria-hidden="true" focusable="false" viewBox="0 0 14 14">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.90022 1.46712L8.09914 4.77441L8.21738 5.10059L8.56431 5.10399L12.2173 5.13974L9.31681 7.14024L9.00637 7.35436L9.12693 7.71169L10.226 10.969L7.17558 8.95637L6.90021 8.77468L6.62485 8.95637L3.57446 10.969L4.67351 7.71169L4.79407 7.35436L4.48363 7.14024L1.58315 5.13974L5.23613 5.10399L5.58306 5.10059L5.7013 4.77441L6.90022 1.46712Z" stroke="#D89571">
                            </path>
                        </svg>
                    </svg>
                    <p className="cpcst-detail-title" tabIndex="-1">Extras</p>
                </div>
                <div className='ExtrasText text-black underline'>Add Extra Features</div>
            </div>
        </div>
    );
};

export default EngagementProductDetails;
