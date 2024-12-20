import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { CertificateImage, ViewCertificate } from './ViewCertification';

const AccordianforDetail = ({ ring }) => {
    const { diamond } = useSelector((state) => state.singleDiamond);

    return (
        <div className="mt-4 accordian-main-sec">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='flex items-center gap-2'>
                        <svg className="cpst-tab-icon w-6 h-6" aria-hidden="true" focusable="false"><svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9085 8H11.0919L2 17.0923L19.9924 33.0628L37.9707 17.1189L38 17.0923L28.9085 8ZM11.916 9.99069H21.8844L27.7042 17.0359L19.6717 30.1165L4.90143 17.0067L11.916 9.99069ZM24.0319 26.8208L30.1461 16.8659L24.4671 9.99069H28.084L35.0986 17.0055L24.0319 26.8208ZM19.6447 26.4863L9.19873 17.2133L14.4772 11.9346L13.4674 16.419L19.6447 26.4863Z" fill="currentColor"></path></svg></svg>
                        <div className='cpst-tab-toggler-title flex-1 text-black text-left capitalize'>{ring ? ring : "Diamond"} Details</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='flex items-center gap-2'>
                        <svg className="cpst-tab-icon w-6 h-6" aria-hidden="true" focusable="false">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.1729 13.81L19.5576 10.1576H15.1729V6.15759H3.17285V17.1576H5.04285C5.1528 17.6047 5.40949 18.0021 5.77188 18.2862C6.13427 18.5703 6.58144 18.7246 7.0419 18.7246C7.50236 18.7246 7.94953 18.5703 8.31192 18.2862C8.67431 18.0021 8.931 17.6047 9.04095 17.1576H15.7431C15.8521 17.5865 16.101 17.9668 16.4504 18.2385C16.7998 18.5101 17.2297 18.6576 17.6723 18.6576C18.1148 18.6576 18.5447 18.5101 18.8941 18.2385C19.2435 17.9668 19.4924 17.5865 19.6015 17.1576H21.1726L21.1729 13.81ZM7.04215 17.7241C6.83114 17.7241 6.62486 17.6615 6.44941 17.5443C6.27396 17.4271 6.13722 17.2604 6.05646 17.0655C5.97571 16.8705 5.95459 16.656 5.99575 16.4491C6.03692 16.2421 6.13853 16.052 6.28774 15.9028C6.43695 15.7536 6.62705 15.652 6.83401 15.6108C7.04097 15.5696 7.25549 15.5908 7.45044 15.6715C7.64539 15.7523 7.81201 15.889 7.92925 16.0645C8.04648 16.2399 8.10905 16.4462 8.10905 16.6572C8.10871 16.94 7.99619 17.2112 7.79618 17.4112C7.59618 17.6112 7.32501 17.7237 7.04215 17.7241V17.7241ZM14.1729 16.1572H9.04125C8.9313 15.7101 8.67461 15.3127 8.31222 15.0286C7.94983 14.7445 7.50266 14.5902 7.0422 14.5902C6.58174 14.5902 6.13457 14.7445 5.77218 15.0286C5.40979 15.3127 5.1531 15.7101 5.04315 16.1572H4.17315V7.15719H14.1732V16.1572H14.1729ZM17.6729 17.6572C17.4751 17.6572 17.2817 17.5985 17.1173 17.4887C16.9528 17.3788 16.8247 17.2226 16.749 17.0399C16.6733 16.8571 16.6535 16.6561 16.6921 16.4621C16.7307 16.2681 16.8259 16.0899 16.9657 15.9501C17.1056 15.8102 17.2838 15.715 17.4778 15.6764C17.6717 15.6378 17.8728 15.6576 18.0555 15.7333C18.2383 15.809 18.3944 15.9372 18.5043 16.1016C18.6142 16.2661 18.6729 16.4594 18.6729 16.6572C18.6726 16.9224 18.5671 17.1766 18.3795 17.3641C18.192 17.5516 17.9377 17.657 17.6726 17.6572H17.6729ZM20.1729 16.1572H19.6018C19.4927 15.7283 19.2438 15.348 18.8944 15.0763C18.545 14.8047 18.1151 14.6572 17.6726 14.6572C17.23 14.6572 16.8001 14.8047 16.4507 15.0763C16.1013 15.348 15.8524 15.7283 15.7434 16.1572H15.1734V11.1572H18.915L20.1729 13.918V16.1572ZM16.0229 12.1572H18.1729L16.0229 13.7119V12.1572ZM5.49625 8.44849H12.7842V13.9143L11.5331 9.65589L5.49625 8.44849Z" fill="currentColor">
                                </path>
                            </svg>
                        </svg>
                        <div className='cpst-tab-toggler-title flex-1 text-black text-left capitalize'>Shipping</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='cpst-tab-content'>
                        <div className="cpst-tab-content-wrapper text-customGray-450 py-4 pr-10 pl-3">
                            <p><strong>This item is made to order and takes 2-4 weeks to craft.</strong> We ship FedEx Priority Overnight, signature required and fully insured.</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='flex items-center gap-2'>
                        <svg className="cpst-tab-icon w-6 h-6" aria-hidden="true" focusable="false"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0274 16.6169L8.65655 13.6249L10.3598 11.9214L10.0339 13.3685L12.0274 16.6169ZM12.7684 19.0977L12.7253 19.0712L12.3422 19.4112L5.74225 13.5528L9.07735 10.2176H15.6131L18.9481 13.5528L18.9374 13.5628L12.8558 18.9556L12.7684 19.0977ZM15.1984 11.2177H14.1819L16.2019 13.5092L14.6598 16.019L17.4904 13.509L15.1984 11.2177ZM7.19985 13.5092L12.2661 18.0061L14.9639 13.6161L12.8486 11.2172H9.49145L7.19985 13.5092ZM20.9898 12.5132C20.7546 11.971 20.4253 11.4748 20.0171 11.0474L17.8235 8.69469C17.3977 8.20898 16.8432 7.85349 16.224 7.66919C15.914 7.57973 15.5933 7.53228 15.2706 7.52809L14.4698 7.49809L11.2666 7.37599L6.11415 7.17999L6.75715 4.95999L2.57715 8.10739L6.75715 11.2549L6.13985 9.09789L11.2577 8.95999L14.4622 8.87399L15.2632 8.85249C15.4751 8.83882 15.6879 8.85481 15.8953 8.89999C16.3146 8.995 16.6963 9.21182 16.9926 9.52319L19.3135 11.7177C20.0235 12.4149 20.6215 13.2733 20.1894 14.0389C19.5808 14.858 18.8593 15.5869 18.0464 16.2039L15.7198 18.2709L15.6236 18.3563C15.5937 18.3829 15.574 18.419 15.5677 18.4586C15.5615 18.4981 15.5691 18.5386 15.5894 18.5731C15.6097 18.6076 15.6413 18.634 15.6789 18.6478C15.7165 18.6616 15.7577 18.662 15.7954 18.6488C15.8534 18.6294 15.9077 18.6006 15.9561 18.5634L16.0426 18.5017L16.2063 18.3802L16.5263 18.1357L17.1605 17.6433L18.4227 16.655L19.685 15.6697C20.1589 15.3287 20.564 14.9012 20.8789 14.4097C21.0466 14.1236 21.1441 13.802 21.1635 13.471C21.1711 13.1433 21.112 12.8174 20.9898 12.5132V12.5132Z" fill="currentColor"></path></svg></svg>
                        <div className='cpst-tab-toggler-title flex-1 text-black text-left capitalize'>Return Policy</div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='cpst-tab-content'>
                        <div className="cpst-tab-content-wrapper text-customGray-450 py-4 pr-10 pl-3">
                            <p tabIndex="-1">Received an item you don't like? KEYZAR is proud to offer free returns within <strong>30 days from receiving your item</strong>. Contact our support team to issue a return.</p>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordianforDetail