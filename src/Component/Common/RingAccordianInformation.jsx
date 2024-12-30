import React from 'react';
import { useSelector } from 'react-redux';

const RingAccordianInformation = () => {
    const { product } = useSelector((state) => state.singleProduct);

    return (
        <div className='cpst-tab-content'>
            <div className="cpst-tab-content-wrapper text-customGray-450 py-4 pr-10 pl-3">
                <div className="ProductDetails flex items-stretch">
                    <div className="cpcst-details-wrapper flex-1">
                        <div className="cpcst-details flex whitespace-nowrap gap-5">
                            <div className="cpcst-details-titles flex flex-col gap-1.5">
                                <div className="cpcst-details-title">Title</div>
                                <div className="cpcst-details-title">SKU</div>
                                <div className="cpcst-details-title">Barcode</div>
                                <div className="cpcst-details-title">Weight</div>
                                <div className="cpcst-details-title">Product Type</div>
                                <div className="cpcst-details-title">Vendor</div>
                                <div className="cpcst-details-title">Price</div>
                            </div>
                            <div className="cpcst-details-values flex flex-col gap-1.5">
                                <div className="cpcst-details-value">{product?.title || 'N/A'}</div>
                                <div className="cpcst-details-value">{product?.variants?.edges[0]?.node?.sku || 'N/A'}</div>
                                <div className="cpcst-details-value">{product?.variants?.edges[0]?.node?.barcode || 'N/A'}</div>
                                <div className="cpcst-details-value">
                                    {product?.variants?.edges[0]?.node?.weight
                                        ? `${product.variants.edges[0].node.weight} ${product.variants.edges[0].node.weightUnit.toLowerCase()}`
                                        : 'N/A'}
                                </div>
                                <div className="cpcst-details-value">{product?.productType || 'N/A'}</div>
                                <div className="cpcst-details-value">{product?.vendor || 'N/A'}</div>
                                <div className="cpcst-details-value">
                                    {product?.variants?.edges[0]?.node?.price
                                        ? `${product.variants.edges[0].node.price.currencyCode} ${product.variants.edges[0].node.price.amount}`
                                        : 'N/A'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RingAccordianInformation;