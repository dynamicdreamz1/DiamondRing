import React from 'react'
import { CertificateImage, ViewCertificate } from './ViewCertification';


const DiamondAccordianInformation = ({ diamond }) => {    
    console.log("diamond",diamond);
    
    
    return (
        <div className='cpst-tab-content'>
            <div className="cpst-tab-content-wrapper text-customGray-450 py-4 pr-10 pl-3">
                <div className="MoissaniteDetails flex items-stretch">
                    <div className="cpcst-details-wrapper flex-1">
                        <div className="cpcst-details flex whitespace-nowrap gap-5">
                            <div className="cpcst-details-titles flex flex-col gap-1.5">
                                <div className="cpcst-details-title">Carat</div>
                                <div className="cpcst-details-title">Shape</div>
                                <div className="cpcst-details-title">Color</div>
                                <div className="cpcst-details-title">Clarity</div>
                                <div className="cpcst-details-title">L/W (mm)</div>
                                <div className="cpcst-details-title">Ratio</div>
                                <div className="cpcst-details-title">Cut</div>
                            </div>
                            <div className="cpcst-details-values flex flex-col gap-1.5">
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate?.carats}</div>
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate?.shape}</div>
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate?.color}</div>
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate?.clarity}</div>
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate
                                    ? `${parseFloat(diamond.diamond.certificate.length).toFixed(2)} / ${parseFloat(diamond.diamond.certificate.width).toFixed(2)}`
                                    : "N/A"}</div>
                                <div className="cpcst-details-value">{(diamond?.diamond?.certificate?.length / diamond?.diamond?.certificate?.width).toFixed(2)}</div>
                                <div className="cpcst-details-value">{diamond?.diamond?.certificate.cut}</div>
                            </div>
                        </div>

                    </div>

                    <div className='MoissaniteDetails__certificate w-1/2'>
                        <div className="cpcst-certificate-container relative p-4 h-full">
                            <svg className="w-3 h-3 absolute right-2 top-2 opacity-20" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.42906 2.28571C2.79788 2.28571 2.2862 2.79739 2.2862 3.42857V12.5714C2.2862 13.2026 2.79788 13.7143 3.42906 13.7143H12.5719C13.2031 13.7143 13.7148 13.2026 13.7148 12.5714V8.85714H16.0005V12.5714C16.0005 14.465 14.4655 16 12.5719 16H3.42906C1.53551 16 0.000488281 14.465 0.000488281 12.5714V3.42857C0.000488281 1.53502 1.53551 0 3.42906 0H7.14335V2.28571H3.42906Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 6.22222V0L9.77803 1.13837e-06V2.28572L13.7145 2.28571V6.22222L16.0002 6.22222Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.11905 9.25316L14.1748 0.19736L15.7911 1.8136L6.73529 10.8694C6.28898 11.3157 5.56536 11.3157 5.11905 10.8694C4.67274 10.4231 4.67274 9.69948 5.11905 9.25316Z" fill="currentColor"></path>
                                </svg>
                            </svg>
                            <div className="cpcst-certificate-wrapper text-center">
                                <div className="cpcst-certificate-title whitespace-pre-line">{diamond?.diamond?.certificate?.labgrown === true ? "Natural Diamond" : "Lab Diamond"}
                                </div>
                                <div className="cpcst-certificate-image-wrapper w-20 h-20 relative mx-auto">
                                    <CertificateImage
                                        lab={diamond?.diamond?.certificate.lab === "IGI" ? true : false}
                                        className="DiamondCertificate__Image w-full aspect-square fadeIn object-cover"
                                    />
                                </div>
                                <ViewCertificate diamond={diamond} className="cpcst-certificate-text" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DiamondAccordianInformation